const express = require("express");
const router = express.Router();

const {
    getEnvelopes,
    getEnvelopesById,
    addEnvelope,
    updateEnvelope,
    deleteEnvelope,
    transfer,
} = require("../controllers/envelope_controller.js");

//get all envelopes
router.get('/', getEnvelopes);

//get envelope by id
router.get('/:id', getEnvelopesById);

//posts new envelope 
router.post("/", addEnvelope);

//Put - updates and existing envelope
router.put("/:id", updateEnvelope);

router.delete("/:id", deleteEnvelope);

router.post("/:fromId/transfer/:toId", transfer);

module.exports = router;