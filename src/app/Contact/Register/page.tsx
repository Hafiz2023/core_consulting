"use client";

import Link from "next/link";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Form Container */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl p-6 md:p-8">
        {/* Close Button */}
        <Link
          href="/"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
          aria-label="Close"
        >
          ✕
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h1>
        <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>

        {/* Form */}
        <form className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            className="w-full px-4 py-3 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="w-full px-4 py-3 border rounded-md"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone No*"
            required
            className="w-full px-4 py-3 border rounded-md"
          />
          <input
            type="text"
            name="trainingName"
            placeholder="Training Name*"
            required
            className="w-full px-4 py-3 border rounded-md"
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name*"
            required
            className="w-full px-4 py-3 border rounded-md"
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation*"
            required
            className="w-full px-4 py-3 border rounded-md"
          />
          <input
            type="text"
            name="country"
            placeholder="Country*"
            required
            className="w-full px-4 py-3 border rounded-md"
          />

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
