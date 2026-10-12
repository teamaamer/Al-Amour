// Shared shape for the per-category product pages (/products/<slug>)

export type Lang = 'ar' | 'en';
export type Text = Record<Lang, string>;
export type TextList = Record<Lang, string[]>;

export interface Product {
  code: string;
  // Omitted on pages whose catalogs don't name a manufacturer
  brand?: string;
  type: string;
  name: Text;
  description: Text;
  features: TextList;
  mix?: Text;
  gloss?: string[];
  colors?: Text;
  sizes?: Text;
  applications?: TextList;
  // Product-specific catalog; falls back to the brand catalog
  catalog?: string;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  origin: Text;
  country: 'it' | 'tr';
  logo: string;
  catalog: string;
  tagline: Text;
}

export interface CatalogCard {
  name: Text;
  tagline: Text;
  summary: Text;
  kind: Text;
  file: string;
  size: string;
}

export type StepIcon = 'droplets' | 'layers' | 'paintbrush' | 'eraser' | 'sparkles';

export interface CategoryPage {
  // Position in the home page category list, shown as "· 01"
  index: string;
  title: Text;
  intro: Text;
  steps?: { icon: StepIcon; title: Text; desc: Text }[];
  stepNote?: Text;
  brands: Brand[];
  productTypes: { id: string; label: Text }[];
  products: Product[];
  // Images are photos to fill the card rather than product shots on white
  photos?: boolean;
  // Catalog-only pages list their PDFs instead of products
  catalogs?: CatalogCard[];
}
