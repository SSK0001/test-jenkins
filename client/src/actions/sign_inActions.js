/*
                This will control the networking for the sign in network requests
            */
import axios from "axios"
import { client, url, setToken } from "../utils/axios.config.js"

export const POSTLOGIN = "POSTLOGIN"

export function postLogin() {
  return axios
    .post(url + "/user/postLogin")
    .then(res => {
      return {
        type: POSTLOGIN,
        payload: res.data
      }
    })
    .catch(err => {
      if (err.response.status === 401) {
        //handle unauthorized access
      }
    })
}
