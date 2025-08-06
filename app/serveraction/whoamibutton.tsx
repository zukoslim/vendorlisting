"use client"
import { useState } from "react"

export default function WhoAmIButton({ whoAMIAction }: { whoAMIAction: () => Promise<string> }) {
    const [result, setResult] = useState<string>();

    return (
        <div className="space-y-4">
            <button
                onClick={async () => {
                    setResult(await whoAMIAction());
                }}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
                WHO AM I
            </button>
            <div className="text-blue-700 text-lg font-medium">
                {result && <h1>You are {result}</h1>}
            </div>
        </div>
    )
}
