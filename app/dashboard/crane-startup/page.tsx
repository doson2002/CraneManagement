"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Camera, CheckCircle2, Clipboard, ConeIcon as Crane, FileCheck, MapPin, User } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function CraneStartupPage() {
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(25)
  const [photo, setPhoto] = useState<string | null>(null)

  const handleNextStep = () => {
    const nextStep = step + 1
    setStep(nextStep)
    setProgress(nextStep * 25)
  }

  const handlePrevStep = () => {
    const prevStep = step - 1
    setStep(prevStep)
    setProgress(prevStep * 25)
  }

  const handleTakePhoto = () => {
    // In a real app, this would access the camera
    // For demo purposes, we'll just set a placeholder
    setPhoto("/placeholder.svg?height=300&width=400")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Crane Startup</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Crane Startup Procedure</CardTitle>
          <CardDescription>Complete all steps to safely start up a crane</CardDescription>
          <Progress value={progress} className="mt-2" />
        </CardHeader>
        <CardContent>
          <Tabs value={`step-${step}`} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="step-1" disabled={step !== 1}>
                Step 1: Details
              </TabsTrigger>
              <TabsTrigger value="step-2" disabled={step !== 2}>
                Step 2: Maintenance Check
              </TabsTrigger>
              <TabsTrigger value="step-3" disabled={step !== 3}>
                Step 3: Safety Check
              </TabsTrigger>
              <TabsTrigger value="step-4" disabled={step !== 4}>
                Step 4: Verification
              </TabsTrigger>
            </TabsList>

            <TabsContent value="step-1" className="space-y-4 py-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="crane">Select Crane</Label>
                  <Select>
                    <SelectTrigger id="crane">
                      <SelectValue placeholder="Select crane" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hc-123">HC-123: Heavy Crane 123</SelectItem>
                      <SelectItem value="tc-456">TC-456: Tower Crane 456</SelectItem>
                      <SelectItem value="hc-789">HC-789: Heavy Crane 789</SelectItem>
                      <SelectItem value="mc-234">MC-234: Mobile Crane 234</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job">Job Reference</Label>
                  <Select>
                    <SelectTrigger id="job">
                      <SelectValue placeholder="Select job" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="job-001">JOB-001: North Tower Construction</SelectItem>
                      <SelectItem value="job-002">JOB-002: Main Building Foundation</SelectItem>
                      <SelectItem value="job-003">JOB-003: Bridge Support Installation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shift">Working Shift</Label>
                  <Select>
                    <SelectTrigger id="shift">
                      <SelectValue placeholder="Select shift" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (6:00 AM - 2:00 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (2:00 PM - 10:00 PM)</SelectItem>
                      <SelectItem value="night">Night (10:00 PM - 6:00 AM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="operator">Operator</Label>
                  <Select>
                    <SelectTrigger id="operator">
                      <SelectValue placeholder="Select operator" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Doe</SelectItem>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                      <SelectItem value="mike">Mike Smith</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea id="notes" placeholder="Enter any additional notes or special instructions" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="step-2" className="space-y-4 py-4">
              <Alert className="bg-amber-50 border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-600">Maintenance Check Required</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Verify that all maintenance requirements have been met before proceeding.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Clipboard className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Last Maintenance Record</h3>
                      <p className="text-sm text-muted-foreground">Regular Inspection - Completed on June 15, 2023</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Maintenance Checklist</Label>
                  <div className="space-y-2 rounded-md border p-4">
                    {[
                      "All fluid levels are within acceptable ranges",
                      "No visible leaks or damage to hydraulic systems",
                      "All cables and pulleys are in good condition",
                      "All safety systems are functional",
                      "All structural components are secure",
                      "All controls are responsive and functional",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`check-${index}`} />
                        <label
                          htmlFor={`check-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Take Photo of Maintenance Tag</Label>
                  <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-6">
                    {photo ? (
                      <div className="relative h-[200px] w-full">
                        <Image
                          src={photo || "/placeholder.svg"}
                          alt="Maintenance tag"
                          fill
                          className="object-contain"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute right-2 top-2"
                          onClick={() => setPhoto(null)}
                        >
                          Retake
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="rounded-full bg-muted p-4">
                          <Camera className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Take a photo of the maintenance tag to verify recent service
                        </p>
                        <Button onClick={handleTakePhoto}>Take Photo</Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="step-3" className="space-y-4 py-4">
              <Alert className="bg-blue-50 border-blue-200">
                <FileCheck className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-600">Safety Check Required</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Complete all safety checks before proceeding with crane startup.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Pre-Startup Safety Checklist</Label>
                  <div className="space-y-2 rounded-md border p-4">
                    {[
                      "Area around crane is clear of personnel and obstacles",
                      "Weather conditions are suitable for crane operation",
                      "All safety guards and devices are in place",
                      "Warning signs and barriers are properly positioned",
                      "Communication systems are functional",
                      "Emergency stop buttons are accessible and functional",
                      "Fire extinguishers are available and charged",
                      "First aid kit is available and complete",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`safety-${index}`} />
                        <label
                          htmlFor={`safety-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Take Photo of Crane and Surrounding Area</Label>
                  <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-6">
                    {photo ? (
                      <div className="relative h-[200px] w-full">
                        <Image src={photo || "/placeholder.svg"} alt="Crane area" fill className="object-contain" />
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute right-2 top-2"
                          onClick={() => setPhoto(null)}
                        >
                          Retake
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="rounded-full bg-muted p-4">
                          <Camera className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Take a photo of the crane and surrounding area to document conditions
                        </p>
                        <Button onClick={handleTakePhoto}>Take Photo</Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="safety-notes">Safety Notes</Label>
                  <Textarea id="safety-notes" placeholder="Enter any safety concerns or special conditions" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="step-4" className="space-y-4 py-4">
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-600">Final Verification</AlertTitle>
                <AlertDescription className="text-green-700">
                  Verify your identity and confirm all checks have been completed.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 font-medium">Startup Summary</h3>
                  <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <Crane className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Crane:</span>
                      <span className="font-medium">HC-123: Heavy Crane 123</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clipboard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Job:</span>
                      <span className="font-medium">JOB-001: North Tower Construction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Operator:</span>
                      <span className="font-medium">John Doe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">Site A - North Tower</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Face ID Verification</Label>
                  <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-6">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-dashed border-muted p-1">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                          <User className="h-16 w-16 text-muted-foreground" />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Position your face in front of the camera for verification
                      </p>
                      <Button>Start Face Verification</Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="confirm" />
                    <label
                      htmlFor="confirm"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I confirm that all maintenance and safety checks have been completed according to procedures
                    </label>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevStep} disabled={step === 1}>
            Previous
          </Button>
          {step < 4 ? (
            <Button onClick={handleNextStep}>Next</Button>
          ) : (
            <Button className="bg-green-600 hover:bg-green-700">Complete & Start Crane</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
