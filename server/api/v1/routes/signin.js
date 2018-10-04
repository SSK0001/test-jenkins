const router = require("express").Router()
const passport = require("../auth")
const { db } = require("../../../utils")

//----------------------------------------------------------------------------------------------------------
//Endpoints
//----------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * api/v1/signin/sign_in:
 *   post:
 *     tags:
 *       - name: sign_in
 *     description: sign_in
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/sign_in",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    sign_in().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * api/v1/signin/login:
 *   post:
 *     tags:
 *       - name: login
 *     description: login
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/login",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    login().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * sign_in():
 *
 */
sign_in = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write sign_in function */
    resolve()

    /* TODO - handle sign_in error
                        reject({message: "error"})
                    */
  })
}

/**
 * @swagger
 * login():
 *
 */
login = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write login function */
    resolve()

    /* TODO - handle login error
                        reject({message: "error"})
                    */
  })
}
