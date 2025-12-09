


// // components/Header.jsx


// import Link from 'next/link'
// import { useCart } from '../context/CartContext'
// import Image from 'next/image'
// import { useState } from 'react'

// export default function Header() {
//   const { cartCount } = useCart()
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
//         {/* Desktop Navigation */}
//         <ul className="desktop-menu">
//           <li><Link href="/" className="nav-link">Home</Link></li>
//           <li><Link href="/products" className="nav-link">Products</Link></li>
//           <li>
//             <Link href="/cart" className="nav-link">
//               Cart {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
//             </Link>
//           </li>
//           <li><Link href="/checkout" className="nav-link">Checkout</Link></li>
//           <li><Link href="/order-history" className="nav-link">Order History</Link></li>
//           <li><Link href="/track-order" className="nav-link">Track Order</Link></li>
//         </ul>

//         {/* Mobile Button */}
//         <button className="menu-btn" onClick={toggleMenu}>
//           ☰
//         </button>

//         {/* Mobile Dropdown */}
//         {menuOpen && (
//           <div className="mobile-dropdown">
//             <ul>
//               <li><Link href="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
//               <li><Link href="/products" className="nav-link" onClick={closeMenu}>Products</Link></li>
//               <li>
//                 <Link href="/cart" className="nav-link" onClick={closeMenu}>
//                   Cart {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
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
//           border: none;
//           background: none;
//           font-size: 1.8rem;
//           cursor: pointer;
//         }

//         /* MOBILE DROPDOWN MENU */
//         .mobile-dropdown {
//           position: absolute;
//           top: 100%;
//           right: 0;
//           background: rgba(255, 255, 255, 0.95);
//           border: 1px solid #f8bbd0;
//           border-radius: 10px;
//           padding: 1rem 1.5rem;
//           box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
//           backdrop-filter: blur(10px);
//           z-index: 2000;
//         }

//         .mobile-dropdown ul {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }

//         /* RESPONSIVE */
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


// components/Header.jsx
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

      {/* Mobile Icons */}
      <div className="mobile-icons">
        <Link href="/cart" className="nav-link cart-icon">
          🛒 {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
        </Link>
        <button className="menu-btn" onClick={toggleMenu}>☰</button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-dropdown" onClick={closeMenu}>
          <ul onClick={e => e.stopPropagation()}>
            <li><Link href="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/products" className="nav-link" onClick={closeMenu}>Products</Link></li>
            <li><Link href="/checkout" className="nav-link" onClick={closeMenu}>Checkout</Link></li>
            <li><Link href="/order-history" className="nav-link" onClick={closeMenu}>Order History</Link></li>
            <li><Link href="/track-order" className="nav-link" onClick={closeMenu}>Track Order</Link></li>
          </ul>
        </div>
      )}

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
          list-style: none;
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

        /* Mobile Icons */
        .mobile-icons {
          display: none;
          gap: 1rem;
          align-items: center;
        }

        .cart-icon {
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .menu-btn {
            display: block;
          }
          .mobile-icons {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}
