export interface Contact {
  _id: string;
  address: string;
  phone: string;
  email: string;
  googleMapUrl: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
}
