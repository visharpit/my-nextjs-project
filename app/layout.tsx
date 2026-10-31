import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>My Next App</title>
      </head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}