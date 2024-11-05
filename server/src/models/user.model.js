import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true
        },

        photo: {
            type: String,
            trim: true,
        },

        googleId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },

        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },

    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)