export interface ServiceTemplate<T> {
  getAll: () => Promise<T[]>;
  getOne: (id: string) => Promise<T | null>;
  add: (item: T) => Promise<void>;
  remove: (id: string) => Promise<void>;
  update: (item: T) => Promise<void>;
}
