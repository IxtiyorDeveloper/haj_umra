import mongoose from 'mongoose';

const {Schema} = mongoose;

export const orderSchema = new Schema({
    fromLocation: String,
    toLocation: String,
    flightDate: Date,
    passengers: {adults: Number, child: Number},
    typeTour: {
        type: String,
        enum: ["STANDART", "COMFORT", "LUX"]
    },
    paymentType: {
        type: String,
        enum: ["PAYME", "CLICK", "APELSIN", "UZCARD", "HUMO"]
    },
    cardNumber: {
        type: String,
        length: 16
    },
    cardName: String,
    cardExpire: String,
    cvv: String,
    user: [{
        firstName: String,
        lastName: String,
        date: Date,
        email: String,
        phoneNumber: String,
        secondaryNumber: String,
        file: String
    }]
});

const OrderModel = mongoose.model('Order', orderSchema);
export default OrderModel