
export interface Product {
  id: string;
  category: ProductCategory;
  title: string;
  meta: string;
  price: number;
  stock: number;
  featured?: boolean;
}

export enum ProductCategory {
  FOLLOWERS = 'Seguidores Instagram',
  LIKES = 'Curtidas no Reels ou Foto',
  VIEWS = 'Visualizações no Reels ou IGTV',
  PREMIUM = 'Seguidores Estável Premium'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
