import Product from "../../products/product";

export interface CartPrococol {
  addItem(item: Product):void
  removeItem(item: Product):void
  get items(): readonly Product[]
  total(): number
  isEmpty(): boolean
  clear(): void
}

export interface CartPrococol2<T> {
  addItem(item: Product):void
  removeItem(item: Product):void
  get items(): readonly T[]
  total(): number
  isEmpty(): boolean
  clear(): void
}
