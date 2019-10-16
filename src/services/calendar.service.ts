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

export async function updateCalendar(id, body) {
  try {
    return await calendarRepository.updateCalendar(id, body);
  } catch (error) {
    throw error;
  }
}

export async function addCalendar(body) {
  try {
    return await calendarRepository.addCalendar(body);
  } catch (error) {
    throw error;
  }
}

export async function deleteCalendar(id) {
  try {
    return await calendarRepository.deleteCalendar(id);
  } catch (error) {
    throw error;
  }
}
