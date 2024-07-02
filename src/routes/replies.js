const express = require("express");
const router = express.Router();

const repliesService = require("../services/reply");

router.get("/", async (req, res, next) => {
  try {
    const allReplies= await repliesService.getAll(req.body);
    res.json(allReplies);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const dbReply = await repliesService.createNew(req.body);
    res.json(dbReply);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
