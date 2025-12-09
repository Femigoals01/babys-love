

// import Head from 'next/head'
// import Header from '../components/Header'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useCart } from '../context/CartContext'
// import { products } from '../lib/products'   // ✅ IMPORT YOUR PRODUCTS

// export default function Home() {
//   const { addItem } = useCart()

//   // ✅ Auto-group by category
//   const productsByCategory = products.reduce((groups, product) => {
//     const category = product.category?.toLowerCase() || 'others'
//     if (!groups[category]) groups[category] = []
//     groups[category].push(product)
//     return groups
//   }, {})

//   // Optional: Sort categories alphabetically
//   const sortedCategories = Object.keys(productsByCategory).sort()

//   return (
//     <div>
//       <Head>
//         <title>BabyBasket — Home</title>
//       </Head>

//       <Header />

//       <main className="container">

//         {/* ---------- HERO SECTION ---------- */}
//         <section className="hero">
//           <Image
//             src="/babylove-logo.png"
//             alt="Baby Love Logo"
//             width={50}
//             height={50}
//             style={{ width: "10%", height: "auto", borderRadius: "8px" }}
//           />

//           <h1>Welcome to Baby's Love</h1>
//           <p>Quality clothes, toys, accessories & more — curated for little ones.</p>

//           <Link href="/products" className="btn">Shop All Products</Link>
//         </section>


//         {/* ---------- CATEGORY SECTIONS (AUTO) ---------- */}
//         {sortedCategories.map((category) => (
//           <section key={category} className="category-section">
//             <div className="category-header">
//               <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>

//               <Link href={`/products?category=${category}`} className="view-all">
//                 View All →
//               </Link>
//             </div>

//             <div className="grid">
//               {productsByCategory[category].map((product) => (
//                 <div key={product.id} className="card">
                  
//                   {/* PRODUCT IMAGE */}
//                   <Image
//                     src={product.img}
//                     alt={product.title}
//                     width={200}
//                     height={200}
//                     style={{ borderRadius: "8px", objectFit: 'cover' }}
//                   />

//                   <h3>{product.title}</h3>
//                   <p>${product.price}</p>

//                   {/* ADD TO CART */}
//                   <button
//                     className="btn"
//                     onClick={() => addItem({ ...product, qty: 1 })}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         ))}
//       </main>


//       {/* ---------- STYLES ---------- */}
//       <style jsx>{`
//         .hero {
//           text-align: center;
//           padding: 40px 0;
//         }

//         .category-section {
//           margin-top: 50px;
//         }

//         .category-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 12px;
//         }

//         .grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 20px;
//         }

//         .card {
//           padding: 16px;
//           border: 1px solid #eee;
//           border-radius: 8px;
//           text-align: center;
//         }

//         .btn {
//           margin-top: 8px;
//           padding: 8px 12px;
//           background: #e91e63;
//           color: white;
//           border-radius: 5px;
//           border: none;
//           cursor: pointer;
//           font-weight: bold;
//         }

//         .view-all {
//           color: #e91e63;
//           font-weight: bold;
//           text-decoration: none;
//         }
//       `}</style>
//     </div>
//   )
// }




// import Head from 'next/head'
// import Header from '../components/Header'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useCart } from '../context/CartContext'
// import { products } from '../lib/products'

// export default function Home() {
//   const { addToCart } = useCart()

//   // Group by category
//   const productsByCategory = products.reduce((groups, product) => {
//     const category = product.category?.toLowerCase() || 'others'
//     if (!groups[category]) groups[category] = []
//     groups[category].push(product)
//     return groups
//   }, {})

//   const sortedCategories = Object.keys(productsByCategory).sort()

//   return (
//     <div>
//       <Head>
//         <title>BabyBasket — Home</title>
//       </Head>

//       <Header />

//       <main className="container">

//         {/* ---------- HERO SECTION ---------- */}
//         <section className="hero">
//           <Image
//             src="/babylove-logo.png"
//             alt="Baby Love Logo"
//             width={50}
//             height={50}
//             style={{ width: "10%", height: "auto", borderRadius: "8px" }}
//           />

//           <h1>Welcome to Baby's Love</h1>
//           <p>Quality clothes, toys, accessories & more — curated for little ones.</p>

//           <Link href="/products" className="btn">Shop All Products</Link>
//         </section>

//         {/* ---------- CATEGORY SECTIONS ---------- */}
//         {sortedCategories.map((category) => (
//           <section key={category} className="category-section">
//             <div className="category-header">
//               <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>

//               <Link href={`/products?category=${category}`} className="view-all">
//                 View All →
//               </Link>
//             </div>

//             <div className="grid">
//               {productsByCategory[category].map((product) => (
//                 <div key={product.id} className="card">

//                   {/* CLICKABLE PRODUCT IMAGE → TAKES CUSTOMER TO DETAILS PAGE */}
//                   <Link href={`/product/${product.id}`}>
//                     <Image
//                       src={product.img}
//                       alt={product.title}
//                       width={200}
//                       height={200}
//                       style={{ borderRadius: "8px", objectFit: 'cover', cursor: "pointer" }}
//                     />
//                   </Link>

