import axios from 'axios';

axios.defaults.baseURL = '65a93a5c219bfa371868d5e3.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async contacts => {
  const { data } = await axios.post('/contacts', contacts);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
