// app/layout.tsx
import Image from "next/image";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="intro">
          <Image src="/meo.gif" alt="meo" layout="fill" />
        </div>
        {children}
      </body>
    </html>
  );
}
