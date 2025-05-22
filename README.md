# Clean E-commerce Product Page

Página de produto desenvolvida em Next.js 15 com foco em boas práticas, componentização, persistência local e interatividade dinâmica.

## Tecnologias utilizadas

- **Next.js 15 (App Router)**
- **React 19 (Hooks modernos)**
- **TypeScript**
- **Tailwind CSS v4**
- **Zustand + Persistência com TTL**
- **Sonner (Toast)**
- **Shadcn UI (Button, Tooltip, etc.)**

## Estrutura de Pastas

```
📁app
 ├── 📁api
 │   └── 📁zipcode
 │       └── route.ts (Proxy para ViaCEP)
 ├── 📁product
 │   └── 📁[slug]
 │       ├── 📁_components
 │       │   ├── freight-calculator.tsx
 │       │   ├── image-gallery.tsx
 │       │   ├── product-client.tsx
 │       │   └── variant-selector.tsx
 │       └── page.tsx (Server Component)
 ├── layout.tsx
 └── page.tsx (Redirect para /product/tenis-esportivo)
```
