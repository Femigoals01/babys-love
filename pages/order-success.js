
// // pages/order-success.js
// import Head from 'next/head'
// import Header from '../components/Header'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

// export default function OrderSuccessPage() {
//   const router = useRouter()
//   const { ref } = router.query
//   const [order, setOrder] = useState(null)

//   useEffect(() => {
//     if (!router.isReady) return

//     const saved = JSON.parse(localStorage.getItem("recentOrder") || "null")
//     setOrder(saved)

//   }, [router.isReady])

//   if (!order) return <p>Loading...</p>

//   return (
//     <div>
//       <Head><title>Order Success — Baby's Love</title></Head>
//       <Header />

//       <main className="container">
//         <h2>Thank You for Your Order!</h2>
//         <p>Your payment was successful.</p>
//         <p>Order Reference: <strong>{ref}</strong></p>

//         <div className="order-summary">
//           <h3>Purchased Items:</h3>
//           <ul>
//             {order.items.map(item => (
//               <li key={item.id}>
//                 {item.title} (x{item.qty}) — ${item.price * item.qty}
//               </li>
//             ))}
//           </ul>

//           <h3>Total Paid: ${order.total.toFixed(2)}</h3>
//         </div>

//         <button onClick={() => router.push('/')}>Back to Home</button>
//       </main>
//     </div>
//   )
// }


// pages/order-success.js
import Head from 'next/head'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function OrderSuccessPage() {
  const router = useRouter()
  const { ref } = router.query
  const [order, setOrder] = useState(null)

  useEffect(() => {
    if (!router.isReady) return
    const saved = JSON.parse(localStorage.getItem("recentOrder") || "null")
    setOrder(saved)
  }, [router.isReady])

  if (!order) return <p>Loading...</p>

  return (
    <div>
      <Head>
        <title>Order Success — Baby's Love</title>
      </Head>

      <Header />

      <main className="container">
        <div className="receipt-card">
          <h2 className="success-title">🎉 Thank You for Your Order!</h2>
          <p>Your payment was successful.</p>

          <p className="ref-box">
            <strong>Order Reference:</strong> {ref}
          </p>

          {/* Order Summary */}
          <div className="order-summary">
            <h3 className="section-title">Purchased Items</h3>

            <table className="items-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>x{item.qty}</td>
                    <td>${(item.price * item.qty).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="total-row">
              <h3>Total Paid:</h3>
              <span className="total-amount">${order.total.toFixed(2)}</span>
            </div>

            <button className="print-btn" onClick={() => window.print()}>
              Print Receipt
            </button>
          </div>

          <button className="home-btn" onClick={() => router.push('/')}>
            Back to Home
          </button>
        </div>
      </main>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: auto;
          padding: 2rem;
        }

        .receipt-card {
          background: #fff;
          padding: 2rem;
          border-radius: 14px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
          text-align: center;
        }

        .success-title {
          color: #e91e63;
          margin-bottom: 0.7rem;
        }

        .ref-box {
          background: #ffe0ec;
          padding: 10px 16px;
          border-radius: 8px;
          margin-top: 10px;
          display: inline-block;
          font-size: 0.95rem;
        }

        .section-title {
          margin-top: 1rem;
          color: #333;
          font-size: 1.3rem;
          border-bottom: 2px solid #e91e63;
          display: inline-block;
          padding-bottom: 4px;
          margin-bottom: 1rem;
        }

        .items-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.2rem;
        }

        .items-table th {
          background: #e91e63;
          color: #fff;
          padding: 10px;
        }

        .items-table td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          font-size: 1.2rem;
          font-weight: bold;
          margin-top: 1rem;
        }

        .total-amount {
          color: #e91e63;
        }

        .print-btn {
          margin-top: 1rem;
          background: #fff;
          border: 2px solid #e91e63;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          color: #e91e63;
          cursor: pointer;
          font-weight: bold;
        }

        .print-btn:hover {
          background: #ffe6f0;
        }

        .home-btn {
          margin-top: 1.7rem;
          background: #e91e63;
          color: white;
          border: none;
          padding: 0.9rem 1.4rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }

        .home-btn:hover {
          background: #d81b60;
        }

        @media print {
          Header, .home-btn, .print-btn {
            display: none;
          }
          .receipt-card {
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  )
}
