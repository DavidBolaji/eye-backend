const express = require("express");
const router = new express.Router();
const userController = require("../controllers/userController");

// await cloudinary.uploader.upload(str, {})
router.get("/user", (req, res) => {
  res.send({ message: "user route welcome" });
});

router.get("/user/all", userController.getUsers);
router.get("/user/stageOne/:id", userController.stageOne);
router.get("/user/stageTwo/:id", userController.stageTwo);
router.get("/user/stageThree/:id", userController.stageThree);
router.get("/user/stageFour/:id", userController.stageFour);
router.post("/user/create", userController.create);
router.post("/user/update", userController.update);
router.post("/user/delete/:id", userController.delete);

module.exports = router;
