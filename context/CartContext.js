// import { createContext, useContext, useEffect, useState } from 'react'


// const CartContext = createContext()


// export function CartProvider({ children }) {
// const [items, setItems] = useState([])


// useEffect(() => {
// try {
// const saved = localStorage.getItem('cart')
// if (saved) setItems(JSON.parse(saved))
// } catch (e) {}
// }, [])


// useEffect(() => {
// try {
// localStorage.setItem('cart', JSON.stringify(items))
// } catch (e) {}
// }, [items])


// const addToCart = product => {
// setItems(prev => {
// const found = prev.find(p => p.id === product.id)
// if (found) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p)
// return [...prev, { ...product, qty: 1 }]
// })
// }


// const removeFromCart = id => {
// setItems(prev => prev.filter(p => p.id !== id))
// }


// const updateQty = (id, qty) => {
// setItems(prev => prev.map(p => p.id === id ? { ...p, qty } : p))
// }


// const clear = () => setItems([])


// const total = items.reduce((s, p) => s + p.price * p.qty, 0)


// return (
// <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clear, total }}>
// {children}
// </CartContext.Provider>
// )
// }


// export const useCart = () => useContext(CartContext)





import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cart')
      if (saved) setItems(JSON.parse(saved))
    } catch (e) {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items))
    } catch (e) {}
  }, [items])

  const addToCart = product => {
    setItems(prev => {
      const found = prev.find(p => p.id === product.id)
      if (found)
        return prev.map(p =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = id => {
    setItems(prev => prev.filter(p => p.id !== id))
  }

  const updateQty = (id, qty) => {
    setItems(prev => prev.map(p => p.id === id ? { ...p, qty } : p))
  }

  const clear = () => setItems([])

  const total = items.reduce((s, p) => s + p.price * p.qty, 0)

  const cartCount = items.reduce((sum, item) => sum + item.qty, 0)

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQty,
      clear,
      total,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
