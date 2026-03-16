import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaFlow — Streamline Your Workflow",
  description:
    "NexaFlow helps teams collaborate faster, automate repetitive tasks, and ship products that customers love. Start your free trial today.",
  keywords: "workflow, productivity, collaboration, automation, project management",
  openGraph: {
    title: "NexaFlow — Streamline Your Workflow",
    description:
      "NexaFlow helps teams collaborate faster, automate repetitive tasks, and ship products that customers love.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
