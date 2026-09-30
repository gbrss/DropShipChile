import type { APIRoute } from 'astro';

const COMMERCE_CODE = '597055555532';
const API_KEY = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C';
const TBK_HOST = 'https://webpay3gint.transbank.cl';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { amount, buyOrder, sessionId } = body;

    if (!amount || amount < 50) {
      return new Response(JSON.stringify({ error: 'Monto mínimo $50 CLP' }), { status: 400 });
    }

    const origin = new URL(request.url).origin;
    const returnUrl = `${origin}/api/webpay/commit`;

    const res = await fetch(`${TBK_HOST}/rswebpaytransaction/api/webpay/v1.2/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Tbk-Api-Key-Id': COMMERCE_CODE,
        'Tbk-Api-Key-Secret': API_KEY,
      },
      body: JSON.stringify({
        buy_order: String(buyOrder).slice(0, 26),
        session_id: String(sessionId).slice(0, 61),
        amount: Math.round(amount),
        return_url: returnUrl,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Transbank error:', data);
      return new Response(JSON.stringify({ error: data.error_message || 'Error Transbank' }), { status: 502 });
    }

    return new Response(JSON.stringify({ token: data.token, url: data.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message || 'Error interno' }), { status: 500 });
  }
};
