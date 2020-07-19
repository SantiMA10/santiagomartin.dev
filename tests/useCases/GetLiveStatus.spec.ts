import { GetLiveStatus } from "../../src/useCases/GetLiveStatus";
import { FakeHttpDriver } from "../../src/repositories/drivers/FakeHttpDriver";

const subjectBuilder = () => {
  const driver = new FakeHttpDriver();

  return { subject: new GetLiveStatus(driver, "token"), driver };
};

describe("GetLiveStatus", () => {
  it("returns true if I'm live on Twitch", async () => {
    const { subject, driver } = subjectBuilder();
    driver.get.mockImplementationOnce(async () => ({
      stream: { _id: "ramdo" },
    }));

    const { data } = await subject.perform();

    expect(data).toEqual({ live: true });
  });

  it("use the HttpDriver to call the Twitch API with the given token", async () => {
    const { subject, driver } = subjectBuilder();
    driver.get.mockImplementationOnce(async () => ({ stream: null }));

    await subject.perform();

    expect(driver.get).toHaveBeenCalledWith(
      "https://api.twitch.tv/kraken/streams/30664176",
      expect.objectContaining({
        headers: {
          "Client-ID": "token",
          accept: "application/vnd.twitchtv.v5+json",
        },
      })
    );
  });

  it("returns false if I'm not live on Twitch", async () => {
    const { subject, driver } = subjectBuilder();
    driver.get.mockImplementationOnce(async () => ({ stream: null }));

    const { data } = await subject.perform();

    expect(data).toEqual({ live: false });
  });
});
