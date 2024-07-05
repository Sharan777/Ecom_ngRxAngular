export interface Iproduct {
  id : number,
  title: string,
  price:number,
  description: string,
  category: string,
  image: string,
  rating: Irating,
  quantity: number,
}

export interface Irating {
  rate: number,
  count: number
}