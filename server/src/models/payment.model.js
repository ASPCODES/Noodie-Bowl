import mongoose, {Schema} from "mongoose";

const paymentSchema  = new Schema(
    {
        razorpay_order_id: {
            type: String,
            required: true,
            index: true,
        },

        razorpay_payment_id: {
            type: String,
            required: true,
            index: true,
        },

        razorpay_signature: {
            type: String,
            required: true,
            index: true,
        },
    }, {
        timestamps: true,
    }
)

export const Payment  = mongoose.model("Payment", paymentSchema)