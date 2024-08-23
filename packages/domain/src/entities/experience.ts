import { Organization } from "./organization";

export interface Experience {
  id: string;
  title: string;
  workplace: Organization;
  startDate: string;
  finishDate?: string;
  description: string[];
  url?: string;
}
