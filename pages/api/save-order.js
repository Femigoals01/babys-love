


// // pages/api/save-order.js
// export default async function handler(req, res) {
//   if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })

//   try {
//     const { reference, items, total } = req.body

//     if (!reference || !items || items.length === 0) {
//       return res.status(400).json({ error: 'Invalid order data' })
//     }

//     // Temporary in-memory storage for testing
//     if (!global.orders) global.orders = {}
//     global.orders[reference] = { items, total, createdAt: new Date() }

//     return res.status(200).json({ success: true })
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({ error: 'Failed to save order' })
//   }
// }


// pages/api/save-order.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })

  try {
    const { reference, items, total, name, email, phone } = req.body
    if (!reference || !items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'Invalid order data' })
    }

    if (!global.orders) global.orders = {}

    // default status object
    const orderObj = {
      reference,
      items,
      total,
      customer: { name: name || null, email: email || null, phone: phone || null },
      createdAt: new Date().toISOString(),
      status: {
        payment: 'paid',          // 'pending' | 'paid' | 'failed'
        processing: 'pending',    // 'pending' | 'processing' | 'shipped' | 'delivered'
      },
      history: [
        { when: new Date().toISOString(), what: 'order_created' }
      ],
      etaDays: 5 // default ETA in days
    }

    global.orders[reference] = orderObj

    return res.status(200).json({ success: true, order: orderObj })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to save order' })
  }
}
