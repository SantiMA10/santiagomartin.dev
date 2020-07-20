import { MarkdownPostRepository } from "../../src/repositories/MarkdownPostRepository";

describe("MarkdownPostRepository", () => {
  describe("#getAll", () => {
    it("return the post list as we spec", async () => {
      const subject = new MarkdownPostRepository();

      const posts = await subject.getAll();

      expect(posts).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: "¡Hola deno! 🦕",
            key: "hola-deno",
            body: expect.any(String),
            time: "May 2020",
            spoiler:
              "Una nueva forma de utilizar TypeScript/JavaScript para crear aplicaciones en el lado del servidor más seguras.",
            tags: ["deno", "TypeScript", "Nodejs", "Google Cloud Run"],
            detectedLanguage: "es",
            url: `/blog/hola-deno`,
          }),
        ])
      );
    });
  });

  describe("#getBySlug", () => {
    it("return the post formated", async () => {
      const subject = new MarkdownPostRepository();

      const posts = await subject.getBySlug("hola-deno");

      expect(posts).toEqual(
        expect.objectContaining({
          title: "¡Hola deno! 🦕",
          key: "hola-deno",
          body: expect.any(String),
          time: "May 2020",
          spoiler:
            "Una nueva forma de utilizar TypeScript/JavaScript para crear aplicaciones en el lado del servidor más seguras.",
          tags: ["deno", "TypeScript", "Nodejs", "Google Cloud Run"],
          detectedLanguage: "es",
          url: `/blog/hola-deno`,
        })
      );
    });
  });
});
