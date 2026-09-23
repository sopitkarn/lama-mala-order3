export const metadata = {
  title: 'lama mala - Buffet Ordering System',
  description: 'ระบบสั่งอาหารร้านบุฟเฟต์ lama mala',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8f9fa' }}>
        {children}
      </body>
    </html>
