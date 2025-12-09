// import Head from 'next/head'
// import Header from '../components/Header'
// import { useEffect, useState } from 'react'

// export default function OrderHistoryPage() {
//   const [orders, setOrders] = useState([])

//   useEffect(() => {
//     const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]')
//     setOrders(savedOrders)
//   }, [])

//   return (
//     <div>
//       <Head>
//         <title>Order History — Baby's Love</title>
//       </Head>

//       <Header />

//       <main className="container">
//         <h2>Your Orders</h2>

//         {orders.length === 0 ? (
//           <p>You have no past orders.</p>
//         ) : (
//           orders.map((order, idx) => (
//             <div key={idx} className="order-card">
//               <p><strong>Order Ref:</strong> {order.reference}</p>
//               <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
//               <ul>
//                 {order.items.map(item => (
//                   <li key={item.id}>
//                     {item.title} (x{item.qty}) — ${item.price * item.qty}
//                   </li>
//                 ))}
//               </ul>
//               <p><strong>Total Paid:</strong> ${order.total.toFixed(2)}</p>
//             </div>
//           ))
//         )}
//       </main>

//       <style jsx>{`
//         .order-card {
//           border: 1px solid #ddd;
//           padding: 1rem;
//           margin-bottom: 1rem;
//           border-radius: 8px;
//         }
//       `}</style>
//     </div>
//   )
// }


// pages/order-history.js
import Head from 'next/head'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('orders') || '[]')
    setOrders(history.reverse()) // Show latest first
  }, [])

  return (
    <div>
      <Head>
        <title>Order History — Baby's Love</title>
      </Head>

      <Header />

      <main className="container">
        <h2>Your Past Orders</h2>

        {orders.length === 0 ? (
          <p>You have no past orders.</p>
        ) : (
          orders.map((order, idx) => (
            <div key={idx} className="order">
              <h3>Order Reference: {order.reference}</h3>
              <p>Date: {new Date(order.date).toLocaleString()}</p>
              <ul>
                {order.items.map(item => (
                  <li key={item.id}>
                    {item.title} (x{item.qty}) — ${item.price * item.qty}
                  </li>
                ))}
              </ul>
              <p><strong>Total: ${order.total.toFixed(2)}</strong></p>
              <hr />
            </div>
          ))
        )}
      </main>

      <style jsx>{`
        main { padding: 2rem; }
        .order { margin-bottom: 2rem; }
        ul { list-style: none; padding-left: 0; }
        li { margin-bottom: 0.3rem; }
        hr { margin-top: 1rem; }
      `}</style>
    </div>
  )
}
