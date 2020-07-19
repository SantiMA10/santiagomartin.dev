import { HttpDriver } from "../repositories/drivers/HttpDriver";

export class GetLiveStatus {
  public constructor(
    private httpDriver: HttpDriver = new HttpDriver(),
    private twitchClientID = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID
  ) {}

  public async perform(): Promise<{ data: { live: boolean } }> {
    const { stream } = await this.httpDriver.get(
      "https://api.twitch.tv/kraken/streams/30664176",
      {
        headers: {
          "Client-ID": this.twitchClientID,
          accept: "application/vnd.twitchtv.v5+json",
        },
      }
    );

    return {
      data: {
        live: !!stream,
      },
    };
  }
}
