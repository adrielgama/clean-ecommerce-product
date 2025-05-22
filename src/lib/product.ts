import { Product } from '@/types/product'

export const productVariants: Product[] = [
  {
    id: 1,
    name: 'Tênis Adidas Duramo RC',
    color: 'Vermelho',
    sizes: ['38', '39', '41', '44'],
    price: 299.9,
    image: [
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/16/FB8-8808-016/FB8-8808-016_zoom1.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/16/FB8-8808-016/FB8-8808-016_zoom2.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/16/FB8-8808-016/FB8-8808-016_zoom3.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/16/FB8-8808-016/FB8-8808-016_zoom4.jpg',
    ],
  },
  {
    id: 2,
    name: 'Tênis Adidas Duramo RC',
    color: 'Verde',
    sizes: ['40', '42'],
    price: 299.9,
    image: [
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/60/FB8-8808-260/FB8-8808-260_zoom1.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/60/FB8-8808-260/FB8-8808-260_zoom2.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/60/FB8-8808-260/FB8-8808-260_zoom3.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/60/FB8-8808-260/FB8-8808-260_zoom4.jpg',
    ],
  },
  {
    id: 3,
    name: 'Tênis Adidas Duramo RC',
    color: 'Branco',
    sizes: ['38', '39', '41', '44'],
    price: 399.9,
    image: [
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/14/FB8-8808-014/FB8-8808-014_zoom1.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/14/FB8-8808-014/FB8-8808-014_zoom2.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/14/FB8-8808-014/FB8-8808-014_zoom3.jpg',
    ],
  },
  {
    id: 4,
    name: 'Tênis Adidas Duramo RC',
    color: 'Azul',
    sizes: ['38'],
    price: 159.9,
    image: [
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/42/FB8-8808-342/FB8-8808-342_zoom1.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/42/FB8-8808-342/FB8-8808-342_zoom2.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/42/FB8-8808-342/FB8-8808-342_zoom3.jpg',
      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-rc/42/FB8-8808-342/FB8-8808-342_zoom4.jpg',
    ],
  },
] as const
