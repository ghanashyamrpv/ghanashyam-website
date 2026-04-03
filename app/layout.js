import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeProvider from './components/ThemeProvider'

export const metadata = {
  title: { default: 'Ghanashyam R P V', template: '%s · Ghanashyam R P V' },
  description: 'Statistics researcher, student, and writer. Documenting research and sharing knowledge through tutorials.',
  openGraph: {
    title: 'Ghanashyam R P V',
    description: 'Statistics researcher and writer.',
    url: 'https://ghanashyam.dev',
    siteName: 'Ghanashyam R P V',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}