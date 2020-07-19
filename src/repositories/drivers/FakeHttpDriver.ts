import { HttpDriver } from "./HttpDriver";

export class FakeHttpDriver extends HttpDriver {
  public get = jest.fn();
}
