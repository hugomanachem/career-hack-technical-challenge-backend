const phones = require("../db/phones.json");
const router = require("express").Router();

router.get("/phones", (req, res, next) => {
  res.json(phones);
});

router.get("/phones/:phoneId", (req, res, next) => {
    const {phoneId} = req.params;
    const phoneDetails = phones.find((phone) => phone.id == phoneId)
    res.json(phoneDetails);
  });

module.exports = router;
