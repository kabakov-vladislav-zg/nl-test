import { instance } from "./instance";

export function getCity({ cityId }) {
  const params = {
    id: cityId,
  };
  return instance.get('city', { params });
};

export function getCities({ term, country = 'ru' }) {
  const params = {
    term,
    country,
  };
  return instance.get('city', { params });
};
