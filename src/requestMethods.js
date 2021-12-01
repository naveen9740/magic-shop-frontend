import axios from "axios";

const baseUrl = `http://localhost:5000/api/v1`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTRjMjBhOTBlY2U1M2JmMmI5ZGRmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODMzMTc3NSwiZXhwIjoxNjM4NDE4MTc1fQ.LEP6AcYBLOODF34woHbnxWIthOwYOYZ-MT9zcWkCT7k`;

export const publicRequest = axios.create({
  baseURL: baseUrl,
});
export const userRequest = axios.create({
  baseURL: baseUrl,
  header: { token: `Bearer ${token}` },
});
