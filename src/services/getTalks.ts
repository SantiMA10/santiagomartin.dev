import { Talk } from "../entities/Talk";
import { DateTime } from "luxon";

export const getTalks = async (): Promise<{ talks: Talk[] }> => {
  return {
    talks: [
      {
        id: 1563231600000,
        time: DateTime.fromMillis(1563231600000).toFormat("MMM yyyy"),
        event: {
          name: "TLP Innova",
          url: "https://tlp-tenerife.com/tlpinnova/",
        },
        talk: {
          name: "¿Por qué elegir Firebase? 🔥",
          url: "http://bit.ly/FirebaseTLP2019",
        },
      },
      {
        id: 1544781600000,
        time: DateTime.fromMillis(1544781600000).toFormat("MMM yyyy"),
        event: {
          name: "Internal training",
        },
        talk: {
          name: "git 101",
          url:
            "https://docs.google.com/presentation/d/1Y929evMqLNIvFqPMd9Ei02ub7gMA_oRTVSvFb-PFHqE/edit?usp=sharing",
        },
      },
      {
        id: 1533826800000,
        time: DateTime.fromMillis(1533826800000).toFormat("MMM yyyy"),
        event: {
          name: "Build Actions for Your Community",
          url: "https://www.meetup.com/GDG-Asturias/events/248395884/",
        },
        talk: {
          name: "Getting started with Actions on Google",
          url:
            "https://docs.google.com/presentation/d/1D9v0RWnFus1GsTyZorugH9BcgpCjsbAWy90XPwwO7GY/edit?usp=sharing",
        },
      },
      {
        id: 1525791600000,
        time: DateTime.fromMillis(1525791600000).toFormat("MMM yyyy"),
        event: {
          name: "Google I/O Extended 2018",
          url: "https://www.meetup.com/GDG-Asturias/events/249222664/",
        },
        talk: {
          name: "Android Things",
          url:
            "https://docs.google.com/presentation/d/1oaN5EAumVNJ8BrJjdg5Dxt3KOM3UWH7G7uwv1nZb5qg/edit?usp=sharing",
        },
      },
    ],
  };
};
