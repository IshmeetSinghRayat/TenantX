import { User } from "../domain/User";
interface Event {
  type: string;
  data: any;
}

const events: Event[] = [];

const saveEvent = (event: Event) => {
  events.push(event);
  console.log("New Event Created");
};

const getEvents = () => events;

export { saveEvent, getEvents };
