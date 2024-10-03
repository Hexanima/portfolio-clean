export interface ServiceTemplate<T extends { id: string }> {
  getAll: () => Promise<T[]>;
  findById: (id: string) => Promise<T | undefined>;
  add: (item: T) => Promise<void>;
  remove: (id: string) => Promise<void>;
  update: (item: T) => Promise<void>;
}
