"use client"

import { useState } from "react"
import { patients, Patient, statusColor } from "./Demo"

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<"All" | "Active" | "Discharged">("All")

  const filteredPatients = patients.filter((patient: Patient) => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "All" || patient.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as "All" | "Active" | "Discharged")}
            className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Discharged">Discharged</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card p-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Patients</h3>
          <p className="text-2xl font-bold text-foreground">{patients.length}</p>
        </div>
        <div className="glass-card p-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Active</h3>
          <p className="text-2xl font-bold text-success">{patients.filter(p => p.status === "Active").length}</p>
        </div>
        <div className="glass-card p-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Discharged</h3>
          <p className="text-2xl font-bold text-info">{patients.filter(p => p.status === "Discharged").length}</p>
        </div>
      </div>

      {/* Patients Table */}
      <div className="glass-card p-5">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">ID</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Age</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Gender</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Condition</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Admitted</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient: Patient) => (
                <tr key={patient.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground">{patient.id}</td>
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-foreground">{patient.name}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-foreground">{patient.age}</td>
                  <td className="py-3 px-4 text-foreground">{patient.gender}</td>
                  <td className="py-3 px-4 text-foreground">{patient.condition}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[patient.status]}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{patient.admitted}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredPatients.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No patients found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}