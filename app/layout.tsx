"use client"

import "./globals.css"
import { useState, useCallback, useEffect } from "react"
import Overview from "./pages/Overview"
import Patients from "./pages/Patients"
import Analytics from "./pages/Analytics"
import Departments from "./pages/Departments"

const menu = [
  { id: "overview", label: "Overview", icon: "📊" },
  { id: "patients", label: "Patients", icon: "🏥" },
  { id: "analytics", label: "Analytics", icon: "📈" },
  { id: "departments", label: "Departments", icon: "🏢" },
]

const titles = {
  overview: "Dashboard Overview",
  patients: "Patient Management",
  analytics: "Analytics & Reports",
  departments: "Departments",
}

export default function Layout() {
   const [page, setPage] = useState("overview")
  const [collapsed, setCollapsed] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const navigate = useCallback((p) => setPage(p), [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const renderPage = () => {
    switch (page) {
      case "patients": return <Patients />
      case "analytics": return <Analytics />
      case "departments": return <Departments />
      default: return <Overview />
    }
  }
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen bg-background">
          {/* Sidebar */}
          <aside className={`fixed left-0 top-0 h-screen bg-sidebar-bg text-sidebar-fg flex flex-col z-50 transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
            <div className="sidebar-header flex-col px-5 py-6 border-b border-white/10">
              <span className="text-3xl">🏥</span>
              {!collapsed && (
                <div>
                  <h1 className="text-lg font-bold text-white text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>Next Hospital <br />
                    Dashboard</h1>
                  {/* <p className="text-xs text-white/60">H</p> */}
                </div>
              )}
            </div>
            <nav className="flex-1 py-4 px-3 space-y-1">
              {menu.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                    page === item.id
                      ? "bg-sidebar-active text-white shadow-lg shadow-sidebar-active/30"
                      : "text-sidebar-fg hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </button>
              ))}
            </nav>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="px-5 py-4 border-t border-white/10 text-sidebar-fg hover:text-white transition-colors text-sm flex items-center gap-2"
            >
              <span className="text-lg">{collapsed ? "→" : "←"}</span>
              {!collapsed && <span>Collapse</span>}
            </button>
          </aside>

          {/* Main */}
          <main className={`flex-1 ${collapsed ? "ml-20" : "ml-64"} p-6 lg:p-8 transition-all duration-300`}>
            <header className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">{titles[page] || "Dashboard"}</h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    alert('Emergency Call: Dialing emergency services...')
                    window.location.href = 'tel:108'
                  }}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  title="Emergency Call"
                >
                  🚨
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                  {darkMode ? "🌙" : "💡"}
                </button>
                <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
                {/* <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm"></div> */}
              </div>
            </header>
            <div className="animate-fade-in">{renderPage()}</div>
          </main>
        </div>
      </body>
    </html>
  )
}