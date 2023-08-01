"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#c6a9ff",
            contrastText: "#11111c",
        },
        secondary: {
            main: "#98EECC",
            contrastText: "#11111c",
        },
        success: {
            main: "#D0F5BE",
        },
        background: {
            default: "#1b1b2d",
        },
    },
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TRVK3R",
    description: "Track your expenses and incomes",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <html lang="en" className="min-h-screen">
                <body className={inter.className}>{children}</body>
            </html>
        </ThemeProvider>
    );
}
