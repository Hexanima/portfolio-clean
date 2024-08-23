import { PageStyle } from "../../entities/pageStyle";
import { PageStyleService } from "../../services/page-style-service";

export interface GetAllStylesDependencies {
  styleService: PageStyleService;
}

export default async function getAllStyles({
  styleService,
}: GetAllStylesDependencies): Promise<PageStyle[]> {
  const result = await styleService.getAll();
  return result;
}
