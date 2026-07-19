// Server-side proxy for skydiveflanders.be's public planning API.
// Their /api/* endpoints don't send CORS headers, so the browser can't call
// them directly from our domain — this function fetches them here instead
// and returns combined JSON to our own frontend.
export default async function handler(req, res) {
  try {
    const now = new Date()
    const start = new Date(now)
    start.setUTCHours(0, 0, 0, 0)
    const end = new Date(start)
    end.setUTCDate(end.getUTCDate() + 14)
    end.setUTCHours(23, 59, 59, 999)

    const startDate = req.query.startDate || start.toISOString()
    const endDate = req.query.endDate || end.toISOString()

    const base = "https://skydiveflanders.be/api"
    const [planningRes, statusesRes, aircraftRes] = await Promise.all([
      fetch(`${base}/planning?startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`),
      fetch(`${base}/statuses`),
      fetch(`${base}/settings/dropzone-aircraft`),
    ])

    if (!planningRes.ok || !statusesRes.ok || !aircraftRes.ok) {
      res.status(502).json({ error: "Upstream request failed" })
      return
    }

    const [planning, statuses, aircraft] = await Promise.all([
      planningRes.json(),
      statusesRes.json(),
      aircraftRes.json(),
    ])

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=900")
    res.status(200).json({ planning, statuses, aircraft, startDate, endDate })
  } catch {
    res.status(502).json({ error: "Failed to reach upstream planning API" })
  }
}
