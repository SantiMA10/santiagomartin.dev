export abstract class Builder<T> {
  protected abstract instance: T;

  public get(): T {
    return this.instance;
  }
}
