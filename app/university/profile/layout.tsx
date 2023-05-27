
export const metadata = {
    title: 'Profile',
    description: 'Profile',
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