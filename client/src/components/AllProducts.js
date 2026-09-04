import React from 'react'
import './AllProducts.css'
import Navbar from './Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// 
//products images
import pr1 from '../productPic/pr1.avif'; import pr2 from '../productPic/pr2.avif'
import pr3 from '../productPic/pr3.avif'; import pr4 from '../productPic/pr4.avif'
import pr5 from '../productPic/pr5.avif'; import pr6 from '../productPic/pr6.avif'
import pr7 from '../productPic/pr7.avif'; import pr8 from '../productPic/pr8.avif'
import pr9 from '../productPic/pr9.avif'; import pr10 from '../productPic/pr10.avif'
import pr11 from '../productPic/pr11.avif'; import pr12 from '../productPic/pr12.avif'
import pr13 from '../productPic/pr13.avif'; import pr14 from '../productPic/pr14.avif'
import pr15 from '../productPic/pr15.avif'; import pr16 from '../productPic/pr16.avif'
import pr17 from '../productPic/pr17.avif'; import pr18 from '../productPic/pr18.avif'
import pr19 from '../productPic/pr19.avif'; import pr20 from '../productPic/pr20.avif'
import pr21 from '../productPic/pr21.avif'; import pr22 from '../productPic/pr22.avif'
import pr23 from '../productPic/pr23.avif'; import pr24 from '../productPic/pr24.avif'
import pr25 from '../productPic/pr25.avif'

const imgMap = {
  pr1: pr1, pr2: pr2, pr3: pr3,
  pr4: pr4,
  pr5: pr5,
  pr6: pr6,
  pr7: pr7,
  pr8: pr8,
  pr9: pr9,
  pr10: pr10,
  pr11: pr11,
  pr12: pr12,
  pr13: pr13,
  pr14: pr14,
  pr15: pr15,
  pr16: pr16,
  pr17: pr17,
  pr18: pr18,
  pr19: pr19,
  pr20: pr20,
  pr21: pr21,
  pr22: pr22,
  pr23: pr23,
  pr24: pr24,
  pr25: pr25,
}
// 
// 


const AllProducts = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);
  const [quantity,setquantity]=useState(1)
  useEffect(() => {

    const fetchProducts = async () => {

      const res = await axios.get(`${API_URL}/products/getAllproducts`)
      setProducts(res.data)

    }//fn

    fetchProducts();

  }, [])


  const addToCart = async (productId,quantity) => {
    const token =localStorage.getItem('token')
    try {
   const res= await axios.post(`${API_URL}/cart/addToCart`,{productId,quantity},{headers:{'Authorization': `${token}` }})
      window.dispatchEvent(new Event('cartUpdated'))
      alert(res.data.message)
    }
    catch (error) {
      const message = error.response?.data?.message || error.message
      alert(message)
    }

  }

  return (
    <>



      {/*all products start  */}
      <main className='cards-container d-flex justify-content-center align-content-center  flex-wrap gap-2  p-2'>

        {products.length>0 ? products.map((product) => (
          <div key={product._id} className="card card1" style={{ width: "274px", height: "250px", border: 'none', cursor: 'pointer' }}>
            <img className='img-card' title={product.name} src={imgMap[product.img]} alt="..." />
            <div class="card-body">
              <p class="card-text card-text-1">{product.name}</p>

              <div className='d-flex align-items-start '>

                <button onClick={() => { addToCart(product._id,quantity) }} style={{ border: 'none' }}>
                  <div className='cart-icon me-1 d-flex align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="dark" className="bi bi-cart-plus " viewBox="0 0 16 16">
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>

                </button>

                {product.discount !== 0 ? <div className='discount d-flex align-items-center px-1 mt- '>
                  %{product.discount}-
                </div> : <div className=''>

                </div>}

                {product.soldItems !== 0 ? <div style={{ color: 'rgb(85, 85, 85)' }} className="ms-1 ">{product.soldItems}M+تم بيع</div> : <div style={{ color: 'rgb(85, 85, 85)', width: '15px' }} className="ms-1 "> </div>}

                <del style={{ color: 'rgb(85, 85, 85)' }} className="ms-1 ">{product.price2}</del>
                <div className='d-flex align-items center'>

                  <span style={{ color: 'rgb(34, 34, 34)', fontWeight: '600', fontSize: '18px' }} class="ms-1 ">د.أ </span>
                  <span style={{ color: 'rgb(34, 34, 34)', fontWeight: '600', fontSize: '18px' }} class="ms- price">{product.price1} </span>
                </div>


              </div>

            </div>
          </div>

        ))
          : <p style={{ fontSize: '24px', textAlign: 'center' }}>
  Loading products... <span className="spinner">🌀</span>
</p> }




      </main>
      {/*all products end  */}




    </>
  )
}

export default AllProducts