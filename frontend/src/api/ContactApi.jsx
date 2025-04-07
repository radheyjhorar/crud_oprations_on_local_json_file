import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3001"
  baseURL: "https://jsonplaceholder.typicode.com"
})

// get method 
export const getContacts = () => {
  // return api.get("/contacts")
  return api.get("/users")
}

// Delete Method 
export const deleteOneContact = (id) => {
  // return api.delete(`/contacts/${id}`)
  return api.delete(`/users/${id}`)
}

// Post Method 
export const addNewContact = (contact) => {
  // return api.post(`/contacts`, contact);
  return api.post(`/users`, contact);
}

// Put Method
export const updateContact = (id, data) => {
  // return api.put(`/contacts/${id}`, data);
  return api.put(`/users/${id}`, data);
}