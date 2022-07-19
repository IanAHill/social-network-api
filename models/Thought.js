const { Schema, model, Types } = require('mongoose');
const Reaction = require("./Reaction");

const reactionSchema = new Schema(
    {
        reactionId: { type: Schema.Types.ObjectId, default: () => Types.ObjectId()},
        reactionBody: { type: String, required: true, minLength: 1, maxLength: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, },
    },

    {
 
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

// Schema to create User model
const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, minLength: 1, maxLength: 280, },
        createdAt: { type: Date, default: Date.now, get: getDate },
        username: { type: String, required: true },
        reactions: [reactionSchema]
    },

    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            getters: true
            
        },
        id: false,
    }
);


function getDate(createdAt) {
    // format timestamp here
    return createdAt;
}


thoughtSchema
    .virtual("reactionCount")
    .get(function () {
        return this.reactions.length;
    });




const Thought = model('thought', thoughtSchema);

module.exports = Thought;