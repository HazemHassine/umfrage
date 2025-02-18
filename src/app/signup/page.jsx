"use client"

import { useState } from "react"
import { auth } from "@/lib/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { motion, AnimatePresence } from "framer-motion"
import { createUser } from "@/lib/api"
import { useRouter } from "next/navigation"


export default function SignUpPage() {
  const router = useRouter()
  // Role selection: "participant" or "creator"
  const [role, setRole] = useState(null)  

  // Common fields
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Participant-specific fields
  const [age, setAge] = useState("")
  const [occupation, setOccupation] = useState("")
  const [occupationOther, setOccupationOther] = useState("")

  // Creator-specific fields
  const [creatorType, setCreatorType] = useState("")
  const [creatorOther, setCreatorOther] = useState("")

  const [loading, setLoading] = useState(false)

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (!role) {
      alert("Please select a role to continue.")
      return
    }

    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // Prepare user data based on role
      const userData = {
        uid: user.uid,
        name,
        email,
        role,
        ...(role === "participant"
          ? { age, occupation: occupation === "Other" ? occupationOther : occupation }
          : { creatorType: creatorType === "Other" ? creatorOther : creatorType }),
      }

      // Send user data to our API to store in MongoDB
      await createUser(userData)
      router.replace("/profile")
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent">
          Create an Account
        </h2>
        {/* Role Selection Toggle */}
        <div className="flex flex-col sm:flex-row justify-center mb-6 space-y-2 sm:space-y-0 sm:space-x-4">
          <motion.button
            onClick={() => setRole("participant")}
            whileHover={{ scale: 1.05 }}
            className={`py-2 px-4 rounded-lg text-lg font-medium transition-colors ${
              role === "participant"
                ? "bg-gradient-to-br from-blue-900 to-purple-900 text-white"
                : "bg-gradient-to-br from-blue-900 to-purple-900 opacity-30 text-white"
            }`}
          >
            Poll Participant
          </motion.button>
          <motion.button
            onClick={() => setRole("creator")}
            whileHover={{ scale: 1.05 }}
            className={`py-2 px-4 rounded-lg text-lg font-medium transition-colors ${
              role === "creator"
                ? "bg-gradient-to-br from-blue-900 to-purple-900 text-white"
                : "bg-gradient-to-br from-blue-900 to-purple-900 opacity-30 text-white"
            }`}
          >
            Poll Creator
          </motion.button>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Common Fields */}
          <div>
            <label className="text-gray-700 block mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
              className="drop-shadow-xl w-full p-3 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-700 block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="drop-shadow-xl w-full p-3 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-700 block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a password"
              className="drop-shadow-xl w-full p-3 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Role-Specific Fields */}
          <AnimatePresence mode="wait">
            {role === "participant" && (
              <motion.div
                key="participant"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <label className="text-gray-700 block mb-1">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    placeholder="Enter your age"
                    className="drop-shadow-xl w-full p-3 rounded-lg bg-gradient-to-br from-blue-900 to-purple-900 text-white placeholder-gray-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-700 block mb-1">Occupation</label>
                  <select
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    required
                    className="drop-shadow-xl w-full p-3 rounded-lg bg-gradient-to-br from-blue-900 to-purple-900 text-white focus:outline-none"
                  >
                    <option value="">Select your occupation</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Self-Employed">Self-Employed</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {occupation === "Other" && (
                  <div>
                    <label className="text-gray-700 block mb-1">Please specify your occupation</label>
                    <input
                      type="text"
                      value={occupationOther}
                      onChange={(e) => setOccupationOther(e.target.value)}
                      required
                      placeholder="Your occupation"
                      className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {role === "creator" && (
              <motion.div
                key="creator"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <label className="text-gray-700 block mb-1">Creator Type</label>
                  <select
                    value={creatorType}
                    onChange={(e) => setCreatorType(e.target.value)}
                    required
                    className="drop-shadow-xl w-full p-3 rounded-lg bg-gradient-to-br from-blue-900 to-purple-900 text-white focus:outline-none"
                  >
                    <option value="">Select your creator type</option>
                    <option value="Individual">Individual</option>
                    <option value="Company">Company</option>
                    <option value="University">University</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {creatorType === "Other" && (
                  <div>
                    <label className="text-gray-700 block mb-1">Please specify your affiliation</label>
                    <input
                      type="text"
                      value={creatorOther}
                      onChange={(e) => setCreatorOther(e.target.value)}
                      required
                      placeholder="Your affiliation"
                      className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
                    />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-4 text-lg font-semibold rounded-lg text-white ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-500"
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </motion.button>

          <p className="mt-4 text-center text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 underline">
              Log in
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  )
}

