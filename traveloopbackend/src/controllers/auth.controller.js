const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');

exports.register = async (req, res) => {
  try {
    const { 
      firstName, first_name, 
      lastName, last_name, lastname,
      email, 
      password_hash, 
      phoneNumber, phonenumber, phone,
      language_preference, language_prefrence,
      photo, profile_photo,
      city, 
      country, counrtry,
      message, messahe,
      name
    } = req.body;
    
    if (!email || !password_hash) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ error: 'Email already exists' });

    const hashed_password = await bcrypt.hash(password_hash, 10);

    const finalFirstName = firstName || first_name || '';
    const finalLastName = lastName || last_name || lastname || '';
    const finalName = name || `${finalFirstName} ${finalLastName}`.trim();
    const finalPhone = phoneNumber || phonenumber || phone;
    const finalCountry = country || counrtry;
    const finalMessage = message || messahe;
    const finalLanguage = language_preference || language_prefrence;
    const finalPhoto = photo || profile_photo;

    const user = await prisma.user.create({
      data: { 
        firstName: finalFirstName,
        lastName: finalLastName,
        name: finalName,
        email, 
        password_hash: hashed_password, 
        phoneNumber: finalPhone,
        profile_photo: finalPhoto,
        city,
        country: finalCountry,
        message: finalMessage,
        language_preference: finalLanguage 
      }
    });

    res.status(201).json({ message: 'User registered successfully', userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
