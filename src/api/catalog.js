import { instance } from "./instance";

export function getCategories({ cityId }) {
  const params = {
    city_id: cityId,
  };
  return instance.get('menutags', { params });
}

export function getProducts({ cityId, categorySlug }) {
  const params = {
    city_id: cityId,
  };
  return instance.get(`menutags/${categorySlug}`, { params });
}
