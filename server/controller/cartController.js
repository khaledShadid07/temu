const Cart = require('../model/cart')
const Product = require('../model/product')
// 

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId) { return res.status(400).json({ success: false, message: 'product ID is required' }) }

  try {
    const existingProduct = await Product.findById(productId);
    if (!existingProduct) { return res.status(404).json({ success: false, message: 'product not found' }) }

    let cart = await Cart.findOne({ user: req.user })
    if (!cart) { cart = new Cart({ user: req.user, items: [] }) }

    const existingItem = cart.items.find(item => item.product.toString() === productId.toString())

    if (existingItem) { existingItem.quantity += quantity }
    else { cart.items.push({ product: productId, quantity }) }


    await cart.save()
    res.status(200).json({ success: true, message: 'Item added to cart successfully ', cart: cart })


  }
  catch (error) { return res.status(500).json({ success: false, message: 'server error', error: error.message }) }



}
// 
exports.getCart = async (req, res) => {

  try {
    const cart = await Cart.findOne({ user: req.user }).populate('items.product')
    if (!cart) { return res.status(404).json({ success: false, message: 'Cart is empty' }) }
    res.status(200).json(cart)

  }
  catch (error) { return res.status(500).json({ success: false, message: 'server error', error: error.message }) }
}
// 

exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;
  if (!productId) { return res.status(400).json({ success: false, message: 'product ID is required' }); }
  try {
    const cart = await Cart.findOne({ user: req.user })
    if (!cart) { return res.status(404).json({ success: false, message: 'Cart not found' }) }

    const item = cart.items.find(item => item.product.toString() === productId.toString())
    if (!item) { return res.status(404).json({ success: false, message: 'item not found' }) }

    if (item.quantity > 1) { item.quantity -= 1 }
    else { cart.items = cart.items.filter(item => item.product.toString() !== productId.toString()) }

    await cart.save();
    res.status(200).json({ success: true, message: 'item removed from cart successfully', cart: cart })

  }
  catch (error) { return res.status(500).json({ success: false, message: 'server error', error: error.message }) }


}
// 

exports.quantity = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user }).populate('items.product')
  if (!cart) { return res.status(404).json({ message: 'cart not found' }) }
  try {

     const quantity = await cart?.items.reduce((sum,item)=>sum+=item.quantity,0)||0
      
     res.status(200).json({ quantity:quantity, success: true, message: 'quantity is up to date' })


  }
  catch (error) { return res.status(500).json({ success: false, message: 'server error', error: error.message }) }

}
// 


exports.cartMoney = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user }).populate('items.product')
    if (!cart) { return res.status(404).json({ message: 'cart not found' }) }
    //##########################

    const total1 = await cart?.items.reduce((sum, item) => sum + item.product.price1 * item.quantity, 0) || 0;
    const total2 = await cart?.items.reduce((sum, item) => sum + item.product.price2 * item.quantity, 0) || 0;
   
    const discount = total1-total2
    const money = { total1,total2,discount}
    res.status(200).json({ money: money, message: ' totalCents, estimatedTax, totalMoney, delivery in object money' })
  }
  catch (error) { return res.status(500).json({ success: false, message: 'server error', error: error.message }) }


}

