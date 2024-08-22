
export interface Menu {
    id: number;
    menuName: string;
    description: string;
    ingredients:string;
    price: number;
    offers:string;
    deals:string;
    discounts:string;
    Categories: string;
    hotSeller:string;

    "menuImage"?: string | null ;
  }
  