export const API_ENDPOINTS = {
  USER: {
    CREATE: "/users",
    LIST: "/users",
    DETAIL: (id) => `/users/${id}`,
    EDIT: (id) => `/users/${id}`,
    DELETE: (id) => `/users/${id}`,
  },
}
