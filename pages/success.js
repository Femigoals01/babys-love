

import Head from 'next/head'
import Header from '../components/Header'
import { useEffect } from 'react'
import { useCart } from '../context/CartContext'

export default function SuccessPage() {
  const { clear } = useCart()

  useEffect(() => {
    // Clear cart only after successful payment
    clear()
  }, [clear])

  return (
    <div>
      <Head><title>Order Successful — Baby's Love</title></Head>
      <Header />
      <main className="container">
        <h2>Thank you for your order!</h2>
        <p>Your payment was successful. We will process your order shortly.</p>
      </main>
    </div>
  )
}
