import Admin from '../models/adminModel.js';
import bcrypt from 'bcryptjs';

// Render the login page
export const renderLoginPage = (req, res) => {
  res.render('admin/login', { error: null });
};

// Handle admin login
export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (admin) {
      // Compare the password with the hashed password
      const passwordMatch = await bcrypt.compare(password, admin.password);

      if (passwordMatch) {
        // Set the session with adminId
        req.session.adminId = admin._id;

        return res.redirect('/admin/dashboard');
      }
    }
    
    res.render('admin/login', { error: 'Invalid credentials' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).render('admin/login', { error: 'Something went wrong' });
  }
};

// Render the admin dashboard (only accessible when logged in)
export const dashboard = (req, res) => {
  if (!req.session.adminId) {
    return res.redirect('/admin/login');
  }
  res.render('admin/dashboard');
};

// Render the admin registration page
export const renderRegisterPage = (req, res) => {
  res.render('admin/register');
};

// Handle admin registration
export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin with the hashed password
    const newAdmin = new Admin({
      username,
      password: hashedPassword, // Store hashed password
    });

    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully!' });
  } catch (error) {
    console.error('Error during admin registration:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};
