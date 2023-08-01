import type { Metadata } from "next";
import { Container } from "@mui/material";

export const metadata: Metadata = {
    title: "TRVK3R | Auth",
    description: "Signup or login with your account",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex items-center content-center justify-center min-h-screen p-10">
            {children}
        </main>
    );
}
