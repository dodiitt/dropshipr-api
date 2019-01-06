const express = require("express");
const emailCtrl = require("./email.controller");
const router = express.Router(); // eslint-disable-line new-cap

router
  .route("/")
  /** GET /api/users - Get list of emails */
  .get(emailCtrl.list);

router
  .route("/:emaild")
  /** GET /api/emails/:emailId - Get email */
  .get(emailCtrl.get);

module.exports = router;
