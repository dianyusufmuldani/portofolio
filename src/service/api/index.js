import axios from "axios";

const baseURL = "https://red-gifted-squid.cyclic.app/api/v1/";
const hitApi = axios.create({
  baseURL: baseURL,
});

hitApi.interceptors.request.use((request) => {
  console.log("request", request);
  return request;
});

hitApi.interceptors.response.use((response) => {
  console.log("response ", response);
  return response;
});

export const hitOtp = (requestParam) => {
  return hitApi.post("otp_verification", requestParam);
};
