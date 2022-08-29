import awardRepository from "./award";

const PORT = process.env.REACT_APP_SERVER_PORT || 5001;
const API_ENDPOINT =
  process.env.REACT_APP_SERVER_URI || "http://kdt-ai5-team13.elicecoding.com";
const API_URI = `${API_ENDPOINT}:${PORT}`;

const apis = Object.freeze({
  awardRepository: awardRepository(API_URI),
});

// export default apis;

export default apis;
