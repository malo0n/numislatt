import { continents } from "../model";
import { fullContinents } from "../types/types";

export const handleContinentName = (continent: continents): fullContinents => {
  switch (continent) {
    case "AF":
      return "Africa";
    case "AN":
      return "Antarctica";
    case "AS":
      return "Asia";
    case "EU":
      return "Europe";
    case "NA":
      return "North America";
    case "OC":
      return "Australia/Oceania";
    case "SA":
      return "South America";
  }
};
