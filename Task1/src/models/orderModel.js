import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
    }],
    billingAddress: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    status: { type: String, default: 'Pending' }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', OrderSchema);
export default Order;
