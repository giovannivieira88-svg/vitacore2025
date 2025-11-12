// ...antes: imports e const stripe = new Stripe(...)
try {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancelado`,
  });

  return res.status(200).json({ url: session.url });
} catch (err) {
  console.error(err);
  return res.status(500).json({ error: err.message });
}
