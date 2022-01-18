const router = require("express").Router();
const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAnAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    Cart;
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});
//UPDATE
router.put("/:id", verifyTokenAnAuthorization, async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (error) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAnAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (error) {
    res.status(500).json(err);
  }
});
//GET USER CARD
router.get("/find/:userId", verifyTokenAnAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findById({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(err);
  }
});
//GET ALL PRODUCTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
      const carts = await Cart.find(); 
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(err);
  }
});
module.exports = router;
