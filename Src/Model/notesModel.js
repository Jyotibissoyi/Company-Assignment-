const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId

const notesSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
    },
    isDelete: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

module.exports= mongoose.model("Note", notesSchema)
