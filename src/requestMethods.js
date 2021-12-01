import axios from "axios";
import { useSelector } from "react-redux";

const baseUrl = `http://localhost:5000/api/v1`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTRjMjBhOTBlY2U1M2JmMmI5ZGRmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODM3OTkxNywiZXhwIjoxNjM4NDY2MzE3fQ.zOC62D99dz2naEnmtDsl234EOaFtbsOhQWsjKKEqD4w`;

export const publicRequest = axios.create({
  baseURL: baseUrl,
});
export const userRequest = axios.create({
  baseURL: baseUrl,
  header: { token: `Bearer ${token}` },
});
