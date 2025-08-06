"use client"
import { useState, useEffect } from "react"

export default function APITestPage() {
    const [userName, setUserName] = useState<string>("");

    const fetchWhoAmI = async () => {
        const response = await fetch("/api/whoami");
        const data = await response.json();
        console.log(data)
        setUserName(data.name );
    };

    useEffect(() => {
        fetchWhoAmI();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Who Am I</h1>
                <p className="text-gray-500">Current user session name:</p>
                <div className="text-blue-700 text-lg font-medium">
                    {userName || "Loading..."}
                </div>
            </div>
        </div>
    );
}