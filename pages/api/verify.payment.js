// pages/api/verify-payment.js
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { reference } = req.query;

  if (!reference) {
    return res.status(400).json({ error: "No reference provided" });
  }

  try {
    const verifyResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await verifyResponse.json();

    if (!data.status) {
      return res.status(400).json({
        error: "Payment verification failed",
        details: data,
      });
    }

    return res.status(200).json({ success: true, data: data.data });
  } catch (error) {
    return res.status(500).json({
      error: "Server error verifying payment",
      details: error.message,
    });
  }
}
