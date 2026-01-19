export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <div className="greeting">
          <Image src="/greeting.gif" alt="meo" layout="fill" />
        </div> */}
        {children}
      </body>
    </html>
  );
}
