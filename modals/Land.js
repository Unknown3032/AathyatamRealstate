import mongoose, { Schema } from "mongoose";

const landSchema = mongoose.Schema({

    land_id: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true,
    },
    des: {
        type: String,
        maxlength: 200,
        required: true
    },
    content: {
        type: [],
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    // author: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'users'
    // },

    total_reads: {
        type: Number,
        default: 0
    },

},
    {
        timestamps: {
            createdAt: 'publishedAt'
        }

    })

mongoose.models = {};
// ProductModel = mongoose.model("Product", ProductSchema);

// module.exports = ProductModel;


export default mongoose.model("land", landSchema);