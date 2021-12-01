import axios from "axios";

const baseUrl = `http://localhost:5000/api/v1`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTRjMjBhOTBlY2U1M2JmMmI5ZGRmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODM4OTc5MSwiZXhwIjoxNjM4NDc2MTkxfQ.kGIh9P8gMaQcOwprXqJg8D185yZOc77WmXk0pi9v49E`;

export const publicRequest = axios.create({
  baseURL: baseUrl,
});
export const userRequest = axios.create({
  baseURL: baseUrl,
  header: { token: `Bearer ${token}` },
});
