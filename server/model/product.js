const mongoose =require('mongoose')

const productSchema = new mongoose.Schema({

img:{type:String,trim: true,required:[true,'Product image is required']},
name:{type:String,required:[true,'Product name is required'],trim: true,},
price1:{type:Number,required:[true, 'Product original price is required'],min: [0, 'Price cannot be negative'] },
price2:{type:Number,required:[true, 'Product sales price is required'] ,min: [0, 'Price cannot be negative']  },
discount:{type:Number,default: 0, min: 0, max: 100},
soldItems:{type:Number,default: 0, min: 0},


},{timestamps: true })

module.exports=mongoose.model('product',productSchema);