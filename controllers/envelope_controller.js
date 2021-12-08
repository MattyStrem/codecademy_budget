const dbEnvelopes = require("../config/db.js");
const router = require("../routes/envelopes");

const { findById, createId } = require("../helpers/db-helpers.js");

exports. getEnvelopes = async (req, res) => {
    try {
        const envelopes = await dbEnvelopes;
        res.status(200).send(envelopes);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.getEnvelopesById = async (req, res) => {
    try {
        const { id } = req.params;
        const envelopes = await dbEnvelopes;        
        const envelope = findById(envelopes, id);

        if(!envelope) {
            return res.status(404).send({
                message: "Envelope not found",
            })
        }

        res.status(200).send(envelope);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.addEnvelope = async (req, res) => {
    try {
        console.log(req || 'req.body')

        const { title, budget } = req.body;

        const envelopes = await dbEnvelopes;
        const newId = createId(envelopes);        

        const newEnvelope = {
            id: newId,
            title,
            budget,
        };

        envelopes.push(newEnvelope);
        res.status(201).send(newEnvelope);
        
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateEnvelope = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send(error)
        
    }
}