/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./reservations.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:reservationId/status")
    .put(controller.updateStatus)
    .all(methodNotAllowed);

router.route("/:reservationId/seat")
    .put(controller.update)
    .get(controller.read)
    .all(methodNotAllowed);

router.route("/:reservationId")
    .put(controller.updateRes)
    .get(controller.read)
    .all(methodNotAllowed);

router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

module.exports = router;
