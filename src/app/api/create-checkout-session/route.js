import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2023-08-16" });

export async function POST(req) {
  try {
    const body = await req.json(); // espera { priceId: "price_xxx" }
    const { priceId } = body;
    if (!priceId) {
      return new Response(JSON.stringify({ error: "priceId é obrigatório" }), { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${process.env.NEXT_PUBLIC_SITE_URL}/cancelado`,
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err) {
    console.error("Erro create-checkout-session:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