//                   <h3>{product.title}</h3>
//                   <p>${product.price}</p>

//                   {/* ADD TO CART */}
//                   <button
//                     className="btn"
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         ))}
//       </main>

//       {/* ---------- STYLES ---------- */}
//       <style jsx>{`
//         .hero {
//           text-align: center;
//           padding: 40px 0;
//         }
//         .category-section {
//           margin-top: 50px;
//         }
//         .category-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 12px;
//         }
//         .grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 20px;
//         }
//         .card {
//           padding: 16px;
//           border: 1px solid #eee;
//           border-radius: 8px;
//           text-align: center;
//         }
//         .btn {
//           margin-top: 8px;
//           padding: 8px 12px;
//           background: #e91e63;
//           color: white;
//           border-radius: 5px;
//           border: none;
//           cursor: pointer;
//           font-weight: bold;
//         }
//         .view-all {
//           color: #e91e63;
//           font-weight: bold;
//           text-decoration: none;
//         }
//       `}</style>
//     </div>
//   )
// }



// import Head from 'next/head'
// import Header from '../components/Header'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useCart } from '../context/CartContext'
// import { products } from '../lib/products'

// export default function Home() {
//   const { addToCart } = useCart()

//   // Group by category
//   const productsByCategory = products.reduce((groups, product) => {
//     const category = product.category?.toLowerCase() || 'others'
//     if (!groups[category]) groups[category] = []
//     groups[category].push(product)
//     return groups
//   }, {})

//   const sortedCategories = Object.keys(productsByCategory).sort()

//   return (
//     <div>
//       <Head>
//         <title>BabyBasket — Home</title>
//       </Head>

//       <Header />

//       <main className="container">

//         {/* ---------- HERO SECTION ---------- */}
//         <section className="hero">
//           <Image
//             src="/babylove-logo.png"
//             alt="Baby Love Logo"
//             width={50}
//             height={50}
//             style={{ width: "10%", height: "auto", borderRadius: "8px" }}
//           />

//           <h1>Welcome to Baby's Love</h1>
//           <p>Quality clothes, toys, accessories & more — curated for little ones.</p>

//           <Link href="/products" className="btn">Shop All Products</Link>
//         </section>

//         {/* ---------- CATEGORY SECTIONS ---------- */}
//         {sortedCategories.map((category) => (
//           <section key={category} className="category-section">
//             <div className="category-header">
//               <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>

//               <Link href={`/products?category=${category}`} className="view-all">
//                 View All →
//               </Link>
//             </div>

//             <div className="grid">
//               {productsByCategory[category].map((product) => (
//                 <div key={product.id} className="card">

//                   {/* FIXED: Links to /products/[id] */}
//                   <Link href={`/products/${product.id}`}>
//                     <Image
//                       src={product.img}
//                       alt={product.title}
//                       width={200}
//                       height={200}
//                       style={{ 
//                         borderRadius: "8px", 
//                         objectFit: 'cover', 
//                         cursor: "pointer" 
//                       }}
//                     />
//                   </Link>

//                   <h3>{product.title}</h3>
//                   <p>${product.price}</p>

//                   <button
//                     className="btn"
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </button>

//                 </div>
//               ))}
//             </div>

//           </section>
//         ))}
//       </main>

//       {/* ---------- STYLES ---------- */}
//       <style jsx>{`
//         .hero {
//           text-align: center;
//           padding: 40px 0;
//         }
//         .category-section {
//           margin-top: 50px;
//         }
//         .category-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 12px;
//         }
//         .grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 20px;
//         }
//         .card {
//           padding: 16px;
//           border: 1px solid #eee;
//           border-radius: 8px;
//           text-align: center;
//         }
//         .btn {
//           margin-top: 8px;
//           padding: 8px 12px;
//           background: #e91e63;
//           color: white;
//           border-radius: 5px;
//           border: none;
//           cursor: pointer;
//           font-weight: bold;
//         }
//         .view-all {
//           color: #e91e63;
//           font-weight: bold;
//           text-decoration: none;
//         }

//         @media (max-width: 768px) {
//   .grid {
//     grid-template-columns: repeat(2, 1fr); /* Force 2 columns on mobile */
//     gap: 12px; /* Slightly smaller gap for small screens */
//   }

//   .card {
//     padding: 12px; /* Optional: slightly smaller card padding */
//   }

//   .card img {
//     width: 100%;
//     height: auto;
//     border-radius: 8px;
//   }
// }

//       `}</style>
//     </div>
//   )
// }



export default function Home() {
  return (
    <>
      <Head>
        <title>BabyBasket — Home</title>
      </Head>

      {/* FULL-WIDTH HEADER */}
      <Header />

      {/* LIMIT ONLY MAIN CONTENT */}
      <main className="container">
        ... your content ...
      </main>
    </>
  );
}
