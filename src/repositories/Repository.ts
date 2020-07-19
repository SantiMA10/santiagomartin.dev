export interface Repository<T> {
  getAll(): Promise<T[]>;
}
