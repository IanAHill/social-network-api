const { Schema, model, Types } = require('mongoose');

// Schema to create User model
const reactionSchema = new Schema(
    {
        reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId()},
        reactionBody: { type: String, required: true, minLength: 1, maxLength: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, get: getDate },
    },

    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);



function getDate() {
    return date;
}



module.exports = reactionSchema;