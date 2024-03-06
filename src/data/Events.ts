export interface Event {
    name: string;
    start: Date;
    end: Date;
    itchUrl: string;
}

export const Events: Event[] = [
  {
    name: "Joint Jam 2024",
    start: new Date("2024-03-29T18:00"),
    end: new Date("2024-03-31T18:00"),
    itchUrl: "https://itch.io/jam/joint-jam-2024/",
  },
];

export const CurrentEvent: Event = Events[0];
