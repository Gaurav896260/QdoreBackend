import express from "express";
import {
  getCart,
  addToCart,
  UpdateItem,
} from "../controllers/cartController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import Cart from "../models/Cart.js";

const router = express.Router();

router.get("/cart/:userId", authenticate, getCart);
router.post("/cart", authenticate, addToCart);
router.patch("/cart/:userId/update/:productId", authenticate, UpdateItem);
// Clear cart
router.delete("/cart/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find the cart for the user
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Clear the products array
    cart.products = [];

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
