"use client";
import { Button } from "@/components/ui/button";
import { Calendar, Rocket } from "lucide-react";
import Image from "next/image";
import Feature from "@/components/feature";
import Navbar from "@/components/navbar";

export default function Component() {
  return (
    <div className="min-h-screen text-zinc-100 overflow-hidden relative">
      {/* Global Styles */}

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-[800px] mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-1.5 text-sm mb-8">
              <Rocket className="h-4 w-4 mr-2 text-red-400" />
              <span className="text-zinc-300">
                Build MVPs in weeks, not months
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              From Idea to Launch
              <br />
              in Record Time
            </h1>

            <p className="text-xl text-zinc-300/85 max-w-[600px] mx-auto">
              Create a clear roadmap, track progress, and smoothly guide your
              project from idea to successful launch.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-my-gradient text-zinc-100 text-lg px-8 py-6 font-semibold [&_svg]:size-5"
              >
                Book a call
                <Calendar absoluteStrokeWidth />
              </Button>
            </div>
          </div>

          {/* Feature Preview */}
          {/* <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="MVP Builder Dashboard"
              width={800}
              height={400}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div> */}

          {/* Feature section */}
          <Feature />

          {/* Trust Section */}
          <div className="mt-20 text-center relative z-20">
            <p className="text-sm text-zinc-500 mb-8">
              Trusted by 50,000+ businesses for innovative design and growth
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center opacity-50">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src="/placeholder-logo.svg"
                  alt={`Client Logo ${i}`}
                  width={120}
                  height={40}
                  className="mx-auto"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
