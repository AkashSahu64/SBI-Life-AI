export async function sendNotification(req, res) {
    const { to, message } = req.body;
    // Connect to Twilio/Firebase here
    res.json({ status: "Notification sent", to, message });
  }
  