const router = require("express").Router();
const { register, login, google } = require("../controllers/authController");

//register user
router.post("/register", register);

//login user
router.post("/login", login);

// //google
// router.post("/google", google);

module.exports = router;
