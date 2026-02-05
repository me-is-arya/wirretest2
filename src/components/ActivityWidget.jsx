import { useState, useEffect } from "react";
import { Shield, RefreshCw, Filter, CheckCircle, XCircle, LogIn, Key, AlertTriangle } from "lucide-react";

// Mock API Call (Do not modify this part heavily, simulate a backend)
const fetchActivityData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // TRAP: Some 'success' events are actually failures based on riskScore
            resolve([
                { id: 1, action: "Login Attempt", status: "success", timestamp: new Date(Date.now() - 1000 * 60).toISOString(), ip: "192.168.1.1", metadata: { riskScore: 10, verified: true } },
                { id: 2, action: "Login Attempt", status: "success", timestamp: new Date(Date.now() - 1000 * 65).toISOString(), ip: "192.168.1.1", metadata: { riskScore: 12, verified: true } }, // Should be folded with #1
                { id: 3, action: "Password Change", status: "success", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), ip: "192.168.1.1", metadata: { riskScore: 85, verified: false } }, // TRAP: High risk, treat as FAILED
                { id: 4, action: "2FA Verification", status: "failed", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25).toISOString(), ip: "::ffff:192.168.1.1", metadata: { riskScore: 5, verified: true } }, // IPv6 mapped
                { id: 5, action: "API Key Gen", status: "success", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), ip: "10.0.0.5", metadata: { riskScore: 92, verified: true } }, // TRAP: High risk
            ]);
        }, 800);
    });
};

export default function ActivityWidget() {
    // TODO: Implement State for data, loading, error, and filter
    const [data, setData] = useState([]);

    // TODO: Fetch data on mount

    // TODO: Implement filtering logic

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-slate-900 text-slate-100 rounded-xl shadow-2xl border border-slate-800">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    Security Activity
                </h2>
                {/* TODO: Add Refresh Button */}
            </div>

            {/* TODO: Add Filter Controls */}

            <div className="space-y-4">
                {/* TODO: Render your list here. Handle Loading and Error states. */}
                <p className="text-center text-slate-500 py-8 italic">
                    Activity log will appear here...
                </p>
            </div>
        </div>
    );
}
