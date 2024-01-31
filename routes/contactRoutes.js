const express = require("express");
const validateTokenHandler=require("../middlware/validateTokenHandler")
const router = express.Router();
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
} = require("../controllers/contactControllers");

router.use(validateTokenHandler);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;
