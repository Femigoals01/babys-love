

// --- FILE: pages/products/[id].js ---
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header'
import { products } from '../../lib/products'
import Image from 'next/image'
import { useCart } from '../../context/CartContext'

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const product = products.find(p => p.id === id)
  const { addToCart } = useCart()

  if (!product) return <div>Loading...</div>

  return (
    <div>
      <Head><title>{product.title} — BabyBasket</title></Head>
      <Header />
      <main className="container product-detail">
        <div className="left">
          <Image
            src={product.img}
            alt={product.title}
            width={600}
            height={450}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
          />
        </div>
        <div className="right">
          <h2>{product.title}</h2>
          <p className="price">${product.price.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <button className="btn" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </main>
    </div>
  )
}
