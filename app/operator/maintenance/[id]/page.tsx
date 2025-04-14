"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Camera,
  Upload,
  CheckCircle,
  AlertTriangle,
  Clipboard,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function CraneMaintenance({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { id } = params;
  const [activeStep, setActiveStep] = useState(0);
  const [maintenanceStatus, setMaintenanceStatus] = useState("in-progress");
  const [checklist, setChecklist] = useState({
    "hydraulic-system": false,
    "electrical-system": false,
    "structural-components": false,
    "safety-devices": false,
    "control-mechanisms": false,
    lubrication: false,
    "wire-ropes": false,
    brakes: false,
  });
  type Photo = { id: number; url: string };
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [notes, setNotes] = useState("");

  // Sample crane data
  const crane = {
    id: id,
    name:
      id === "CR001"
        ? "Tower Crane Alpha"
        : id === "CR002"
        ? "Mobile Crane Beta"
        : "Crane " + id,
    type:
      id === "CR001"
        ? "Tower Crane"
        : id === "CR002"
        ? "Mobile Crane"
        : "Standard Crane",
    lastMaintenance: "2025-03-15",
    nextScheduledMaintenance: "2025-04-15",
    status: id === "CR002" ? "maintenance" : "operational",
  };

  const steps = [
    {
      id: 0,
      name: "Status Update",
      description: "Update the maintenance status",
    },
    {
      id: 1,
      name: "Inspection Checklist",
      description: "Complete the maintenance checklist",
    },
    {
      id: 2,
      name: "Photo Documentation",
      description: "Take photos of the maintenance work",
    },
    {
      id: 3,
      name: "Completion",
      description: "Review and submit maintenance report",
    },
  ];

  // Define a type for valid checklist keys
  type ChecklistKey = keyof typeof checklist;

  const handleChecklistChange = (id: ChecklistKey) => {
    setChecklist({
      ...checklist,
      [id]: !checklist[id],
    });
  };

  const handlePhotoUpload = () => {
    // In a real app, this would handle file uploads
    setPhotos([
      ...photos,
      { id: photos.length + 1, url: "/placeholder.svg?height=200&width=300" },
    ]);
  };

  const handleTakePhoto = () => {
    // In a real app, this would access the camera
    setPhotos([
      ...photos,
      { id: photos.length + 1, url: "/placeholder.svg?height=200&width=300" },
    ]);
  };

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      // Complete maintenance
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
        return maintenanceStatus !== "";
      case 1:
        return Object.values(checklist).some((value) => value);
      case 2:
        return photos.length > 0;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const allChecklistItemsComplete = Object.values(checklist).every(
    (value) => value
  );

  return (
    <div className="min-h-screen flex flex-col">
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
                  <p className="text-sm font-medium">Last Maintenance</p>
                  <p className="text-sm text-muted-foreground">
                    {crane.lastMaintenance}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Next Scheduled Maintenance
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {crane.nextScheduledMaintenance}
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
                  <p className="text-sm font-medium mb-2">
                    Maintenance Progress
                  </p>
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
                      <Label htmlFor="maintenance-status">
                        Maintenance Status
                      </Label>
                      <select
                        id="maintenance-status"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={maintenanceStatus}
                        onChange={(e) => setMaintenanceStatus(e.target.value)}
                      >
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="needs-parts">Needs Parts</option>
                        <option value="requires-specialist">
                          Requires Specialist
                        </option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="maintenance-notes">
                        Initial Assessment Notes
                      </Label>
                      <Textarea
                        id="maintenance-notes"
                        placeholder="Enter your initial assessment notes here..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="min-h-[150px]"
                      />
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium flex items-center gap-2">
                          <Clipboard className="h-4 w-4" />
                          Maintenance Checklist
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
                                handleChecklistChange(key as ChecklistKey)
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
                                Check and verify the {key.replace(/-/g, " ")} is
                                functioning properly
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="checklist-notes">Checklist Notes</Label>
                      <Textarea
                        id="checklist-notes"
                        placeholder="Enter any notes about the checklist items..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4 mb-4">
                      {photos.map((photo) => (
                        <div
                          key={photo.id}
                          className="relative border rounded-md overflow-hidden"
                        >
                          <img
                            src={photo.url || "/placeholder.svg"}
                            alt={`Maintenance photo ${photo.id}`}
                            className="w-[150px] h-[100px] object-cover"
                          />
                        </div>
                      ))}
                      {photos.length === 0 && (
                        <div className="w-full text-center p-8 border rounded-md bg-muted/30">
                          <p className="text-muted-foreground">
                            No photos added yet
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleTakePhoto} className="flex-1">
                        <Camera className="h-4 w-4 mr-2" />
                        Take Photo
                      </Button>
                      <Button
                        onClick={handlePhotoUpload}
                        variant="outline"
                        className="flex-1"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                    </div>
                    <div>
                      <Label htmlFor="photo-notes">Photo Notes</Label>
                      <Textarea
                        id="photo-notes"
                        placeholder="Enter any notes about the photos..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-6">
                    <div className="rounded-lg border p-4 bg-muted/30">
                      <h3 className="font-medium mb-2">Maintenance Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Status:</span>
                          <span className="text-sm font-medium capitalize">
                            {maintenanceStatus.replace(/-/g, " ")}
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
                          <span className="text-sm">Photos Added:</span>
                          <span className="text-sm font-medium">
                            {photos.length}
                          </span>
                        </div>
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
                            Some checklist items are not marked as complete. You
                            can still submit the maintenance report, but it will
                            be flagged for review.
                          </p>
                        </div>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="final-notes">Final Notes</Label>
                      <Textarea
                        id="final-notes"
                        placeholder="Enter any final notes about the maintenance..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="min-h-[150px]"
                      />
                    </div>
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
                    : "Complete Maintenance"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
