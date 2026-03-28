import './globals.css'

// تعريف واحد وشامل لكل البيانات
export const metadata = {
  title: 'RealAsync.com | Premium Digital Asset',
  description: 'High-performance infrastructure domain available for strategic acquisition.',
  metadataBase: new URL('https://realasync.com'), // ضروري جداً لتعريف الروابط
  openGraph: {
    title: 'RealAsync.com',
    description: 'Available for Sale Now',
    url: 'https://realasync.com',
    siteName: 'RealAsync',
    images: [
      {
        url: '/og-image.png', // تأكد من وجود صورة بهذا الاسم في مجلد public لاحقاً
        width: 1200,
        height: 630,
        alt: 'RealAsync.com for Sale',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAsync.com | For Sale',
    description: 'Premium technology brand available for acquisition.',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
