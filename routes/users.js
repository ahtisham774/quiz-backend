var express = require('express');
var router = express.Router();
var studentController = require("../controllers/userController")
/* GET users listing. */
router.post('/register', studentController.registerStudent);
router.post('/login', studentController.loginStudent);
router.post('/user/me', studentController.currentUser);
router.get("/verify/:token", studentController.verifyStudent);
router.post("/verify/forgot-password", studentController.forgotPassword);
router.post("/verify/reset-password/:token", studentController.resetPassword);
router.post('/verify/create-token', studentController.generateVerificationToken)
router.get("/students/:id/toggle-status", studentController.toggleAppearance);
router.delete("/students/:id/delete", studentController.deleteStudent);
router.get("/students/all", studentController.getAllStudents);

module.exports = router;
