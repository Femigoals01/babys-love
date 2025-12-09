

// pages/api/update-order.js
export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })

  const { reference, update } = req.body
  if (!reference || !update) return res.status(400).json({ error: 'Missing parameters' })

  if (!global.orders || !global.orders[reference]) {
    return res.status(404).json({ error: 'Order not found' })
  }

  const order = global.orders[reference]

  // allowed status updates
  if (update.payment) {
    order.status.payment = update.payment
    order.history.push({ when: new Date().toISOString(), what: `payment:${update.payment}` })
  }
  if (update.processing) {
    order.status.processing = update.processing
    order.history.push({ when: new Date().toISOString(), what: `processing:${update.processing}` })
  }
  if (update.etaDays !== undefined) {
    order.etaDays = update.etaDays
    order.history.push({ when: new Date().toISOString(), what: `eta:${update.etaDays}` })
  }

  global.orders[reference] = order

  return res.status(200).json({ success: true, order })
}
