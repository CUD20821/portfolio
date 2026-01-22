"use client";
// import { useEffect } from "react";
import "@/app/global.css";
import Link from "next/link";
// import { useRouter } from "next/navigation";
export default function NotFound() {
 return (
  <div>
    <h2>Not Found</h2>
    <Link href="/vi">Back to HomePage</Link>
  </div>
 )
}
