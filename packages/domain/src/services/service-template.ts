export interface ServiceTemplate<T> {
  getAll: () => T[];
  getOne: (id: string) => T | null;
  add: (newItem: T) => void;
  remove: (id: string) => void;
  update: (updatedItem: T) => void;
}
