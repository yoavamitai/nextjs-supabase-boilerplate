import "./globals.css";
import ThemeProvider from "@/components/theme-provider";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
