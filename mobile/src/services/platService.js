import api from "./api.js";



class PlatService {
  // GET /api/plats
  async getPlats() {
    const response = await api.get("/plats");
    return response.data;
  }

  // GET /api/plats/:id
  async getPlatById(id) {
    const response = await api.get(`/plats/${id}`);
    return response.data;
  }

  // POST /api/plats
  async createPlat(data) {
    const response = await api.post("/plats", data);
    return response.data;
  }

  // PUT /api/plats/:id
  async updatePlat(id, data) {
    const response = await api.put(`/plats/${id}`, data);
    return response.data;
  }

  // DELETE /api/plats/:id
  async deletePlat(id) {
    const response = await api.delete(`/plats/${id}`);
    return response.data;
  }
}

export default new PlatService();