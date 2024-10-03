import { ServiceTemplate } from "../../services/service-template";
import { ms } from "../../utils/time/ms";

export interface MockedServiceTemplate<T extends { id: string }>
  extends ServiceTemplate<T> {
  info: T[];
}

export function mockService<T extends { id: string }>(
  info?: T[],
): MockedServiceTemplate<T> {
  return {
    info: info ? [...info] : ([] as T[]),
    async findById(id) {
      return this.info.find((item) => item.id == id);
    },
    async add(item) {
      await ms(100);
      this.info.push(item);
    },
    async remove(id) {
      await ms(100);
      this.info = this.info.filter((item) => item.id != id);
    },
    async update(item: T) {
      await ms(100);
      this.info = this.info.map((old) =>
        old.id == item.id ? { ...item } : old,
      );
    },
    async getAll() {
      await ms(100);
      return this.info;
    },
  };
}
