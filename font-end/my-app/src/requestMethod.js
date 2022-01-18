import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGQ0MGFlMTZlNjJmYWNkNzMwYzJiMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjUwMDQwNSwiZXhwIjoxNjQyNzU5NjA1fQ.5L-A6UJxNNOwDi0v4SVqx9N9SFH6V_XcE3wLLdOLks0"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist: root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
