import Link from 'next/link'

export default function HomePage() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>lama mala</h1>
        <p style={styles.subtitle}>ระบบสั่งอาหารบุฟเฟต์หมาล่า</p>
      </header>

      <div style={styles.cardContainer}>
        <Link href="/generate-qr" style={styles.card}>
          <h2>📱 สร้าง QR Code โต๊ะ</h2>
          <p>เปิดโต๊ะใหม่ และสร้าง QR Code สำหรับให้ลูกค้าสแกนสั่งอาหาร</p>
        </Link>

        <Link href="/kitchen" style={styles.card}>
          <h2>👨‍🍳 หน้าจอห้องครัว</h2>
          <p>ดูรายการสั่งอาหาร Realtime จากทุกโต๊ะเข้าครัว</p>
        </Link>
      </div>

      <footer style={styles.footer}>
        <p> status: Deploy Connection Active ✅</p>
      </footer>
    </main>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '3rem',
    color: '#d92525',
    margin: '0 0 10px 0',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    margin: 0,
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  card: {
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #eaeaea',
    backgroundColor: '#ffffff',
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  footer: {
    fontSize: '0.9rem',
    color: '#888',
    borderTop: '1px solid #eee',
    paddingTop: '20px',
  }
}
