import nodeFetch from "node-fetch";
import { RequestInfo, RequestInit } from "node-fetch";

export enum HttpDriverFormats {
  TEXT = "text",
  JSON = "JSON",
}

type GetOptions = {
  format?: HttpDriverFormats;
} & RequestInit;

export class HttpDriver {
  public constructor(
    private fetcher = (url: RequestInfo, options: RequestInit) =>
      nodeFetch(url, options)
  ) {}

  public async get(
    url: string,
    { format, ...options }: GetOptions = { format: HttpDriverFormats.JSON }
  ): Promise<any> {
    const response = await this.fetcher(url, options);

    if (!response.ok) {
      throw new Error(`Status: ${response.status} | 'GET ${url}'`);
    }

    switch (format) {
      case HttpDriverFormats.TEXT:
        return response.text();
      default:
      case HttpDriverFormats.JSON:
        return response.json();
    }
  }
}
