// otpService.mjs

const otpStorage = {}; // Store generated OTPs (in-memory storage, not suitable for production)

export function generateOTP(phoneNumber) {
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  otpStorage[phoneNumber] = otp;
  return otp;
}

export function verifyOTP(phoneNumber, enteredOTP) {
  const storedOTP = otpStorage[phoneNumber];
  return storedOTP === enteredOTP;
}

