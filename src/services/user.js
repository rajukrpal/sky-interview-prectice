import apiClient from "../lib/apiClient"
import { API_ENDPOINTS } from "../lib/endpoints"

export const UserService = {
  createUser(data) {
    return apiClient.post(API_ENDPOINTS.USER.CREATE, data)
  },

  getAllUserList() {
    return apiClient.get(API_ENDPOINTS.USER.LIST)
  },

  getUserById(id) {
    return apiClient.get(API_ENDPOINTS.USER.DETAIL(id))
  },

  updateUser(id, data) {
    return apiClient.put(API_ENDPOINTS.USER.EDIT(id), data)
  },

  deleteUser(id) {
    return apiClient.delete(API_ENDPOINTS.USER.DELETE(id))
  },
}
