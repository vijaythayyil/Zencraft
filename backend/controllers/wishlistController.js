import asyncHandler from "../middleware/asyncHandler.js";
import Wishlist from "../models/wishlistModel.js";
import Product from "../models/productModel.js";

// @desc    Add product to wishlist
// @route   POST /api/wishlist
// @access  Private
const addToWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  let wishlist = await Wishlist.findOne({ user: req.user._id });

  if (!wishlist) {
    wishlist = new Wishlist({
      user: req.user._id,
      products: [],
    });
  }

  if (wishlist.products.includes(productId)) {
    res.status(400);
    throw new Error("Product already in wishlist");
  }

  wishlist.products.push(productId);
  await wishlist.save();

  res.status(201).json({ message: "Product added to wishlist" });
});

// @desc    Remove product from wishlist
// @route   DELETE /api/wishlist/:productId
// @access  Private
const removeFromWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const wishlist = await Wishlist.findOne({ user: req.user._id });

  if (!wishlist) {
    res.status(404);
    throw new Error("Wishlist not found");
  }

  wishlist.products = wishlist.products.filter(
    (id) => id.toString() !== productId
  );

  await wishlist.save();

  res.status(200).json({ message: "Product removed from wishlist" });
});

export { addToWishlist, removeFromWishlist };
