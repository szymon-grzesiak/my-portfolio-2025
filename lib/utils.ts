import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchCuriosity = async () => {
  try {
    const res = await axios.get("https://api.api-ninjas.com/v1/facts?limit=1", {
      headers: {
        "X-Api-Key": "honPLapN3VYajPSyZghzdg==bqUJ04ZT8jzL1iMp",
      },
    });
    return res.data[0].fact;
  } catch (error) {
    console.error("Error fetching fact:", error);
    return "An error occurred while fetching the fact.";
  }
};
