import type { APIRoute } from 'astro';

const COMMERCE_CODE = '597055555532';
const API_KEY = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C';
const TBK_HOST = 'https://webpay3gint.transbank.cl';

export const GET: APIRoute = async ({ url, redirect }) => {
  return handleCommit(url, redirect);
};

export const POST: APIRoute = async ({ request, url, redirect }) => {
  const formData = await request.formData().catch(() => null);
  const tokenFromBody = formData?.get('token_ws') as string | null;
  if (tokenFromBody) {
    url.searchParams.set('token_ws', tokenFromBody);
  }
  return handleCommit(url, redirect);
};

async function handleCommit(url: URL, redirect: (path: string) => Response) {
  const token = url.searchParams.get('token_ws');
  const tbkToken = url.searchParams.get('TBK_TOKEN');

  if (tbkToken && !token) {
    return redirect('/checkout/resultado?status=aborted');
  }

  if (!token) {
    return redirect('/checkout/resultado?status=error&msg=sin_token');
  }

  try {
    const res = await fetch(`${TBK_HOST}/rswebpaytransaction/api/webpay/v1.2/transactions/${token}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Tbk-Api-Key-Id': COMMERCE_CODE,
        'Tbk-Api-Key-Secret': API_KEY,
      },
    });

    const data = await res.json();

    if (data.response_code === 0 && data.status === 'AUTHORIZED') {
      const params = new URLSearchParams({
        status: 'success',
        amount: String(data.amount),
        order: data.buy_order || '',
        auth: data.authorization_code || '',
        card: data.card_detail?.card_number || '',
      });
      return redirect(`/checkout/resultado?${params}`);
    }

    return redirect(`/checkout/resultado?status=rejected&code=${data.response_code ?? 'unknown'}`);
  } catch (err) {
    console.error('Commit error:', err);
    return redirect('/checkout/resultado?status=error&msg=commit_failed');
  }
}
