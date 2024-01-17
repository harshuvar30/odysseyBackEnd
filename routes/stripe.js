
const dotenv = require("dotenv");
dotenv.config();

const KEY = "sk_test_51Nt2jrSE52eZpJbDTPhBdhbS94tvmwYPHMZKLLHrNDQaBqw8YdKEMuDcFDGBzxv5VX46mParmphRp4y2TFyk1uCv00rmtpWYed"
const stripe = require("stripe")(KEY);
const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);


router.post("/payment", async (req, res) => {
    
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 500,
       currency: "inr",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
       automatic_payment_methods: {
      enabled: true,}
      });
  
      // PaymentIntent status can be 'requires_action', 'requires_confirmation', 'succeeded', etc.
      
        res.send({
          clientSecret: paymentIntent.client_secret,
         })
        
  });

module.exports = router;