

// // pages/cart.js
// import Head from 'next/head'
// import Header from '../components/Header'
// import { useCart } from '../context/CartContext'
// import { useState } from 'react'

// export default function CartPage() {
//   const { items, updateQty, removeFromCart, total, clear } = useCart()
//   const [loading, setLoading] = useState(false)

//   const handleQtyChange = (id, qty) => {
//     if (qty < 1) return
//     updateQty(id, qty)
//   }

//   return (
//     <div>
//       <Head>
//         <title>Your Cart — Baby's Love</title>
//       </Head>

//       <Header />

//       <main className="container">
//         <h2>Your Cart</h2>

//         {items.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div className="cart-grid">
//             <ul className="cart-list">
//               {items.map((item) => (
//                 <li key={item.id} className="cart-item">
//                   <div className="item-info">
//                     <strong>{item.title}</strong>
//                     <p>${item.price.toFixed(2)}</p>
//                   </div>

//                   <div className="item-actions">
//                     <input
//                       type="number"
//                       min="1"
//                       value={item.qty}
//                       onChange={(e) => handleQtyChange(item.id, Number(e.target.value))}
//                     />
//                     <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             <div className="cart-summary">
//               <h3>Summary</h3>
//               <p>Total: ${total.toFixed(2)}</p>
//               <button onClick={clear}>Clear Cart</button>
//             </div>
//           </div>
//         )}
//       </main>

//       <style jsx>{`
//         .cart-grid {
//           display: flex;
//           gap: 2rem;
//           flex-wrap: wrap;
//         }
//         .cart-list {
//           flex: 2;
//           list-style: none;
//           padding: 0;
//         }
//         .cart-item {
//           display: flex;
//           justify-content: space-between;
//           padding: 1rem;
//           border-bottom: 1px solid #ddd;
//         }
//         .item-actions input {
//           width: 60px;
//           margin-right: 0.5rem;
//         }
//         .cart-summary {
//           flex: 1;
//           padding: 1rem;
//           border: 1px solid #ddd;
//           border-radius: 8px;
//         }
//         .cart-summary button {
//           margin-top: 1rem;
//         }
//       `}</style>
//     </div>
//   )
// }


// --- FILE: pages/cart.js ---
import Head from 'next/head'
import Header from '../components/Header'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, updateQty, removeFromCart, total, clear } = useCart()

  return (
    <div>
      <Head>
        <title>Your Cart — Baby's Love</title>
      </Head>
      <Header />
      <main className="container">
        <h2>Your Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-container" style={{ display: 'flex', gap: '2rem' }}>
            <ul className="cart-list" style={{ flex: 2 }}>
              {items.map(item => (
                <li key={item.id} className="cart-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={e => updateQty(item.id, Number(e.target.value))}
                      style={{ width: '50px', marginRight: '0.5rem' }}
                    />
                    <button onClick={() => removeFromCart(item.id)} style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '0.3rem 0.6rem', borderRadius: '5px', cursor: 'pointer' }}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-summary" style={{ flex: 1, padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', height: 'fit-content' }}>
              <h3>Summary</h3>
              <p>Total: ${total.toFixed(2)}</p>
              <button
                onClick={clear}
                style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', width: '100%', marginBottom: '1rem' }}
              >
                Clear Cart
              </button>

              {/* ✅ Proceed to Checkout */}
              <button
                className="btn"
                onClick={() => (window.location.href = '/checkout')}
                style={{ backgroundColor: '#e91e63', color: 'white', border: 'none', padding: '0.7rem 1.2rem', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
