/**
 * Get email
 * @returns {Email}
 */
function get(req, res) {
  return res.json(req.email);
}

/**
 * Get email list.
 * @property {number} req.query.skip - Number of emails to be skipped.
 * @property {number} req.query.limit - Limit number of emails to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  res.json({
    email: "test@test.com"
  });
}

module.exports = { get, list };
