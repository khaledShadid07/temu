import React from 'react'
import './AllProducts.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import pr1 from '../productPic/pr1.avif'
import pr2 from '../productPic/pr2.avif'
const CreateProduct = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([])
  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [price1, setPrice1] = useState(0)
  const [price2, setPrice2] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [soldItems, setSoldItems] = useState(0)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const imgMap = {
    pr1: pr1,
    pr2: pr2,
  }

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this product?');
    if (!isConfirmed) return;
    try {
      const res = await axios.delete(`${API_URL}/products/deleteProduct/${id}`, { headers: { Authorization: localStorage.getItem('token') } })
      alert('product deleted successfully')
      setProducts((prevProducts) => prevProducts.filter((item) => item._id !== id));


    }
    catch (error) {
      const message = error.response?.data?.message || error.message
      alert(message)
    }
  }


  useEffect(() => {
    const fetchProducts = async () => {

      const res = await axios.get(`${API_URL}/products/getAllproducts`)
      setProducts(res.data)

    }//function

    fetchProducts()
  }, [])

  return (
    <>
      {/* create product start */}
      <div className='text-center display-4 shadow-lg mb-4'>CreateProduct</div>

      <form onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const newProduct = { img, name, price1, price2, discount, soldItems }
          const res = await axios.post(`${API_URL}/products/createProduct`, newProduct, { headers: { Authorization: localStorage.getItem('token') } })
          alert('product added successfully ✅');
          setProducts([...products, newProduct])
          setImg(''); setName(''); setPrice1(0); setPrice2(0); setDiscount(0); setSoldItems(0);
        }
        catch (error) {
          const message = error.response?.data?.message || error.message
          alert(message)
        }
        finally { setLoading(false) }

      }} className='form-control mb-4'>
        {/*  */}
        <label className='me-2 lead fw-bold' htmlFor="">Image:</label>
        <input className='form-control' type="text" value={img} onChange={(e) => setImg(e.target.value)} />
        <br />
        <label className='me-2 lead fw-bold' htmlFor="">Name:</label>
        <input className='form-control' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label className='me-2 lead fw-bold' htmlFor="">Price1:</label>
        <input className='form-control' type="text" value={price1} onChange={(e) => setPrice1(e.target.value)} />
        <br />
        <label className='me-2 lead fw-bold' htmlFor="">Price2:</label>
        <input className='form-control' type="text" value={price2} onChange={(e) => setPrice2(e.target.value)} />
        <br />
        <label className='me-2 lead fw-bold' htmlFor="">Discount:</label>
        <input className='form-control' type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} />
        <br />
        <label className='me-2 lead fw-bold' htmlFor="">SoldItems:</label>
        <input className='form-control' type="text" value={soldItems} onChange={(e) => setSoldItems(e.target.value)} />

        <br />
        <div className='d-flex justify-content-center' style={{ width: '100vw' }}>  <button type="submit" className='btn-lg btn-primary '>{loading ? 'Adding...' : 'Add Product'}</button> </div>


      </form>
      {/*create product end */}




      {/*show products start */}

      {/*all products start  */}
      <main className='cards-container d-flex justify-content-center align-content-center  flex-wrap gap-2  p-2'>


        {/* <div className="card card1" style={{ width: "274px", height: "250px", border: 'none', cursor: 'pointer' }}>
          <img src="https://img.kwcdn.com/product/fancy/1798dce7-8ae5-4be3-ac6a-c5613180049a.jpg?imageView2/2/w/800/q/70/format/avif" className="card-img-top card-img" alt="..." />
          <div class="card-body">
            <p class="card-text card-text-1">4 قطع زجاج حماية شاشة عالي الوضوح لأيفون 11 12 13 14 15 16 17 برو 13 14 15 16 17 برو ماكس 17 إير 16e 14 15 16 بلس فيلم زجاج واقي.</p>

            <div className='d-flex align-items-start '>

              <div className='cart-icon me-1 d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="dark" className="bi bi-cart-plus " viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </div>

              <div className='discount d-flex align-items-center px-1 mt- '>
                %73-
              </div>

              <div style={{ color: 'rgb(85, 85, 85)' }} className="ms-1 ">1M+تم بيع</div>
              <del style={{ color: 'rgb(85, 85, 85)' }} className="ms-1 ">6.00</del>
              <div className='d-flex align-items center'>

                <span style={{ color: 'rgb(34, 34, 34)', fontWeight: '600', fontSize: '18px' }} class="ms-1 ">د.أ </span>
                <span style={{ color: 'rgb(34, 34, 34)', fontWeight: '600', fontSize: '18px' }} class="ms- price">1.59 </span>
              </div>


            </div>
            <article className='d-flex justify-content-center' >   <button type="submit" className='btn-sm mt-2 btn-danger '>Delete Product</button> </article>

          </div>
        </div> */}

        {products ?
          products.map((product) => (
            <div key={product._id} className="card card1" style={{ width: "274px", height: "250px", border: 'none', cursor: 'pointer' }}>
              <img src={imgMap[product.img] || product.img} className="card-img-top card-img" alt="..." />
              <div class="card-body">
                <p class="card-text card-text-1">{product.name}</p>

                <div className='d-flex align-items-start '>

                  <div className='cart-icon me-1 d-flex align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="dark" className="bi bi-cart-plus " viewBox="0 0 16 16">
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>

                  <div className='discount d-flex align-items-center px-1 mt- '>
                    %{product.discount}-
                  </div>

                  <div style={{ color: 'rgb(85, 85, 85)' }} className="ms-1 ">{product.soldItems}M+تم بيع</div>
                  <del style={{ color: 'rgb(85, 85, 85)' }} className="ms-1 ">{product.price2}</del>
                  <div className='d-flex align-items center'>

                    <span style={{ color: 'rgb(34, 34, 34)', fontWeight: '600', fontSize: '18px' }} class="ms-1 ">د.أ </span>
                    <span style={{ color: 'rgb(34, 34, 34)', fontWeight: '600', fontSize: '18px' }} class="ms- price">{product.price1} </span>
                  </div>


                </div>
                <article className='d-flex justify-content-center' >   <button onClick={() => handleDelete(product._id)} className='btn-sm mt-2 btn-danger '>Delete Product</button> </article>

              </div>
            </div>
          ))


          : <h1>LOADING...</h1>}




      </main>
      {/*all products end  */}


      {/*show products end */}
    </>
  )
}

export default CreateProduct