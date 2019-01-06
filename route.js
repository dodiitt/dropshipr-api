const express = require("express");
const emailRoutes = require("./services/email/email.route");

const router = express.Router(); // eslint-disable-line new-cap

/** GET /healthz - Check service health */
router.get("/healthz", (req, res) =>
  res.json({
    code: res.statusCode,
    message: "Healthy"
  })
);

router.use("/emails", emailRoutes);

module.exports = router;
