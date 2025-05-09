import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
    orderDate: { type: Date, default: Date.now },
    payStatus: { type: String }
});


export const Payment = mongoose.model('Payment', paymentSchema);