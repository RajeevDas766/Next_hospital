"use client"
import { departments, Department } from "./Demo"

export default function Departments() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {departments.map((d: Department) => (
        <div key={d.name} className="glass-card p-5 hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{d.icon}</span>
            <div>
              <h3 className="text-base font-bold text-foreground">{d.name}</h3>
              <p className="text-xs text-muted-foreground">{d.head}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-secondary/50 rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-foreground">{d.patients}</p>
              <p className="text-xs text-muted-foreground">Patients</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-foreground">{d.beds}</p>
              <p className="text-xs text-muted-foreground">Beds</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Occupancy</span>
              <span className={`font-bold ${d.occupancy > 85 ? "text-destructive" : "text-success"}`}>{d.occupancy}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${d.occupancy > 85 ? "bg-destructive" : "bg-primary"}`}
                style={{ width: `${d.occupancy}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
