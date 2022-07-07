const router = require("express").Router();

const {
  findAllUsers,
  findUserById,
  createNewUser,
  updateExistingUser,
  addAFriend,
  deleteExistingUser,
  deleteAFriend,
} = require("../../controllers/user-controller");

router.route("/").get(findAllUsers).post(createNewUser);

router.route("/:id").get(findUserById).put(updateExistingUser).delete(deleteExistingUser);

router.route("/:id/friends/:friendId").put(addAFriend).delete(deleteAFriend);

module.exports = router;