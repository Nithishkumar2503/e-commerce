export interface APIFormat<T> {
  records: T[]
  limit: number;
  skip: number;
  total:number
}
