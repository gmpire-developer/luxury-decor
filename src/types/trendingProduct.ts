export type TrendingProduct = {
  _id: string;
  title: string;
  products: {
    _id: string;
    title: string;
    slug: {current:string};
    price: number;
    bannerImage: {
      asset: {
        url: string;
      }
    }
  }[]
}
