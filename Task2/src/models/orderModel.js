import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    qty: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  orderStatus: { type: String, default: 'Pending' },
  billingAddress: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
