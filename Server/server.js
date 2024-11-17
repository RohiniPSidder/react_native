const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors()); 
app.use(bodyParser.json()); 

mongoose.connect('mongodb://localhost:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true }
});

const User = mongoose.model('users', userSchema);

app.post('/register', async (req, res) => {
  const { name, phone, email, address } = req.body;

  if (!name || !phone || !email || !address) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newUser = new User({ name, phone, email, address });
    await newUser.save();
    return res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.log(error); 
    return res.status(500).json({ message: 'Server error' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
