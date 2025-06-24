import mongoose from "mongooes";

const reviewSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.types.ObjectId,
            ref: "Tour",
        },
        username: {
            type: String,
            required: true,
        },
        reviewText: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
            default: 0,
        },
    },

    {timestamps: true}
);

export default mongoose.model("Review", reviewSchema);