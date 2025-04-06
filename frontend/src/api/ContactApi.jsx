import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
})

// get method 
export const getContacts = () => {
  return api.get("/contacts")
}

// Delete Method 
export const deleteOneContact = (id) => {
  return api.delete(`/contacts/${id}`)
}

// Post Method 
export const addNewContact = (contact) => {
  return api.post(`/contacts`, contact);
}

// Put Method
export const updateContact = (id, data) => {
  return api.put(`/contacts/${id}`, data);
}