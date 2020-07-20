import { isProdEnv } from "./environments";

export class Features {
  public static enableBlog() {
    return !isProdEnv();
  }
}
