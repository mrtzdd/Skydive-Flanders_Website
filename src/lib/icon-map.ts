import {
  Wind,
  GraduationCap,
  Users,
  Target,
  Gift,
  ClipboardList,
  BookOpen,
  Backpack,
  PlaneTakeoff,
  TrendingUp,
  UserCheck,
  Award,
  ShieldCheck,
  LifeBuoy,
  CloudSun,
  ClipboardCheck,
  Globe,
  Eye,
  type LucideIcon,
} from "lucide-react"

export const serviceIconMap: Record<string, LucideIcon> = {
  parachute: Wind,
  graduation: GraduationCap,
  users: Users,
  target: Target,
  gift: Gift,
}

export const trainingIconMap: Record<string, LucideIcon> = {
  clipboard: ClipboardList,
  book: BookOpen,
  backpack: Backpack,
  "plane-takeoff": PlaneTakeoff,
  "trending-up": TrendingUp,
  "user-check": UserCheck,
  award: Award,
}

export const safetyIconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "life-buoy": LifeBuoy,
  "graduation-cap": GraduationCap,
  "cloud-sun": CloudSun,
  "clipboard-check": ClipboardCheck,
  globe: Globe,
  eye: Eye,
}
