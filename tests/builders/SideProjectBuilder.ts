import { Builder } from "./Builder";
import { SideProject } from "../../src/entities/SideProject";
import { random, internet } from "faker";

export class SideProjectBuilder extends Builder<SideProject> {
  protected instance: SideProject = {
    id: random.uuid(),
    title: {
      text: random.word(),
      url: internet.url(),
    },
    description: random.words(),
    code: internet.url(),
  };
}
