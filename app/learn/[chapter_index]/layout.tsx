import { Suspense } from "react";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (<div className="w-screen">
      
        <div >{children}</div>
        </div>
    );
  }