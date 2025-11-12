const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Product = require('./models/Product');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/shop-now';

async function seed() {
  await mongoose.connect(MONGO_URI);
  await User.deleteMany({});
  await Product.deleteMany({});
  const admin = await User.create({
    name: 'Admin',
    email: 'admin@shopnow.com',
    password: await bcrypt.hash('admin123', 10),
    isAdmin: true
  });
  const products = [
    { title: 'T-shirt', description: 'Cotton, blue', price: 19.99, category: 'Clothing', images: [], stock: 100 },
    { title: 'Headphones', description: 'Wireless, noise-cancelling', price: 89.99, category: 'Electronics', images: [], stock: 50 },
    { title: 'Sneakers', description: 'Running shoes', price: 59.99, category: 'Clothing', images: [], stock: 80 },
    { title: 'Smart Watch', description: 'Fitness tracker', price: 129.99, category: 'Electronics', images: [], stock: 30 }
  ];
  await Product.insertMany(products);
  console.log('Seeded admin and products');
  process.exit();
}
seed();
