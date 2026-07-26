import api from "./api.js";

export const getPlats = async () => {
  const response = await api.get("/plats");
  return response.data;
};