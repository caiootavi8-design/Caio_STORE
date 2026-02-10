
import { Product, ProductCategory } from './types';

export const PRODUCTS: Product[] = [
  // FOLLOWERS
  { id: 'f1', category: ProductCategory.FOLLOWERS, title: '100 Seguidores POUCA QUEDA', meta: 'Entrega rápida! · Sem senha', price: 2.50, stock: 99997 },
  { id: 'f2', category: ProductCategory.FOLLOWERS, title: '500 Seguidores POUCA QUEDA', meta: 'Entrega rápida! · Alta retenção', price: 10.00, stock: 99999998 },
  { id: 'f3', category: ProductCategory.FOLLOWERS, title: '800 Seguidores POUCA QUEDA', meta: 'Ideal para perfis iniciantes', price: 16.00, stock: 99999999 },
  { id: 'f4', category: ProductCategory.FOLLOWERS, title: '1.000 Seguidores POUCA QUEDA', meta: 'Mais credibilidade instantânea', price: 22.00, stock: 9999, featured: true },
  { id: 'f5', category: ProductCategory.FOLLOWERS, title: '10.000 Seguidores POUCA QUEDA', meta: 'Para quem quer autoridade forte', price: 150.00, stock: 99999999 },
  
  // LIKES
  { id: 'l1', category: ProductCategory.LIKES, title: '1.000 Curtidas SEM QUEDA', meta: 'Entrega rápida! · Alta retenção', price: 3.00, stock: 99999999 },
  { id: 'l2', category: ProductCategory.LIKES, title: '3.000 Curtidas SEM QUEDA', meta: 'Ideal para viralização inicial', price: 9.00, stock: 9999999 },
  { id: 'l3', category: ProductCategory.LIKES, title: '10.000 Curtidas SEM QUEDA', meta: 'Prova social forte', price: 12.00, stock: 99999 },
  
  // VIEWS
  { id: 'v1', category: ProductCategory.VIEWS, title: '100 Visualizações Reels/IGTV', meta: 'Entrega rápida!', price: 2.00, stock: 9999 },
  { id: 'v2', category: ProductCategory.VIEWS, title: '1.000 Visualizações Reels/IGTV', meta: 'Alta performance', price: 3.00, stock: 999999 },
  
  // PREMIUM
  { id: 'p1', category: ProductCategory.PREMIUM, title: '1.000 Seguidores Estável Premium', meta: 'Alta retenção · Qualidade premium', price: 38.00, stock: 999998 }
];

export const APP_CONFIG = {
  primary: '#ff4d4d',
  secondary: '#111111',
  dark: '#050505',
  accent: '#ff0000'
};
