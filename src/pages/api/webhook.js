import { buffer } from "micro";
import Stripe from "stripe";

export const config = { api: { bodyParser: false } };
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Método não permitido");

  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);

  try {
    const event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("Pagamento recebido:", session.id);
      // Aqui depois a gente vai colocar o código para gravar no Supabase
    }

    res.json({ received: true });
  } catch (err) {
    console.error("Erro no webhook:", err);
    res.status(400).send(Erro no webhook: ${err.message});
  }
}
