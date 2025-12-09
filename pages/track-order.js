// pages/track-order.js
import Head from 'next/head'
import Header from '../components/Header'
import { useState } from 'react'

export default function TrackOrderPage() {
  const [ref, setRef] = useState('')
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchOrder = async (reference) => {
    setLoading(true)
    setError('')
    setOrder(null)
    try {
      const res = await fetch(`/api/get-order?ref=${encodeURIComponent(reference)}`)
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Order not found')
      } else {
        setOrder(data.order)
      }
    } catch (err) {
      console.error(err)
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!ref) return setError('Please enter your order reference')
    fetchOrder(ref.trim())
  }

  const formatDate = (iso) => {
    try { return new Date(iso).toLocaleString() } catch { return iso }
  }

  const computeETA = (createdAt, etaDays = 5) => {
    if (!createdAt) return 'N/A'
    const created = new Date(createdAt)
    created.setDate(created.getDate() + Number(etaDays))
    return created.toLocaleDateString()
  }

  return (
    <div>
      <Head>
        <title>Track Order — Baby's Love</title>
      </Head>
      <Header />

      <main className="container">
        <h2>Track your order</h2>

        <form onSubmit={handleSubmit} className="track-form">
          <input
            placeholder="Enter order reference (e.g. 1671234567890)"
            value={ref}
            onChange={e => setRef(e.target.value)}
          />
          <button type="submit" disabled={loading}>{loading ? 'Checking…' : 'Track'}</button>
        </form>

        {error && <p className="error">{error}</p>}

        {order && (
          <div className="tracking-card">
            <div className="top">
              <div>
                <h3>Reference: <span>{order.reference}</span></h3>
                <p>Placed: {formatDate(order.createdAt)}</p>
                <p>Customer: {order.customer?.name || '—'} {order.customer?.email ? <>• {order.customer.email}</> : null}</p>
              </div>
              <div className="status-pill">
                <p>Payment: <strong>{order.status.payment}</strong></p>
                <p>Fulfillment: <strong>{order.status.processing}</strong></p>
              </div>
            </div>

            <section className="items">
              <h4>Items</h4>
              <ul>
                {order.items.map(item => (
                  <li key={item.id}>
                    <span>{item.title}</span>
                    <span>x{item.qty}</span>
                    <span>${(item.price * item.qty).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="summary">
              <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
              <p><strong>Estimated delivery:</strong> {computeETA(order.createdAt, order.etaDays)}</p>
            </div>

            <section className="timeline">
              <h4>Timeline</h4>
              <ul>
                {order.history && order.history.map((h, i) => (
                  <li key={i}>
                    <span className="when">{formatDate(h.when)}</span>
                    <span className="what">{h.what}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="actions">
              <button onClick={() => navigator.clipboard?.writeText(order.reference)}>Copy reference</button>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        .container { max-width: 900px; margin: auto; padding: 2rem; }
        .track-form { display:flex; gap: .5rem; margin-bottom: 1rem; }
        .track-form input { flex:1; padding:.6rem; border-radius:6px; border:1px solid #ddd; }
        .track-form button { background:#e91e63; color:#fff; border:none; padding:.6rem 1rem; border-radius:6px; cursor:pointer; }
        .track-form button:disabled { opacity: 0.7; cursor: not-allowed; }
        .error { color: #b00020; margin-top:.5rem; }
        .tracking-card { margin-top:1rem; background:#fff; padding:1rem; border-radius:10px; box-shadow:0 6px 18px rgba(0,0,0,0.06); }
        .top { display:flex; justify-content:space-between; align-items:center; gap:1rem; }
        .status-pill { text-align:right; }
        .items ul { list-style:none; padding:0; margin:0; }
        .items li { display:flex; justify-content:space-between; padding:.5rem 0; border-bottom:1px solid #eee; }
        .summary { margin-top:1rem; display:flex; justify-content:space-between; }
        .timeline ul { list-style:none; padding:0; margin:0; margin-top:.5rem; }
        .timeline li { padding:.4rem 0; border-bottom:1px dashed #eee; display:flex; gap:1rem; }
        .actions { margin-top:1rem; }
        .actions button { background:#eee; border:none; padding:.5rem 1rem; border-radius:6px; cursor:pointer; }
      `}</style>
    </div>
  )
}
