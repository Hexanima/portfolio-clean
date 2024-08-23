export interface ServiceTemplate<T extends { id: string }> {
  getAll: () => Promise<T[]>;
  add: (item: T) => Promise<void>;
  remove: (id: string) => Promise<void>;
  update: (item: T) => Promise<void>;
}
