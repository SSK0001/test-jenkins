/*
                This will control the networking for the create account network requests
            */
import axios from "axios"
import { client, url, setToken } from "../utils/axios.config.js"

export const POSTSIGNUP = "POSTSIGNUP"

export function postSignup() {
  return axios
    .post(url + "/user/postSignup")
    .then(res => {
      return {
        type: POSTSIGNUP,
        payload: res.data
      }
    })
    .catch(err => {
      if (err.response.status === 401) {
        //handle unauthorized access
      }
    })
}
