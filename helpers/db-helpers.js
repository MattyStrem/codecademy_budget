module.exports = {

    createId(data) {
        const latestRecord = data[data.length - 1];
        const newId = latestRecord.id + 1;

        if (newId === NaN || newId < 0 || newId === undefined) {
            console.error("invalid Id")
        };

        return newId;
    },

    findById(data, recordId) {
        const record = data.find((item) => item.id === parseInt(recordId));

        if (!record) {
            console.log("record not found");
        }

        return record;
    },

    deleteById(data, recordId) {
        const index = data.findIndex(function (item) {
            return item.id === parseInt(recordId)
        })

        if (index == -1 ) {
            console.log("invailid Index");
        }

        data.splice(index, 1);
        return data;
    },

}
