"use client"

import { BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { revenue, visits, deptData, COLORS, RevenueData, VisitData, DeptDataItem } from "./Demo"

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="glass-card p-5">
          <h3 className="text-base font-bold text-foreground mb-4">Revenue Trend (₹)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={revenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210,15%,90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="hsl(174,62%,40%)" fill="hsl(174,62%,40%)" fillOpacity={0.15} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-5">
          <h3 className="text-base font-bold text-foreground mb-4">Patient Visits</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={visits}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210,15%,90%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="opd" fill="hsl(210,80%,55%)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="emergency" fill="hsl(38,92%,55%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card p-5">
        <h3 className="text-base font-bold text-foreground mb-4">Department Distribution</h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={deptData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label={({ name, percent }: { name: string; percent: number }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {deptData.map((_: DeptDataItem, i: number) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
