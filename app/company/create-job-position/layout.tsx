
export const metadata = {
  title: 'Create job position',
  description: 'Create job position',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  )
}
