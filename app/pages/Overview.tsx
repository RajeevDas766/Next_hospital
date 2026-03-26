import { useState, useEffect, useRef } from "react"
import { stats, appointments, quickStats } from "./Demo"

// Animated counter hook (inline)
function useCounter(target, duration = 1200) {
  const [count, setCount] = useState(0)
  const raf = useRef(0)
  useEffect(() => {
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [target, duration])
  return count
}

function StatCard({ title, value, change, icon, gradient }) {
  const animated = useCounter(value)
  const isPositive = change.startsWith("+")
  return (
    <div className="glass-card p-5 flex items-center gap-4">
      <div className={`w-14 h-14 rounded-2xl ${gradient} flex items-center justify-center text-2xl text-white shadow-lg`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold text-foreground">{animated.toLocaleString()}</p>
        <span className={`text-xs font-semibold ${isPositive ? "text-success" : "text-destructive"}`}>{change}</span>
      </div>
    </div>
  )
}

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => <StatCard key={s.title} {...s} />)}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Appointments */}
        <div className="glass-card p-5">
          <h3 className="text-base font-bold text-foreground mb-4">Today's Appointments</h3>
          <div className="space-y-3">
            {appointments.map((a, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {a.patient.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{a.patient}</p>
                    <p className="text-xs text-muted-foreground">{a.doctor}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{a.time}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{a.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="glass-card p-5">
          <h3 className="text-base font-bold text-foreground mb-4">Quick Stats</h3>
          <div className="space-y-4">
            {quickStats.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-semibold text-foreground">{item.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${item.color} transition-all duration-1000`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
