import httpService from "./httpService";
import jwtDecode from "jwt-decode";

// const { default: httpService } = require("./httpService");

const TOKEN_KEY = "token";
setTokenHeader();

function setTokenHeader() {
  httpService.setCommonHeader("x-access-token", getJWT());
}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function createUser(user) {
  return httpService.post("/user/signup", user);
}

export async function loginUser(credentials) {
  const { data } = await httpService.post("/user/signin", credentials);
  localStorage.setItem(TOKEN_KEY, data);
  setTokenHeader();
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  setTokenHeader();
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

const usersService = {
  getJWT,
  createUser,
  loginUser,
  logout,
  getUser,
};

export default usersService;
