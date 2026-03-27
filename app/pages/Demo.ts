
export interface Stat {
  title: string
  value: number
  change: string
  icon: string
  gradient: string
}

export const stats: Stat[] = [
  { title: "Total Patients", value: 1560, change: "+2%", icon: "👥", gradient: "stat-gradient-1" },
  { title: "Appointments", value: 156, change: "+8%", icon: "📅", gradient: "stat-gradient-2" },
  { title: "Revenue (₹)", value: 610000, change: "+18%", icon: "💰", gradient: "stat-gradient-3" },
  { title: "Beds Available", value: 42, change: "-5%", icon: "🛏️", gradient: "stat-gradient-4" },
]

export interface Appointment {
  patient: string
  doctor: string
  time: string
  type: string
}

export const appointments: Appointment[] = [
  { patient: "Rahul Sharma", doctor: "Dr. Mehta", time: "09:00 AM", type: "Checkup" },
  { patient: "Priya Patel", doctor: "Dr. Singh", time: "10:30 AM", type: "Surgery" },
  { patient: "Neha Verma", doctor: "Dr. Reddy", time: "02:00 PM", type: "Follow-up" },
  { patient: "Vikram Joshi", doctor: "Dr. Iyer", time: "03:30 PM", type: "Lab Test" },
]

export interface QuickStat {
  label: string
  value: number
  color: string
}

export const quickStats: QuickStat[] = [
  { label: "ICU Occupancy", value: 78, color: "bg-destructive" },
  { label: "OPD Today", value: 65, color: "bg-primary" },
  { label: "Surgery Queue", value: 45, color: "bg-warning" },
  { label: "Lab Reports Pending", value: 30, color: "bg-info" },
]


export interface Patient {
  id: string
  name: string
  age: number
  gender: "Male" | "Female"
  condition: string
  status: "Active" | "Discharged"
  admitted: string
}

export const patients: Patient[] = [
  { id: "P001", name: "Rahul Sharma", age: 45, gender: "Male", condition: "Diabetes", status: "Active", admitted: "2024-01-15" },
  { id: "P002", name: "Priya Patel", age: 32, gender: "Female", condition: "Hypertension", status: "Discharged", admitted: "2024-01-10" },
  { id: "P004", name: "Neha Verma", age: 27, gender: "Female", condition: "Fracture", status: "Active", admitted: "2024-01-20" },
  { id: "P005", name: "Vikram Joshi", age: 63, gender: "Male", condition: "Pneumonia", status: "Active", admitted: "2024-01-12" },
  { id: "P006", name: "Anita Singh", age: 41, gender: "Female", condition: "Asthma", status: "Discharged", admitted: "2024-01-08" },
  { id: "P007", name: "Suresh Reddy", age: 55, gender: "Male", condition: "Kidney Stone", status: "Active", admitted: "2024-01-22" },
  { id: "P008", name: "Kavita Das", age: 36, gender: "Female", condition: "Thyroid", status: "Active", admitted: "2024-01-19" },
]

export const statusColor = {
  Active: "bg-success/10 text-success",
  Discharged: "bg-info/10 text-info"
}
export interface Department {
  name: string
  head: string
  patients: number
  beds: number
  occupancy: number
  icon: string
}

export const departments: Department[] = [
  { name: "Cardiology", head: "Dr. Mehta", patients: 48, beds: 30, occupancy: 85, icon: "❤️" },
  { name: "Orthopedics", head: "Dr. Singh", patients: 35, beds: 25, occupancy: 72, icon: "🦴" },
  { name: "Neurology", head: "Dr. Gupta", patients: 28, beds: 20, occupancy: 90, icon: "🧠" },
  { name: "Pediatrics", head: "Dr. Reddy", patients: 42, beds: 35, occupancy: 60, icon: "👶" },
  { name: "Emergency", head: "Dr. Iyer", patients: 22, beds: 15, occupancy: 95, icon: "🚑" },
  { name: "General Medicine", head: "Dr. Sharma", patients: 55, beds: 40, occupancy: 68, icon: "🩺" },
]

export interface RevenueData {
  month: string
  value: number
}

export const revenue: RevenueData[] = [
  { month: "Jan", value: 420000 },
  { month: "Feb", value: 380000 },
  { month: "Mar", value: 510000 },
  { month: "Apr", value: 470000 },
  { month: "May", value: 550000 },
  { month: "Jun", value: 610000 },
]

export interface VisitData {
  day: string
  opd: number
  emergency: number
}

export const visits: VisitData[] = [
  { day: "Mon", opd: 120, emergency: 35 },
  { day: "Tue", opd: 98, emergency: 42 },
  { day: "Wed", opd: 140, emergency: 28 },
  { day: "Thu", opd: 115, emergency: 38 },
  { day: "Fri", opd: 130, emergency: 45 },
]

export interface DeptDataItem {
  name: string
  value: number
}

export const deptData: DeptDataItem[] = [
  { name: "Cardiology", value: 30 },
  { name: "Orthopedics", value: 22 },
  { name: "Neurology", value: 18 },
  { name: "Pediatrics", value: 15 },
  { name: "General", value: 15 },
]

export const COLORS = ["hsl(174,62%,40%)", "hsl(210,80%,55%)", "hsl(38,92%,55%)", "hsl(152,60%,42%)", "hsl(0,72%,55%)"]
