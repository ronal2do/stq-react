import axios from 'axios';

// axios.defaults.baseURL = process.env.API_URL;
axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getImageUrl = (image) => image ? `${process.env.IMAGE_URL}/${image}` : null;

export const login = async (email, password) => {
  const { data } = await axios.post('/login', { email, password });

  return data;
};

// Users
export const getUserList = async (id = '') => {
  const { data } = await axios.get(`/users/${id}`);

  return data;
};

export const addUser = async (payload) => {
  const { data } = await axios.post('/user', payload);

  return data;
};

export const editUser = async (id, payload) => {
  const { data } = await axios.put(`/user/${id}`, payload);

  return data;
};

// News
export const getNewsList = async (id = '') => {
  let { data } = await axios.get(`/news/${id}`);

  return data;
};

export const addNews = async (payload) => {
  const { data } = await axios.post('/news', payload);

  return data;
};

export const addNewsImage = async (payload) => {
  const { data } = await axios.put('/news/image', payload);

  return data;
};

export const editNews = async (id, payload) => {
  const { data } = await axios.put(`/news/${id}`, payload);

  return data;
};

// News
export const getPiecesList = async (id = '') => {
  let { data } = await axios.get(`/pieces/${id}`);

  return data;
};

export const addPiece = async (payload) => {
  const { data } = await axios.post('/pieces', payload);

  return data;
};

export const addPiecesImage = async (payload) => {
  const { data } = await axios.put('/pieces/image', payload);

  return data;
};

export const editPiece = async (id, payload) => {
  console.log(id);
  const { data } = await axios.put(`/pieces/${id}`, payload);

  return data;
};

// Campaigns
export const getCampaignsList = async (id = '') => {
  const { data } = await axios.get(`/campaigns/${id}`);

  return data;
};

export const addCampaign = async (payload) => {
  const { data } = await axios.post('/campaign', payload);

  return data;
};


export const addCampaignImage = async (payload) => {
  const { data } = await axios.put('/pieces/image', payload);

  return data;
};


export const editCampaign = async (id, payload) => {
  const { data } = await axios.put(`/campaign/${id}`, payload);

  return data;
};
