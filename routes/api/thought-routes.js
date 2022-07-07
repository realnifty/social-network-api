const router = require("express").Router();

const {
  findAllThoughts,
  findThoughtById,
  createAThought,
  updateAThought,
  addAReaction,
  deleteAThought,
  deleteAReaction,
} = require("../../controllers/thought-controller");

router
  .route("/")
  .get(findAllThoughts);

router
  .route("/:id")
  .get(findThoughtById)
  .put(updateAThought)
  .delete(deleteAThought);

router
  .route("/:userId")
  .post(createAThought);

router
  .route("/:thoughtId/reactions")
  .post(addAReaction);

router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(deleteAReaction);

module.exports = router;