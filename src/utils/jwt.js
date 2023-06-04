import jwt_decoder from "jwt-decode";

function decodeToken(token) {
  return jwt_decoder(token);
}

function isTokenValid(token) {
  const currentTime = Date.now() / 1000;
  const decoded = jwt_decoder(token);
  return decoded.exp > currentTime;
}

function toggleLocalStorage(token) {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
}

export { decodeToken, isTokenValid, toggleLocalStorage };
