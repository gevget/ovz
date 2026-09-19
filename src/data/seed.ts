import { places as corePlaces } from "../../31_SEED_DATA_CORE";
import { expandedPlaces } from "@/data/expandedPlaces";

export {
  users,
  organizations,
  helpRequests,
  vacancies,
  courses,
  events,
  articles,
  notifications,
} from "../../31_SEED_DATA_CORE";

export const places = [...corePlaces, ...expandedPlaces];
