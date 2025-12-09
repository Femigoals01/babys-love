


// // components/Header.jsx
// import Link from 'next/link'
// import { useCart } from '../context/CartContext'
// import Image from 'next/image'

// export default function Header() {
//   const { items } = useCart()
//   const totalQty = items.reduce((sum, item) => sum + item.qty, 0)

//   return (
//     <header className="header">
//       <div className="logo">
//         <Image src="/babylove-logo.png" alt="Baby's Love Logo" width={60} height={60} />
//         <Link href="/" className="logo-link">Baby's Love</Link>
//       </div>
//       <nav>
//         <ul>
//           <li><Link href="/" className="nav-link">Home</Link></li>
//           <li><Link href="/products" className="nav-link">Products</Link></li>
//           <li>
//             <Link href="/cart" className="nav-link">
//               Cart {totalQty > 0 && <span className="cart-count">({totalQty})</span>}
//             </Link>
//           </li>
//           <li><Link href="/checkout" className="nav-link">Checkout</Link></li>
//           <li><Link href="/order-history" className="nav-link">Order History</Link></li>
//           <li><Link href="/track-order" className="nav-link">Track Order</Link></li>
//         </ul>
//       </nav>

//       <style jsx>{`
//         .header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 2rem;
//           background: #fff0f6;
//           border-bottom: 2px solid #f8bbd0;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//         }

//         .logo-link {
//           font-size: 1.7rem;
//           font-weight: 700;
//           color: #e91e63;
//           text-decoration: none;
//         }

//         nav ul {
//           display: flex;
//           list-style: none;
//           gap: 2rem;
//           margin: 0;
//           padding: 0;
//         }

//         .nav-link {
//           font-weight: 600;
//           font-size: 1rem;
//           text-decoration: none;
//           color: #333;
//           position: relative;
//           transition: color 0.3s;
//         }

//         .nav-link:hover {
//           color: #e91e63;
//         }

//         .cart-count {
//           font-weight: 700;
//           color: #e91e63;
//           margin-left: 0.2rem;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .header {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 1rem;
//           }
//           nav ul {
//             flex-direction: column;
//             gap: 1rem;
//           }
//         }
//       `}</style>
//     </header>
//   )
// }


// // components/Header.jsx
// import Link from 'next/link'
// import { useCart } from '../context/CartContext'
// import Image from 'next/image'
// import { useState } from 'react'

// export default function Header() {
//   const { items } = useCart()
//   const totalQty = items.reduce((sum, item) => sum + item.qty, 0)
//   const [menuOpen, setMenuOpen] = useState(false)

//   const toggleMenu = () => setMenuOpen(!menuOpen)
//   const closeMenu = () => setMenuOpen(false)

//   return (
//     <header className="header">
//       <div className="logo">
//         <Image src="/babylove-logo.png" alt="Baby's Love Logo" width={60} height={60} />
//         <Link href="/" className="logo-link">Baby's Love</Link>
//       </div>

//       <nav>
//         {/* Desktop Menu */}
//         <ul className="desktop-menu">
//           <li><Link href="/" className="nav-link">Home</Link></li>
//           <li><Link href="/products" className="nav-link">Products</Link></li>
//           <li>
//             <Link href="/cart" className="nav-link">
//               Cart {totalQty > 0 && <span className="cart-count">({totalQty})</span>}
//             </Link>
//           </li>
//           <li><Link href="/checkout" className="nav-link">Checkout</Link></li>
//           <li><Link href="/order-history" className="nav-link">Order History</Link></li>
//           <li><Link href="/track-order" className="nav-link">Track Order</Link></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button className="menu-btn" onClick={toggleMenu}>
//           ☰
//         </button>

