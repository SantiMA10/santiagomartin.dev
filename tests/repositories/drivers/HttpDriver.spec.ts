import {
  HttpDriver,
  HttpDriverFormats,
} from "../../../src/repositories/drivers/HttpDriver";
import nodeFetch from "node-fetch";

const buildFetchSpy = ({ ok = true } = {}) => {
  const json = jest.fn();
  const text = jest.fn();

  return {
    spyFetch: (jest.fn(async () => ({
      json,
      text,
      ok,
    })) as unknown) as typeof nodeFetch,
    json,
    text,
  };
};

describe("HttpDriver", () => {
  describe("#get", () => {
    it("calls fetch with the given url and empty options", async () => {
      const { spyFetch } = buildFetchSpy();
      const subject = new HttpDriver(spyFetch);

      await subject.get("https://santiagomartin.dev");

      expect(spyFetch).toHaveBeenCalledWith("https://santiagomartin.dev", {});
    });

    it("calls fetch with the given url and some headers", async () => {
      const { spyFetch } = buildFetchSpy();
      const subject = new HttpDriver(spyFetch);

      await subject.get("https://santiagomartin.dev", {
        headers: { foo: "bar" },
      });

      expect(spyFetch).toHaveBeenCalledWith("https://santiagomartin.dev", {
        headers: { foo: "bar" },
      });
    });

    it("parses the response as JSON", async () => {
      const { spyFetch, json } = buildFetchSpy();
      const subject = new HttpDriver(spyFetch);

      await subject.get("https://santiagomartin.dev", {
        format: HttpDriverFormats.JSON,
      });

      expect(json).toHaveBeenCalled();
    });

    it("parses the response as TEXT", async () => {
      const { spyFetch, text } = buildFetchSpy();
      const subject = new HttpDriver(spyFetch);

      await subject.get("https://santiagomartin.dev", {
        format: HttpDriverFormats.TEXT,
      });

      expect(text).toHaveBeenCalled();
    });

    it("throws an exception if something goes wrong", async () => {
      const { spyFetch } = buildFetchSpy({ ok: false });
      const subject = new HttpDriver(spyFetch);

      await expect(subject.get("https://santiagomartin.dev")).rejects.toThrow();
    });
  });
});
