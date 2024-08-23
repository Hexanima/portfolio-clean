import { Banner } from "../entities/banner";

export interface BannerService {
  getAll: () => Banner[];
  add: (banner: Banner) => void;
  remove: (id: string) => void;
  update: (banner: Banner) => void;
  getOne: (id: string) => Banner | null;
}
