const express = require("express");
const {
  createHub,
  deleteHub,
  getHubInfo,
  getHubs,
  resetHubToken,
} = require("../controller/hubContoller");
const router = express.Router();

router.route("/:id/create").post(createHub);
router.route("/:id").get(getHubInfo);
router.route("/:id/hubs").get(getHubs);
router.route("/:id/:hubID").delete(deleteHub);
router.route("/:id/:hubID/reset").patch(resetHubToken);

module.exports = router;
