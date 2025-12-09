
// // pages/api/get-order.js
// export default function handler(req, res) {
//   if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' })

//   const { ref } = req.query
//   if (!ref || !global.orders || !global.orders[ref]) {
//     return res.status(404).json({ error: 'Order not found' })
//   }

//   return res.status(200).json({ success: true, order: global.orders[ref] })
// }


// pages/api/get-order.js
export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' })

  const { ref } = req.query
  if (!ref) return res.status(400).json({ error: 'Missing reference' })

  if (!global.orders || !global.orders[ref]) {
    return res.status(404).json({ error: 'Order not found' })
  }

  return res.status(200).json({ success: true, order: global.orders[ref] })
}
