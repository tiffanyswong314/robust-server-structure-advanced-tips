const router = require("express").Router({ mergeParams: true });
const controller = require("./ratings.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router
    .route("/:ratingId")
    .get(controller.read)
    .all(methodNotAllowed);

module.exports = router;