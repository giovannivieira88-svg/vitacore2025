import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2023-08-16" });

export async function POST(req) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const sig = req.headers.get("stripe-signature");

  // Leia o corpo como texto (Stripe exige raw body para validação)
  const body = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    // Exemplo: lidar com checkout.session.completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("Checkout concluído:", session.id);
      // aqui você pode: gravar no banco, criar assinaturas etc.
    }

    // Resposta padrão para Stripe
    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (err) {
    console.error("Erro no webhook:", err);
    return new Response(Webhook error: ${err.message}, { status: 400 });
  }
}
