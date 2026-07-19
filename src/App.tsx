import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Aircraft from "@/pages/Aircraft"
import Training from "@/pages/Training"
import Safety from "@/pages/Safety"
import Team from "@/pages/Team"
import Gallery from "@/pages/Gallery"
import Faq from "@/pages/Faq"
import Booking from "@/pages/Booking"
import Contact from "@/pages/Contact"
import Documents from "@/pages/Documents"
import Weather from "@/pages/Weather"
import Agenda from "@/pages/Agenda"
import Prijslijst from "@/pages/Prijslijst"
import { Privacy, Cookies } from "@/pages/Legal"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vliegtuig" element={<Aircraft />} />
          <Route path="opleiding" element={<Training />} />
          <Route path="veiligheid" element={<Safety />} />
          <Route path="team" element={<Team />} />
          <Route path="galerij" element={<Gallery />} />
          <Route path="faq" element={<Faq />} />
          <Route path="reserveren" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="documenten" element={<Documents />} />
          <Route path="weer" element={<Weather />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="prijslijst" element={<Prijslijst />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
