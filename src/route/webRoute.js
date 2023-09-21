import express from "express";
import getHomePage from "../controllers/HomeController";
import getAboutPage from "../controllers/AboutController";
import {
  createNewUser,
  detailUser,
  listUser,
  login,
} from "../controllers/UserController";
const router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);
  router.get("/about", getAboutPage);
  router.get("/create-new-user", createNewUser);
  router.get("/login", login);
  router.get("/list-user/:page?", listUser);
  router.get("/detail-user/:username?", detailUser);
  router.get((req, res) => {
    res.send("Lỗi 404, không tìm thấy trang");
  });

  return app.use("/", router);
};

export default initWebRoute;
