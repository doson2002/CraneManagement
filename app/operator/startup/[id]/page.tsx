"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Camera,
  CheckCircle,
  AlertTriangle,
  Power,
  Clipboard,
  MapPin,
  Clock,
  User,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CraneStartup() {
  const router = useRouter();
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [productCode, setProductCode] = useState("");
  const [job, setJob] = useState("");
  const [shift, setShift] = useState("");
  const [checklist, setChecklist] = useState({
    "pre-operation-inspection": false,
    "surrounding-area-check": false,
    "weather-conditions": false,
    "communication-systems": false,
    "load-chart-review": false,
    "safety-devices": false,
    "control-functions": false,
    "emergency-procedures": false,
  });
  const [photo, setPhoto] = useState<string | null>(null);
  const [faceVerified, setFaceVerified] = useState(false);

  // Sample crane data
  const crane = {
    id: id,
    name:
      id === "CR001"
        ? "Tower Crane Alpha"
        : id === "CR003"
        ? "Overhead Crane Gamma"
        : "Crane " + id,
    type:
      id === "CR001"
        ? "Tower Crane"
        : id === "CR003"
        ? "Overhead Crane"
        : "Standard Crane",
    location: "Building Site A, Section 3",
    coordinates: "40.7128° N, 74.0060° W",
    status: "operational",
  };

  const steps = [
    {
      id: 0,
      name: "Job Information",
      description: "Enter product code, job, and shift information",
    },
    {
      id: 1,
      name: "Safety Checklist",
      description: "Complete the pre-operation safety checklist",
    },
    {
      id: 2,
      name: "Location Verification",
      description: "Verify crane location with photo",
    },
    {
      id: 3,
      name: "Authorization",
      description: "Face ID verification to authorize start-up",
    },
  ];

  const handleChecklistChange = (id: keyof typeof checklist) => {
    setChecklist({
      ...checklist,
      [id]: !checklist[id],
    });
  };

  const handleTakePhoto = () => {
    // In a real app, this would access the camera
    setPhoto("/placeholder.svg?height=300&width=400");
  };

  const handleFaceVerification = () => {
    // In a real app, this would verify the user's face
    setFaceVerified(true);
  };

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      // Complete start-up
      router.push("/operator/dashboard");
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const isStepComplete = () => {
    switch (activeStep) {
      case 0:
        return productCode !== "" && job !== "" && shift !== "";
      case 1:
        return Object.values(checklist).some((value) => value);
      case 2:
        return photo !== null;
      case 3:
        return faceVerified;
      default:
        return false;
    }
  };

  const allChecklistItemsComplete = Object.values(checklist).every(
    (value) => value
  );

  return (
    <div className="min-h-fit flex flex-col">
      <div className="container py-4">
        <Link
          href="/operator/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Dashboard</span>
        </Link>
      </div>
      <div className="flex-1 container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>{crane.name}</CardTitle>
                <CardDescription>ID: {crane.id}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Crane Type</p>
                  <p className="text-sm text-muted-foreground">{crane.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    {crane.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Coordinates</p>
                  <p className="text-sm text-muted-foreground">
                    {crane.coordinates}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Current Status</p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {crane.status}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <p className="text-sm font-medium mb-2">Start-up Progress</p>
                  <Progress
                    value={(activeStep / (steps.length - 1)) * 100}
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Step {activeStep + 1} of {steps.length}:{" "}
                    {steps[activeStep].name}
                  </p>
                </div>
              </CardFooter>
            </Card>

            <div className="mt-6 space-y-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`p-3 rounded-lg border ${
                    activeStep === step.id
                      ? "border-primary bg-primary/5"
                      : "border-muted"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`rounded-full p-1 ${
                        activeStep === step.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.id < activeStep ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <span className="h-4 w-4 flex items-center justify-center text-xs">
                          {step.id + 1}
                        </span>
                      )}
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          activeStep === step.id ? "text-primary" : ""
                        }`}
                      >
                        {step.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-2/3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{steps[activeStep].name}</CardTitle>
                <CardDescription>
                  {steps[activeStep].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {activeStep === 0 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="product-code">Product Code</Label>
                      <Input
                        id="product-code"
                        placeholder="Enter product code"
                        value={productCode}
                        onChange={(e) => setProductCode(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="job">Job</Label>
                      <Select value={job} onValueChange={setJob}>
                        <SelectTrigger id="job">
                          <SelectValue placeholder="Select job" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">
                            Construction
                          </SelectItem>
                          <SelectItem value="material-handling">
                            Material Handling
                          </SelectItem>
                          <SelectItem value="installation">
                            Installation
                          </SelectItem>
                          <SelectItem value="maintenance">
                            Maintenance
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="shift">Working Shift</Label>
                      <Select value={shift} onValueChange={setShift}>
                        <SelectTrigger id="shift">
                          <SelectValue placeholder="Select shift" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">
                            Morning (6:00 AM - 2:00 PM)
                          </SelectItem>
                          <SelectItem value="afternoon">
                            Afternoon (2:00 PM - 10:00 PM)
                          </SelectItem>
                          <SelectItem value="night">
                            Night (10:00 PM - 6:00 AM)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="rounded-lg border p-4 bg-muted/30 flex items-start gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Current Time</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date().toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium flex items-center gap-2">
                          <Clipboard className="h-4 w-4" />
                          Safety Checklist
                        </h3>
                        <div className="text-sm text-muted-foreground">
                          {Object.values(checklist).filter(Boolean).length} of{" "}
                          {Object.values(checklist).length} complete
                        </div>
                      </div>
                      <div className="space-y-3">
                        {Object.entries(checklist).map(([key, value]) => (
                          <div key={key} className="flex items-start space-x-2">
                            <Checkbox
                              id={key}
                              checked={value}
                              onCheckedChange={() =>
                                handleChecklistChange(
                                  key as keyof typeof checklist
                                )
                              }
                            />
                            <div className="grid gap-1.5 leading-none">
                              <Label
                                htmlFor={key}
                                className="text-sm font-medium capitalize"
                              >
                                {key.replace(/-/g, " ")}
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                Verify and confirm the {key.replace(/-/g, " ")}{" "}
                                before operation
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {!allChecklistItemsComplete && (
                      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-yellow-700">
                            Incomplete Checklist
                          </p>
                          <p className="text-sm text-yellow-600">
                            All safety checklist items should be completed
                            before proceeding.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4 bg-muted/30 flex items-start gap-3 mb-4">
                      <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Crane Location</p>
                        <p className="text-sm text-muted-foreground">
                          {crane.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Coordinates: {crane.coordinates}
                        </p>
                      </div>
                    </div>

                    <div className="text-center p-4 border rounded-md mb-4">
                      {photo ? (
                        <img
                          src={photo || "/placeholder.svg"}
                          alt="Location verification"
                          className="mx-auto max-h-[300px] object-cover rounded-md"
                        />
                      ) : (
                        <div className="p-8 bg-muted/30 rounded-md">
                          <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                          <p className="text-muted-foreground">
                            No photo taken yet
                          </p>
                        </div>
                      )}
                    </div>

                    <Button onClick={handleTakePhoto} className="w-full">
                      <Camera className="h-4 w-4 mr-2" />
                      Take Location Photo
                    </Button>

                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-700">
                          Location Verification
                        </p>
                        <p className="text-sm text-blue-600">
                          The photo will be automatically tagged with your
                          current GPS coordinates and timestamp for
                          verification.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-6">
                    <div className="rounded-lg border p-4 bg-muted/30">
                      <h3 className="font-medium mb-2">Start-up Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Product Code:</span>
                          <span className="text-sm font-medium">
                            {productCode}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Job:</span>
                          <span className="text-sm font-medium capitalize">
                            {job.replace(/-/g, " ")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Shift:</span>
                          <span className="text-sm font-medium capitalize">
                            {shift}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">
                            Checklist Items Completed:
                          </span>
                          <span className="text-sm font-medium">
                            {Object.values(checklist).filter(Boolean).length} of{" "}
                            {Object.values(checklist).length}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Location Verified:</span>
                          <span className="text-sm font-medium">
                            {photo ? "Yes" : "No"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center p-6 border rounded-md">
                      {faceVerified ? (
                        <div className="space-y-2">
                          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                          <p className="font-medium text-green-700">
                            Face ID Verified
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Your identity has been verified successfully
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <User className="h-16 w-16 text-muted-foreground mx-auto" />
                          <p className="font-medium">
                            Face ID Verification Required
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">
                            Please verify your identity to authorize crane
                            start-up
                          </p>
                          <Button onClick={handleFaceVerification}>
                            Verify Face ID
                          </Button>
                        </div>
                      )}
                    </div>

                    {faceVerified && (
                      <div className="rounded-lg border border-green-200 bg-green-50 p-4 flex items-start gap-2">
                        <Power className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-green-700">
                            Ready for Start-up
                          </p>
                          <p className="text-sm text-green-600">
                            All verification steps are complete. You are
                            authorized to start the crane operation.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePreviousStep}
                  disabled={activeStep === 0}
                >
                  Previous
                </Button>
                <Button onClick={handleNextStep} disabled={!isStepComplete()}>
                  {activeStep < steps.length - 1
                    ? "Next"
                    : "Start Crane Operation"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
