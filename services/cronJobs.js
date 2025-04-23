import cron from "node-cron";
import { sendSMS } from "./twilio.js";

// Schedule a daily 10AM reminder job
cron.schedule("0 10 * * *", () => {
  console.log("Running daily policy renewal reminder...");
  // Example: sendSMS('+911234567890', 'Your policy is due for renewal.')
});