//         {/* Mobile Overlay Menu */}
//         {menuOpen && (
//           <div className="mobile-overlay" onClick={closeMenu}>
//             <ul className="mobile-menu" onClick={e => e.stopPropagation()}>
//               <li><Link href="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
//               <li><Link href="/products" className="nav-link" onClick={closeMenu}>Products</Link></li>
//               <li>
//                 <Link href="/cart" className="nav-link" onClick={closeMenu}>
//                   Cart {totalQty > 0 && <span className="cart-count">({totalQty})</span>}
//                 </Link>
//               </li>
//               <li><Link href="/checkout" className="nav-link" onClick={closeMenu}>Checkout</Link></li>
//               <li><Link href="/order-history" className="nav-link" onClick={closeMenu}>Order History</Link></li>
//               <li><Link href="/track-order" className="nav-link" onClick={closeMenu}>Track Order</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       <style jsx>{`
//         .header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 2rem;
//           background: #fff0f6;
//           border-bottom: 2px solid #f8bbd0;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//         }

//         .logo-link {
//           font-size: 1.7rem;
//           font-weight: 700;
//           color: #e91e63;
//           text-decoration: none;
//         }

//         nav ul {
//           list-style: none;
//           margin: 0;
//           padding: 0;
//         }

//         .desktop-menu {
//           display: flex;
//           gap: 2rem;
//         }

//         .nav-link {
//           font-weight: 600;
//           font-size: 1rem;
//           text-decoration: none;
//           color: #333;
//           transition: color 0.3s;
//         }

//         .nav-link:hover {
//           color: #e91e63;
//         }

//         .cart-count {
//           font-weight: 700;
//           color: #e91e63;
//           margin-left: 0.2rem;
//         }

//         .menu-btn {
//           display: none;
//           background: none;
//           border: none;
//           font-size: 1.8rem;
//           cursor: pointer;
//         }

//         /* Mobile Overlay Menu */
//         .mobile-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100vh;
//           background: rgba(0,0,0,0.5);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 9999;
//         }

//         .mobile-menu {
//           background: #fff;
//           padding: 2rem;
//           border-radius: 12px;
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//           width: 80%;
//           max-width: 300px;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .desktop-menu {
//             display: none;
//           }

//           .menu-btn {
//             display: block;
//           }
//         }
//       `}</style>
//     </header>
//   )
// }



import Link from 'next/link'
import { useCart } from '../context/CartContext'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const { cartCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="logo">
        <Image src="/babylove-logo.png" alt="Baby's Love Logo" width={60} height={60} />
        <Link href="/" className="logo-link">Baby's Love</Link>
      </div>

      <nav>
        {/* Desktop Navigation */}
        <ul className="desktop-menu">
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/products" className="nav-link">Products</Link></li>
          <li>
            <Link href="/cart" className="nav-link">
              Cart {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
            </Link>
          </li>
          <li><Link href="/checkout" className="nav-link">Checkout</Link></li>
          <li><Link href="/order-history" className="nav-link">Order History</Link></li>
          <li><Link href="/track-order" className="nav-link">Track Order</Link></li>
        </ul>

        {/* Mobile Button */}
        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="mobile-dropdown">
            <ul>
              <li><Link href="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
              <li><Link href="/products" className="nav-link" onClick={closeMenu}>Products</Link></li>
              <li>
                <Link href="/cart" className="nav-link" onClick={closeMenu}>
                  Cart {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
                </Link>
              </li>
              <li><Link href="/checkout" className="nav-link" onClick={closeMenu}>Checkout</Link></li>
              <li><Link href="/order-history" className="nav-link" onClick={closeMenu}>Order History</Link></li>
              <li><Link href="/track-order" className="nav-link" onClick={closeMenu}>Track Order</Link></li>
            </ul>
          </div>
        )}
      </nav>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #fff0f6;
          border-bottom: 2px solid #f8bbd0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo-link {
          font-size: 1.7rem;
          font-weight: 700;
          color: #e91e63;
          text-decoration: none;
        }

        nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .desktop-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          color: #333;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #e91e63;
        }

        .cart-count {
          font-weight: 700;
          color: #e91e63;
          margin-left: 0.2rem;
        }

        .menu-btn {
          display: none;
          border: none;
          background: none;
          font-size: 1.8rem;
          cursor: pointer;
        }

        /* MOBILE DROPDOWN MENU */
        .mobile-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #f8bbd0;
          border-radius: 10px;
          padding: 1rem 1.5rem;
          box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          z-index: 2000;
        }

        .mobile-dropdown ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  )
}
