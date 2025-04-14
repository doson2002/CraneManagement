import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="rounded" />
            <h1 className="text-2xl font-bold text-blue-800">Crane Management System</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold text-blue-900">Comprehensive Crane Management Solution</h2>
            <p className="text-lg text-gray-700">
              Streamline your crane operations, maintenance, and workforce management with our all-in-one platform.
            </p>
            <div className="flex gap-4">
              <Link href="/login">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  Get Started
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Crane Management"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div id="features" className="mt-24 space-y-12">
          <h2 className="text-center text-3xl font-bold text-blue-900">Key Features</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Crane Operations",
                description: "Manage crane startup, operation tracking, and status monitoring in real-time.",
                icon: "🏗️",
              },
              {
                title: "Maintenance Management",
                description: "Schedule, track, and document all maintenance activities with ease.",
                icon: "🔧",
              },
              {
                title: "Workforce Management",
                description: "Manage operator certifications, assignments, and performance tracking.",
                icon: "👷",
              },
              {
                title: "Equipment Tracking",
                description: "Keep detailed records of all equipment, parts, and supplies.",
                icon: "📦",
              },
              {
                title: "Supplier Management",
                description: "Manage relationships with suppliers and service providers.",
                icon: "🤝",
              },
              {
                title: "Advanced Security",
                description: "Face ID authentication and comprehensive access controls.",
                icon: "🔒",
              },
            ].map((feature, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-blue-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-blue-900 py-12 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">Crane Management System</h3>
              <p className="text-blue-200">Comprehensive solution for crane operations and maintenance management.</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/login" className="hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-white">
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Contact</h3>
              <ul className="space-y-2 text-blue-200">
                <li>Email: info@cranemgmt.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Crane Street, City</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-blue-800 pt-8 text-center text-blue-200">
            <p>© {new Date().getFullYear()} Crane Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
