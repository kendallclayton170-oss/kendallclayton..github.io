"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date("2025-08-22T00:00:00")

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const isEclipseDay = true // timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: isEclipseDay ? `url('/vintage-eclipse.png')` : `url('/vintage-celestial-art.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 16 + 12}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
              color: Math.random() > 0.5 ? "#8B5A3C" : "#6B8E23",
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <div className={`absolute inset-0 ${isEclipseDay ? "bg-black/40" : "bg-amber-900/20"}`}></div>

      <Card
        className={`w-full max-w-2xl p-8 backdrop-blur-sm shadow-2xl border-2 relative z-10 ${
          isEclipseDay ? "bg-black/60 border-yellow-400/50" : "bg-amber-50/90 border-amber-200"
        }`}
      >
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent leading-tight tracking-wide">
              Until We Meet Again
            </h1>
            <p className="text-xl font-serif text-amber-800 font-medium italic">Counting down to Friday, August 22nd</p>
          </div>

          {!isEclipseDay && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl p-4 text-white shadow-lg">
                <div className="text-3xl md:text-4xl font-serif font-bold">{timeLeft.days}</div>
                <div className="text-sm font-sans uppercase tracking-wide">Days</div>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-xl p-4 text-white shadow-lg">
                <div className="text-3xl md:text-4xl font-serif font-bold">{timeLeft.hours}</div>
                <div className="text-sm font-sans uppercase tracking-wide">Hours</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-700 to-amber-800 rounded-xl p-4 text-white shadow-lg">
                <div className="text-3xl md:text-4xl font-serif font-bold">{timeLeft.minutes}</div>
                <div className="text-sm font-sans uppercase tracking-wide">Minutes</div>
              </div>
              <div className="bg-gradient-to-br from-amber-700 to-orange-800 rounded-xl p-4 text-white shadow-lg">
                <div className="text-3xl md:text-4xl font-serif font-bold">{timeLeft.seconds}</div>
                <div className="text-sm font-sans uppercase tracking-wide">Seconds</div>
              </div>
            </div>
          )}

          {!isEclipseDay && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-300">
              <p className="text-xl font-serif text-amber-900 leading-relaxed font-medium italic tracking-wide">
                Until we meet again, I will look upon the moon and feel your light, hayati x
              </p>
            </div>
          )}

          {isEclipseDay && (
            <div className="text-center space-y-8">
              <div className="relative">
                <h2 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent leading-tight animate-pulse">
                  IT'S ECLIPSE DAY, MY DEAR XO
                </h2>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 blur-xl rounded-full animate-pulse"></div>
              </div>

              <div className="flex justify-center items-center space-x-4 text-6xl">
                <span className="animate-bounce" style={{ animationDelay: "0s" }}>
                  🌙
                </span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                  ✨
                </span>
                <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                  ☀️
                </span>
                <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>
                  💫
                </span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
