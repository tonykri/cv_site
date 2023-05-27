
export const metadata = {
  title: 'Notifications',
  description: 'Notifications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
