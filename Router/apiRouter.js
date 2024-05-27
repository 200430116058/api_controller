const router = require("express").Router();

const apiController = require("../Controller/apiController");

router.post("/post" ,  apiController.PostData);
router.get("/get" ,  apiController.getData);


module.exports =  router;