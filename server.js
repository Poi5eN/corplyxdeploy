const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;
dotenv.config();

// Enable cross-origin resource sharing
app.use(cors());

// Parse incoming requests with JSON payloads 
app.use(bodyParser.json());

// calling the frontend in backend
app.use(express.static(path.join(__dirname, "./frontend/build")))
app.get('*', function (_, res){
  res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err){ 
    res.status(500).send(err);
  })
})

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.7mjfs7y.mongodb.net/contact_form_db`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema and model for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  message: String,
});

const ContactModel = mongoose.model('Contact', contactSchema);

// Handle form submission
app.post('/api/contact', async (req, res) => {
  const { name, mobile, email, message } = req.body;

  // Create a new contact instance
  const newContact = new ContactModel({ name, mobile, email, message });

  try {
    // Save the contact to the database
    await newContact.save();
    res.status(200).json({ message: 'Contact saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while saving the contact.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
