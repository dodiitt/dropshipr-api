const express = require("express");

const router = express.Router(); // eslint-disable-line new-cap

/** GET /healthz - Check service health */
router.get("/healthz", (req, res) => res.send("OK"));

module.exports = router;
