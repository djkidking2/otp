// server.mjs

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { generateOTP, verifyOTP } from './otpService.mjs'; // Assuming these functions are exported from otpService.mjs

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Endpoint to generate OTP
app.post('/generate-otp', (req, res) => {
  const { phoneNumber } = req.body;
  const otp = generateOTP(phoneNumber);
  // Send OTP to the user (e.g., via SMS)
  res.json({ success: true, message: 'OTP generated successfully', otp });
});

// Endpoint to verify OTP
app.post('/verify-otp', (req, res) => {
  const { phoneNumber, enteredOTP } = req.body;
  const isOTPValid = verifyOTP(phoneNumber, enteredOTP);
  if (isOTPValid) {
    res.json({ success: true, message: 'OTP verified successfully' });
  } else {
    res.json({ success: false, message: 'Invalid OTP' });
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});