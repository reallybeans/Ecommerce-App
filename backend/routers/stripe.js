const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);
router.post("/payments", async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeError, stripeRes) => {
      if (stripeError) {
        res.status(500).json(stringError);
      } else {
        res.status(200).json(stringRes);
      }
    }
  );
});
module.exports = router();
