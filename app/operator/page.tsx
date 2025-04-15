"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function OperatorPage() {
    const router = useRouter();
    useEffect(() => {
        router.push("/operator/dashboard")
    }, [router])
    return null;
}