export interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  price: string;
  images: {
    asset: {
      url: string;
    }
  }[];
  sizes: string[];
  keyValueSpecs: { key: string; value: string }[];
  bulletSpecs: string[];
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
