# DropShip Chile — Tienda Dropshipping en Astro.js

Tienda de dropshipping completa construida con **Astro 5**, **Tailwind CSS** y **WebPay Plus (Transbank)** en modo integración.

## Características

- **10 categorías** top de AliExpress (Electrónica, Moda, Hogar, Belleza, Salud, Mascotas, Auto, Deportes, Cocina, Oficina)
- **100 productos** inspirados en bestsellers reales de AliExpress (10 por categoría)
- Precios en **CLP**
- Carrito de compras (localStorage)
- Checkout con datos de envío
- Integración **WebPay Plus** (sandbox Transbank)
- Diseño responsive moderno

## Requisitos

- Node.js 18+
- npm o pnpm

## Instalación

```bash
cd astro-dropship-store
npm install
npm run dev
```

Abre http://localhost:4321

## Estructura

```
src/
├── components/     # Header, Footer, ProductCard
├── data/           # products.ts (categorías + 100 productos)
├── layouts/        # Layout base
├── pages/
│   ├── index.astro
│   ├── carrito.astro
│   ├── checkout.astro
│   ├── categoria/[slug].astro
│   ├── producto/[slug].astro
│   ├── checkout/resultado.astro
│   └── api/webpay/
│       ├── create.ts   # Crea transacción WebPay
│       └── commit.ts   # Confirma pago y redirige
└── styles/global.css
```

## WebPay — Modo integración (sandbox)

Credenciales de prueba oficiales de Transbank:

| Campo | Valor |
|-------|-------|
| Commerce Code | `597055555532` |
| API Key | `579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C` |

### Tarjeta de prueba

- **Número:** 4051885600446623
- **CVV:** 123
- **Fecha:** cualquier fecha futura
- **RUT:** 11.111.111-1

### Flujo de pago

1. Usuario agrega productos al carrito
2. En `/checkout` completa datos y hace clic en "Pagar con WebPay"
3. El backend (`/api/webpay/create`) crea la transacción en Transbank
4. El usuario es redirigido al formulario de WebPay
5. Tras pagar, Transbank llama a `/api/webpay/commit`
6. Se muestra el resultado en `/checkout/resultado`

## Producción

Para producción:

1. Obtén credenciales reales en [Transbank Developers](https://www.transbankdevelopers.cl)
2. Cambia el host a `https://webpay3g.transbank.cl`
3. Reemplaza `COMMERCE_CODE` y `API_KEY` en los archivos de API
4. Configura HTTPS (obligatorio)
5. `npm run build && npm start`

## Notas

- Esta es una **tienda demo educativa**. Los productos son ficticios inspirados en tendencias reales de AliExpress.
- El dropshipping real requiere integración con proveedores (AliExpress API, CJ Dropshipping, etc.) y gestión de inventario/pedidos.
- WebPay solo funciona desde un dominio accesible públicamente en producción; en local usa el sandbox.

## Licencia

MIT — Uso libre para aprendizaje y demos.
