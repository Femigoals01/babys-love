
// --- FILE: components/ProductCard.jsx ---
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="card">
      <div className="imgwrap">
        <Image
          src={product.img}
          alt={product.title}
          width={400}
          height={300}
          style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      {/* <p>{product.description}</p> */}
    </Link>
  )
}

