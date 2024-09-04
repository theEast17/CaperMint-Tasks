import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  qty: { type: Number, required: true },
  color: { type: String },
  size: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  description: { type: String },
  amount: { type: Number, required: true },
  image: { type: String }
});

export default mongoose.model('Product', productSchema);
