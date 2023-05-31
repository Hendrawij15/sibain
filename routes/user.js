const { Router } = require("express");
const userRoute = Router();

const userController = require("../controllers/userController");

userRoute.get("/", userController.listuser);
userRoute.post("/login", userController.loginuser);
userRoute.post("/register", userController.registeruser);
userRoute.get("/account/:userId", userController.getuserbyId);
userRoute.put("/update/:userId", userController.updateuser);
userRoute.delete("/delete/:userid", userController.deleteuser);

module.exports = userRoute;
