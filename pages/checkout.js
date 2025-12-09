


// // pages/checkout.js
// import Head from 'next/head'
// import Header from '../components/Header'
// import { useCart } from '../context/CartContext'
// import { useState } from 'react'
// import Script from 'next/script'
// import emailjs from '@emailjs/browser'

// export default function CheckoutPage() {
//   const { items, clear } = useCart()
//   const [form, setForm] = useState({ name: '', email: '', phone: '' })
//   const [loading, setLoading] = useState(false)

//   const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
//   const totalAmount = items.reduce((sum, i) => sum + i.price * i.qty, 0) * 100

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const payWithPaystack = () => {
//     if (!window.PaystackPop) {
//       alert("Payment SDK not loaded yet.")
//       return
//     }

//     if (!form.name || !form.email || !form.phone) {
//       alert("Please fill all fields")
//       return
//     }

//     if (items.length === 0) {
//       alert("Your cart is empty")
//       return
//     }

//     setLoading(true)

//     const handler = window.PaystackPop.setup({
//       key: publicKey,
//       email: form.email,
//       amount: totalAmount,
//       metadata: {
//         name: form.name,
//         phone: form.phone
//       },
//       callback: function (response) {

//         const orderData = {
//           name: form.name,
//           email: form.email,
//           phone: form.phone,
//           items,
//           total: totalAmount / 100,
//           reference: response.reference,
//           date: new Date().toISOString()
//         }

//         // Save recent order for success page
//         localStorage.setItem("recentOrder", JSON.stringify(orderData))

//         // Save to full order history
//         const history = JSON.parse(localStorage.getItem("orders") || "[]")
//         history.push(orderData)
//         localStorage.setItem("orders", JSON.stringify(history))

//         // --- SEND TO SERVER ---
//         try {
//           fetch('/api/save-order', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//               reference: orderData.reference,
//               items: orderData.items,
//               total: orderData.total,
//               name: orderData.name,
//               email: orderData.email,
//               phone: orderData.phone
//             })
//           }).catch(err => console.warn('save-order failed', err))
//         } catch (err) {
//           console.warn('save-order request error', err)
//         }

//         // Send email confirmation
//         emailjs.send(
//           process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
//           process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
//           {
//             name: form.name,
//             email: form.email,
//             phone: form.phone,
//             reference: response.reference,
//             total: (totalAmount / 100).toFixed(2),
//             items: items.map(i => `${i.title} (x${i.qty}) — $${i.price * i.qty}`).join("\n"),
//             date: new Date().toLocaleString(),
//           },
//           process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//         )
//         .then(() => console.log('Email sent successfully'))
//         .catch(err => console.error('Email sending failed', err))
//         .finally(() => {
//           setLoading(false)
//           clear()
//           window.location.href = `/order-success?ref=${response.reference}`
//         })
//       },
//       onClose: () => {
//         alert("Payment cancelled")
//         setLoading(false)
//       }
//     })

//     handler.openIframe()
//   }

//   const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

//   return (
//     <div>
//       <Head><title>Checkout — Baby's Love</title></Head>

//       <Script src="https://js.paystack.co/v1/inline.js" strategy="afterInteractive" />

//       <Header />

//       <main className="container">
//         <h2>Checkout</h2>

//         {items.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div className="checkout-grid">
//             <div className="checkout-form">
//               <input name="name" value={form.name} placeholder="Full Name" onChange={handleChange} />
//               <input name="email" value={form.email} placeholder="Email" onChange={handleChange} />
//               <input name="phone" value={form.phone} placeholder="Phone" onChange={handleChange} />

//               <button onClick={payWithPaystack} disabled={loading}>
//                 {loading ? "Processing..." : "Pay Now"}
//               </button>
//             </div>

//             <div className="checkout-summary">
//               <h3>Your Order</h3>
//               <ul>
//                 {items.map(i => (
//                   <li key={i.id}>{i.title} (x{i.qty}) — ${i.price * i.qty}</li>
//                 ))}
//               </ul>
//               <h3>Total: ${total.toFixed(2)}</h3>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   )
// }



import Head from 'next/head'
import Header from '../components/Header'
import { useCart } from '../context/CartContext'
import { useState } from 'react'
import Script from 'next/script'
import emailjs from '@emailjs/browser'

export default function CheckoutPage() {
  const { items, clear } = useCart()
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [loading, setLoading] = useState(false)

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
  const totalAmount = items.reduce((sum, i) => sum + i.price * i.qty, 0) * 100

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const payWithPaystack = () => {
    if (!window.PaystackPop) {
      alert("Payment SDK not loaded yet.")
      return
    }

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields")
      return
    }

    if (items.length === 0) {
      alert("Your cart is empty")
      return
    }

    setLoading(true)

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: form.email,
      amount: totalAmount,
      metadata: {
        name: form.name,
        phone: form.phone
      },
      callback: function (response) {
        // Prepare order object with customer details
        const orderData = {
          customerName: form.name,
          customerEmail: form.email,
          customerMobile: form.phone,
          items,
          total: totalAmount / 100,
          reference: response.reference,
          date: new Date().toISOString()
        }

        // Save recent order for success page
        localStorage.setItem("recentOrder", JSON.stringify(orderData))

        // Save to full order history
        const history = JSON.parse(localStorage.getItem("orders") || "[]")
        history.push(orderData)
        localStorage.setItem("orders", JSON.stringify(history))

        // --- SEND TO SERVER ---
        try {
          fetch('/api/save-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
          }).catch(err => console.warn('save-order failed', err))
        } catch (err) {
          console.warn('save-order request error', err)
        }

        // Send email confirmation
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
          {
            name: form.name,
            email: form.email,
            phone: form.phone,
            reference: response.reference,
            total: (totalAmount / 100).toFixed(2),
            items: items.map(i => `${i.title} (x${i.qty}) — $${i.price * i.qty}`).join("\n"),
            date: new Date().toLocaleString(),
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => console.log('Email sent successfully'))
        .catch(err => console.error('Email sending failed', err))
        .finally(() => {
          setLoading(false)
          clear()
          window.location.href = `/order-success?ref=${response.reference}`
        })
      },
      onClose: () => {
        alert("Payment cancelled")
        setLoading(false)
      }
    })

    handler.openIframe()
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div>
      <Head><title>Checkout — Baby's Love</title></Head>

      <Script src="https://js.paystack.co/v1/inline.js" strategy="afterInteractive" />

      <Header />

      <main className="container">
        <h2>Checkout</h2>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="checkout-grid">
            <div className="checkout-form">
              <input
                name="name"
                value={form.name}
                placeholder="Full Name"
                onChange={handleChange}
              />
              <input
                name="email"
                value={form.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                name="phone"
                value={form.phone}
                placeholder="Phone"
                onChange={handleChange}
              />

              <button onClick={payWithPaystack} disabled={loading}>
                {loading ? "Processing..." : "Pay Now"}
              </button>
            </div>

            <div className="checkout-summary">
              <h3>Your Order</h3>
              <ul>
                {items.map(i => (
                  <li key={i.id}>{i.title} (x{i.qty}) — ${i.price * i.qty}</li>
                ))}
              </ul>
              <h3>Total: ${total.toFixed(2)}</h3>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
