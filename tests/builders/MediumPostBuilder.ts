import { Builder } from "./Builder";
import { random } from "faker";

export class MediumPostBuilder extends Builder<{
  title: string;
  firstPublishedAt: number;
  uniqueSlug: string;
  detectedLanguage: string;
}> {
  protected instance = {
    title: random.words(),
    firstPublishedAt: 1589017866148,
    uniqueSlug: random.word(),
    detectedLanguage: random.locale(),
  };
}
