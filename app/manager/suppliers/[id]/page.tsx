"use client"
import { Supplier } from "@/app/manager/suppliers/page";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const supplier: Supplier = {
    id: id as string,
    name: "IndustrialCranes Ltd.",
    type: "Equipment Supplier",
    contact: "Lisa Brown",
    email: "sales@industrialcranes.com",
    phone: "+1 (555) 678-9012",
    address: "303 Industrial Park, Seattle, WA 98101",
    status: "active",
    products: ["Industrial Cranes", "Heavy Duty Equipment", "Custom Solutions"],
  };
}
