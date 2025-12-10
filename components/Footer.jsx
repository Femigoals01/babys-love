// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* COLUMN 1 – BRAND */}
        <div className="footer-col">
          <h3 className="footer-title">Baby’s Love</h3>
          <p>Your trusted store for baby clothes, toys & essentials.</p>

        </div>

        {/* COLUMN 2 – QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/" className="footer-link">Home</Link></li>
            <li><Link href="/products" className="footer-link">Products</Link></li>
            <li><Link href="/cart" className="footer-link">Cart</Link></li>
            <li><Link href="/checkout" className="footer-link">Checkout</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 – CUSTOMER */}
        <div className="footer-col">
          <h4>Customer</h4>
          <ul>
            <li><Link href="/order-history" className="footer-link">Order History</Link></li>
            <li><Link href="/track-order" className="footer-link">Track Order</Link></li>
            <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* COLUMN 4 – SOCIAL */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Baby’s Love — All Rights Reserved.
      </div>

      <style jsx>{`
        .footer {
          background: #fff0f6;
          border-top: 2px solid #f8bbd0;
          margin-top: 50px;
          padding: 10px 10px 10px;
        }

        

        .footer-inner {
          max-width: var(--max);
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .footer-col h3, .footer-col h4 {
          margin-bottom: 10px;
          color: #e91e63;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

 

        .footer-col li {
          margin-bottom: 8px;
        }

        .footer-col a {
          text-decoration: none;
          color: #444;
          transition: color 0.3s;
        }

        .footer-col a:hover {
          color: #e91e63;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          padding-top: 15px;
          font-size: 0.9rem;
          color: #666;
          border-top: 1px solid #f8bbd0;
        }

        @media (max-width: 800px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            text-align: left;
          }
        }

        @media (max-width: 500px) {
          .footer-inner {
            grid-template-columns: 1fr;
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}
