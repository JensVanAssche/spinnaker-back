import * as calendarRepository from "../repositories/calendar.repository";

export async function getByType(type) {
  if (type === "boccia") {
    try {
      const parantee = await calendarRepository.getByType("parantee");
      const scholen = await calendarRepository.getByType("scholen");
      const nederland = await calendarRepository.getByType("nederland");
      return parantee.concat(scholen).concat(nederland);
    } catch (error) {
      throw error;
    }
  } else {
    try {
      return await calendarRepository.getByType(type);
    } catch (error) {
      throw error;
    }
  }
}
