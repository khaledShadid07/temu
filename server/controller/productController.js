const Product =require('../model/product');


exports.getAllproducts = async(req,res)=>{

try{
const products = await Product.find();
res.status(200).json(products);

}
catch (error) { res.status.json({success:false ,message: error.message }) }

}

//  

exports.createProduct = async(req,res)=>{
const {img,name,price1,price2,discount,soldItems} = req.body;
if(!img||!name||!price1||!price2){return res.status(400).json({success:false,message:'product image,name,price1 and price2 is required'})}

try{
const existingProduct = await Product.findOne({name}).exec()
if(existingProduct){return res.status(400).json({success:false,message:'product already exist'})}

const newProduct = new Product({img,name,price1,price2,discount,soldItems})
await newProduct.save()
return res.status(201).json({message:'product added successfully',product:newProduct})

}
catch (error) {return res.status(500).json({success:false ,message: error.message }) }
}

// 

exports.deleteProduct = async(req,res)=>{
const {id} = req.params;
if(!id){return res.status(400).json({message:'product Id is required'})}

try{
const deleteProduct = await Product.findByIdAndDelete(id);
if (!deleteProduct) {return res.status(404).json({success:false ,message: 'product not found' }) }
res.status(200).json({success:true,message:'product deleted successfully'})
  
}
catch(error){res.status(500).json({success:false,message:error.message})}
}

// 