import axios from 'axios';

export const FETCH_JOBS = 'FETCH_JOBS';
export const CREATE_JOB = 'CREATE_JOB';
export const FETCH_JOB = 'FETCH_JOB';
export const SEND_CONTACT = 'SEND_CONTACT';

const API = process.env.API || 'http://localhost:3005/api';

export function fetchJobs() {
  const request = axios.get(`${API}/jobs`);

  return {
    type: FETCH_JOBS,
    payload: request
  };
}

export function createJob(props) {
  const request = axios.post(`${API}/jobs`, props);

  return {
    type: CREATE_JOB,
    payload: request
  };
}

export function fetchJob(id) {
  const request = axios.get(`${API}/jobs/${id}`);

  return {
    type: FETCH_JOB,
    payload: request
  };
}

export function createContact(props) {
  const request = axios.post(`${API}/contact`, props);

  return {
    type: SEND_CONTACT,
    payload: request
  };
}
