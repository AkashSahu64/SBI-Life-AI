import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

const sendSMS = async (to, body) => {
  await client.messages.create({
    from: process.env.TWILIO_PHONE,
    to,
    body,
  });
};

module.exports = { sendSMS };
