export interface IBaseRepository<T, TCreate, TUpdate> {
  findAll(filters?: any): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  create(data: TCreate): Promise<T>;
  update(id: string, data: TUpdate): Promise<T | null>;
  delete(id: string): Promise<T | null>;
  exists(id: string): Promise<boolean>;
  count(filters?: any): Promise<number>;
}
