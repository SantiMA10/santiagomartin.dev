import { Event } from "../entities/Event";
import { Repository } from "./Repository";

export class StaticEventRepository implements Repository<Event> {
  public async getAll(): Promise<Event[]> {
    return [
      {
        id: 1604737800000,
        time: 1604737800000,
        event: {
          name: "Asturias Global Day Of Coderetreat 2020",
          url:
            "https://www.eventbrite.es/e/entradas-asturias-global-day-of-coderetreat-2020-123380461281",
        },
      },
      {
        id: 1592326800000,
        time: 1592326800000,
        event: {
          name: "Introducción a Verdaccio",
          url:
            "https://www.meetup.com/es-ES/asturias-javascript/events/271056488/",
        },
      },
      {
        id: 1591722000000,
        time: 1591722000000,
        event: {
          name: "Presentación de asturias.js",
          url:
            "https://www.meetup.com/es-ES/asturias-javascript/events/270972747/",
        },
      },
      {
        id: 1569823200000,
        time: 1569823200000,
        event: {
          name: "Firebase Asturias Day",
          url: "https://www.meetup.com/es-ES/GDG-Asturias/events/263783888/",
        },
      },
      {
        id: 1548313200000,
        time: 1548313200000,
        event: {
          name: "Desmitificando GraphQL",
          url: "https://www.meetup.com/es-ES/GDG-Asturias/events/257587717/",
        },
      },
      {
        id: 1557208800000,
        time: 1557208800000,
        event: {
          name: "Google I/O Extended 2019 Asturias",
          url: "https://www.meetup.com/es-ES/GDG-Asturias/events/260308526/",
        },
      },
      {
        id: 1560751200000,
        time: 1560751200000,
        event: {
          name: "Creando apps increíbles con Xamarin Forms",
          url: "https://www.meetup.com/es-ES/GDG-Asturias/events/262069311/",
        },
      },
      {
        id: 1573887600000,
        time: 1573887600000,
        event: {
          name: "DevFest Asturias 2019",
          url: "https://www.meetup.com/es-ES/GDG-Asturias/events/263423248/",
        },
      },
      {
        id: 1554505200000,
        time: 1554505200000,
        event: {
          name: "WTM Asturias 2019",
          url: "https://www.meetup.com/es-ES/GDG-Asturias/events/258756592/",
        },
      },
      {
        id: 1543654800000,
        time: 1543654800000,
        event: {
          name: "DevFest Asturias 2018",
          url: "https://www.meetup.com/GDG-Asturias/events/254241974/",
        },
      },
      {
        id: 1523692800000,
        time: 1523692800000,
        event: {
          name: "WTM Asturias 2018",
          url: "https://www.meetup.com/GDG-Asturias/events/246868757/",
        },
      },
    ];
  }
}
