import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema(
    {
        shippingInfo: {
            hNO: {
                type: String,
                required: true,
                trim: true,
                index: true,
            },

            city: {
                type: String,
                required: true,
                trim: true,
                index: true,
            },

            state: {
                type: String,
                required: true,
                trim: true,
                index: true,
            },

            country: {
                type: String,
                required: true,
                trim: true,
                index: true,
            },

            pinCode: {
                type: Number,
                required: true,
                index: true,
            },

            phoneNumber: {
                type: Number,
                required: true,
                index: true,
            },
        },

        orderItems: [
            {
                chickenRamen: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
            },

            {
                fishRamen: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
            },

            {
                mushroomRamen: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
            },

            {
                redHotRamen: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
            },

            {
                eggRamen: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                }
            },

        ]
    }, 
    {
        timestamps: true,
    }
)

export const Order = mongoose.model("Order", orderSchema)