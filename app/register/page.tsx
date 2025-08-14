'use client'
import { FormEvent } from "react";

export default function Register() {
    const handleregister = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
    
        try {
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
    
        if (!response.ok) {
            throw new Error("Failed to register");
        }
    
        const data = await response.json();
        console.log("Registration successful:", data);
        // Redirect or show success message
        } catch (error) {
        console.error("Registration error:", error);
        // Handle error (e.g., show error message)
        }
    };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h1>
        
        <form className="space-y-5" onSubmit={handleregister} >
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
            name="email"
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
            name="password"
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 transition"
          >
            Register
          </button>
        </form>

        {/* Footer link */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
