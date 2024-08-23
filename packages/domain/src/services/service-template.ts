export interface ServiceTemplate<T> {
  getAll: () => Promise<T[]>;
  getOne: (id: string) => Promise<T | null>;
  add: (newItem: T) => Promise<void>;
  remove: (id: string) => Promise<void>;
  update: (updatedItem: T) => Promise<void>;
}
