import React from 'react'
import { Link } from 'react-router-dom';
import lock from '../productPic/lock.avif'
import side_cart_btn from '../productPic/side-cart-btn.avif'
import gurantee from '../productPic/gurantee.webp'
import nike from '../productPic/nike.avif'
import './Cart.css'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'

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



const Cart = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [cart, setCart] = useState()
  const [quantity, setQuantity] = useState()
  const [cartMoney, setCartMoney] = useState({
    total1: 0,
    total2: 0,
    discount: 0
  });

  useEffect(() => {
    const token = localStorage.getItem('token')
    const fetch = async () => {
      const res1 = await axios.get(`${API_URL}/cart/getCart`, { headers: { 'Authorization': `${token}` } })
      setCart(res1.data.items)

      const res2 = await axios.get(`${API_URL}/cart/cartMoney`, { headers: { 'Authorization': `${token}` } })
      setCartMoney(res2.data.money)

      const res3 = await axios.get(`${API_URL}/cart/quantity`, { headers: { "Authorization": token } })
      setQuantity(res3.data.quantity || 0)
    } //

    fetch()
    const handelCartUpdate = () => { fetch() }

    window.addEventListener('cartUpdated', handelCartUpdate)

    return () => { window.removeEventListener('cartUpdated', handelCartUpdate); };

  }, [])



  const removeCart = async (productId) => {
    const fetchCart = async () => {
      const res1 = await axios.get(`${API_URL}/cart/getCart`, { headers: { 'Authorization': `${localStorage.getItem('token')}` } })
      setCart(res1.data.items)
    }

    const res2 = await axios.delete(`${API_URL}/cart/removeFromCart/${productId}`, { headers: { 'Authorization': `${localStorage.getItem('token')}` } }
    ).then(window.dispatchEvent(new Event('cartUpdated')), fetchCart()).catch(err => alert(err))

    alert(res2.data.message)




  }

  return (
    <>
      {/*upper nav start  */}
      <nav className='nav-1st d-flex align-items-center justify-content-between align-content-center  flex-wrap p-4'>

        <div className='nav-1 d-flex  align-items-center align-content-center justify-content-center'>
          <div className='fw-bold nav-1st-div me-2'>Temu تنزيل تطبيق</div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="30px" height="30px" fill="currentColor" color="#FAF2A4" class="icon-260pq" aria-hidden="true"><path d="M727 73.2c50.9 0 92.2 41.3 92.2 92.2l0 693.4c0 50.9-41.3 92.2-92.2 92.1l-430 0c-50.9 0-92.2-41.3-92.2-92.1l0-693.4c0-50.9 41.3-92.2 92.2-92.2z m-212.6 673.5c-28.7 0-51.9 23.2-51.9 51.8l0 2.7c0 28.7 23.2 51.9 51.9 51.9 28.7 0 51.9-23.2 51.9-51.9l0-2.7c0-28.7-23.2-51.9-51.9-51.8z m75.2-585.2l-153.2 0c-19.5 0-35.4 15.8-35.3 35.4 0 19.5 15.8 35.4 35.3 35.4l153.2 0c19.5 0 35.4-15.8 35.4-35.4 0-19.5-15.8-35.4-35.4-35.4z"></path></svg>
        </div>
        {/*  */}

        <div className='nav-2 d-flex align-items-center align-content-center justify-content-center px-4  p-2'>
          <article className='me-2'>
            <div className='fw-bold nav-1st-div me-2 text-end'>ضمان التوصيل </div>
            <div className='fw-bold nav-1st-div me-2 text-end'>يمكنك استرداد الاموال في حال وجود أي مشاكل</div>
          </article>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="30px" height="30px" fill="currentColor" color="#FAF2A4" class="icon-260pq" aria-hidden="true"><path d="M297.4 667.3c-59.2 0-107.2 45.8-107.2 102.3 0 56.5 48 102.2 107.2 102.2 59.2 0 107.2-45.8 107.2-102.2 0-56.5-48-102.2-107.2-102.3z m428.9 0c-59.2 0-107.2 45.8-107.2 102.3 0 56.5 48 102.2 107.2 102.2 59.2 0 107.2-45.8 107.2-102.2 0-56.5-48-102.2-107.2-102.3z m-415.4-488.4c-42.8 0-77.5 34.7-77.5 77.5l0 76-118 47.1c-29.5 11.8-48.8 40.3-48.8 72l0 187.6c0 42.8 34.7 77.5 77.5 77.6 25.8-56.4 84.7-95.9 153.3-96 73.2 0 135.4 45 157.9 107.6l113.1 0c22.4-62.6 84.6-107.6 157.9-107.6 73.2 0 135.3 44.9 157.8 107.4l-4.2 0.2c42.8 0 77.5-34.7 77.5-77.5l0-394.4c0-42.8-34.7-77.5-77.5-77.5l-569 0z m426.2 144.9c14.8 14.3 14.5 37.3-0.5 51.4l-192 179.8c-14.4 13.5-37.3 13.9-52.3 1.1l-110.4-95.1c-15.6-13.5-16.9-36.4-2.7-51.3 14.1-14.9 38.2-16.1 53.8-2.6l83.8 72 166.4-155.8c15-14.1 39.2-13.9 53.9 0.5z"></path></svg>
        </div>
        {/*  */}
        <div className='nav-3 d-flex align-items-center align-content-center justify-content-center  p-2'>
          <article className='me-2'>
            <div style={{ lineHeight: '25px', color: '#ADFFA2' }} className='fw-bold nav-1st-div me-2 text-end'>  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="15px" height="15px" fill="currentColor" color="#ADFFA2" className="suffixIcon-NKMsK me-1" aria-hidden="true"><path d="M699.8 111.7c-19.8-19.8-50.7-21.8-72.6-5.9l-7 5.9-362 362.1c-19.8 19.8-21.8 50.7-6 72.6l6 7 362 362.1c22 22 57.7 22 79.6 0 19.8-19.8 21.8-50.7 6-72.7l-6-7-322.1-322.2 322.1-322.2c19.8-19.8 21.8-50.7 6-72.7l-6-7z"></path></svg>
              شحن مجاني </div>
            <div style={{ color: '#ADFFA2' }} className='fw-bold nav-1st-div me-2'> عرض خاص لك</div>
          </article>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="30px" height="30px" fill="currentColor" color="#ADFFA2" class="icon-260pq" aria-hidden="true"><path d="M256.9 693.8c-50.7 0-91.8 40.5-91.8 90.4 0 50 41.1 90.5 91.8 90.5 50.7 0 91.8-40.5 91.8-90.5 0-50-41.1-90.5-91.8-90.4z m433.7 0c-50.7 0-91.8 40.5-91.6 90.4 0 50 41.1 90.5 91.6 90.5 50.7 0 91.8-40.5 91.8-90.5 0-50-41.1-90.5-91.8-90.4z m-279.1-523.1c-54.9-0.5-100 42.9-100.7 97l0 0.6 0 10.9-63.1 0.1c-109.3 0.2-198 87.4-198.7 195.2l-1.2 223.5c-0.2 36.3 29.5 66 66.3 66.2l4.9-0.1c8.6-67.6 67.1-119.8 137.9-119.8 69 0 126.1 49.4 137.1 114.5l159.7 1.6c11.4-64.4 68.4-113.4 136.9-113.3 68.4 0 125.3 48.7 137 112.8 26.8-8.3 46.3-32.9 46.6-62l0-156.3 65.1 0.4c25.9 0.2 47.1-20.5 47.2-46.1 0-26-21.2-46.9-47.3-46.9l-65 0.1-4.3-0.1-156.2-0.3c-39.8-0.1-72-31.9-72-71.3 0.1-39.2 32.4-70.9 72.2-70.8l156.1 0.3c1.4 0 2.8 0 4.2 0.1l0-66.4c0-36.1-29.5-65.5-66-65.8l-396.7-4.1 0 0z m-175.2 188.4l68.2 0.7 0.6 131.6-184.4-0.7 0-19.4 0-0.4c0.6-62.4 52.3-112.4 115.6-111.8l0 0z m477.5-14.2c-16.7 0-30.7 12.2-32.8 28.2l-0.3 4.4c0 18.1 14.9 32.8 33.1 32.8l156.1 0.4c1.5 0 2.9-0.1 4.4-0.3l0-0.1c16.3-2.1 28.8-15.8 28.8-32.2 0-18.1-14.9-32.8-33.2-32.8l-156.1-0.4 0 0z"></path></svg>
        </div>
        {/*  */}

      </nav>
      {/*upper nav end  */}


      {/*cart title start*/}
      <div className='cart-title d-flex gap-1 align-items-center justify-content-end '>

        <p className='mt-3' style={{ color: 'rgb(12, 171, 0)', fontFamily: 'Noto Sans Arabic', fontWeight: '600' }}>جميع البيانات مؤمنة</p>
        <img style={{ width: '15px', height: '15px' }} src={lock} alt="" />
        <Link to='/'>  <svg className="ms-2 iconmain-NcPVf responsive-1" style={{ width: '60px', height: '60px', cursor: 'pointer' }} alt="temu" aria-label="temu" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="1em" height="1em" fill="#fb7701" stroke="none" title="temu"><path d="M741.4 102.4c99.5 0 180.2 80.7 180.2 180.2l0 458.8c0 99.5-80.7 180.2-180.2 180.2l-458.8 0c-99.5 0-180.2-80.7-180.2-180.2l0-458.8c0-99.5 80.7-180.2 180.2-180.2l458.8 0z m63.1 423.8c-9.6 0-17.4 8-17.4 17.8l0 74.6c0 23.4-12.9 35.5-34.1 35.5-21.2 0-34.1-12.5-34.2-36.6l0-73.5c0-9.8-7.8-17.8-17.4-17.8-9.6 0-17.4 8-17.4 17.8l0 74.4c0 43.5 26 65.7 68.5 65.6 42.5 0 69.4-22 69.4-66.7l0-73.3c0-9.8-7.8-17.8-17.4-17.8z m-269.5 0l-10.8 0c-9.6 0-17.4 8-17.4 17.8l0 122.2c0 9.8 7.8 17.8 17.4 17.8 9.6 0 17.4-8 17.4-17.8l0-80.2 29.3 42.4c6.1 8.8 18.8 8.8 24.9 0l29.4-42.4 0 80.2c0 9.8 7.8 17.8 17.4 17.8 9.6 0 17.4-8 17.4-17.8l0-122.2c0-9.8-7.8-17.8-17.4-17.8l-10.8 0c-4.2 0-8.1 2.1-10.4 5.5l-38 58.5-38-58.5c-2.4-3.5-6.3-5.5-10.4-5.5z m-219.3 0l-101.7 0c-9.6 0-17.4 8-17.4 17.8 0 9.8 7.8 17.8 17.4 17.9l33.5 0 0 104.1c0 9.8 7.8 17.8 17.3 17.9 9.6 0 17.4-8 17.4-17.9l0-104.1 33.5 0c9.6 0 17.4-8 17.4-17.9 0-9.8-7.8-17.8-17.4-17.8z m150.4 0l-94.2 0c-9.6 0-17.4 8-17.4 17.8l0 122c0 9.8 7.8 17.8 17.4 17.9l94.2 0c9.6 0 17.4-8 17.4-17.9 0-9.8-7.8-17.8-17.4-17.8l-76.8 0 0-25.3 66.9 0c9.6 0 17.4-8 17.4-17.9 0-9.8-7.8-17.8-17.4-17.8l-66.9 0 0-25.3 76.8 0c9.6 0 17.4-8 17.4-17.9 0-9.8-7.8-17.8-17.4-17.8z m-174.4-130.8l-0.4-1.2-0.2-0.7c-1.8-8.6 2.8-15.4 5.5-18.5l0.7-0.7c13.7-18 2.2-34.3 2.2-34.3l-3.3 0-3.3 0.1c-13.5 0.9-22.8 6.9-28 15-6.1-9.3-17.5-15.9-34.7-15.1 0 0-11.5 16.3 2.2 34.3 2.5 2.7 8.5 10.3 6 19.9l-34.9 57.9c-2.8 4.7-1.6 10.8 2.8 13.9 9 6.5 27.2 15.4 58.6 15.5 31.4 0 49.5-9 58.5-15.5l1.4-1.1c3.3-3.3 4-8.6 1.4-12.8l-34.9-57.9 0.4 1.2z m117.6-28.3c-12-24.3-27.5-28.5-35.2-22.1-5.9 4.8-19.7 24.1-20.6 25.4-15.1 22-14.3 27.3 5.1 39.8 11 7 19.7-2 23.6-4.7-1.8 11.6-7.3 29.9-15.7 42.7-4.5-3.5-7.8-6.2-10-8.1-2.6-2.4-6.6-2.3-9.1 0.2-1.2 1.2-1.8 2.9-1.7 4.6 0.1 1.7 0.8 3.3 2 4.5 20.2 18.9 46.8 29.7 75 29.7 28.4 0 55.1-10.7 75.3-29.7 2.6-2.4 2.7-6.5 0.3-9-2.5-2.6-6.5-2.7-9.1-0.3-1.6 1.5-3.2 2.9-4.9 4.2l-8.8-20.2c-1.4-3.5-3-7.9-4.8-13.2 0.9-2.2 2.7-4.3 5.4-7.1 1.9-2 3.5-3.9 4.6-5.8 5.9-9.5 2.5-15.1 0.8-18.8-4.2-8.8-10.8-5.9-15.6-0.8-5.9 6.3-11.5 9.1-20.7 11.3-7.7 1.8-13.7 0.9-18.6-2.3-6.8-4.3-17.3-20.3-17.3-20.3z m219.8-24.8c-10 9.7-12.3 23.9-14.2 39l-0.9 7c-2.7 21.1-6.9 42.7-32.1 55.2-5.1 2.5-9.3-5.8-16-5.7-19.3 0.1-56 17.5-57.5 26.3-1.2 7.2 14.5 13 60.8 13 40.2 0 53.2-62.8 67.3-62.8 14.1 0 7.5 56.9 6 62.8l14.8 0c-1.3-5.9-2.2-23.8-2.2-49.1 0-25.2 4.4-30.9 8-49.9 3.1-16.6-20.9-31-34-35.8z m144.5 2.1l-41.3 0c-26.7 0-48.9 21.2-50.7 48.4l-3 43.8c-1.4 20.8 14.6 38.4 35 38.5l78.7 0c20.3 0 36.4-17.7 35-38.5l-3-43.8c-1.9-27.3-24-48.5-50.7-48.4z m-350.7 100.6c12.4 0 21.9 6.3 25.5 17.9-8.4 2.3-17 3.4-25.7 3.4-13 0-17.6-1.2-25.9-3.6 3.4-10.2 14.4-17.7 26.1-17.6z m311.3-64.3l0 1.2c0 10.6 8.4 19.2 18.8 19.2 10.3 0 18.7-8.6 18.7-19.2l0-1.2c0-4.7 16.6-4.7 16.6 0l0 1.2c0 20-15.9 36.2-35.3 36.2-19.5 0-35.3-16.2-35.4-36.2l0-1.2c0-4.7 16.6-4.7 16.6 0z"></path></svg> </Link>

      </div>
      {/*cart title end */}


      {/* main container start  */}
      <main className='main-container'>
        {/* side-cart-start position-fixed */}
        <main className='side-cart'>
          <p className='side-cart-title-p'>ملخص الطلب</p>
          {/*  */}
          <div className='side-cart-pay-info'>
            <div className='side-cart-pay-info-p2 d-flex gap-1 mt-1'><div>د.أ</div> <div><del>{(cartMoney?.total2).toFixed(2)}</del> </div> </div>
            <div className='side-cart-pay-info-p1'>:مجموع سعر منتج(ـات)</div>


          </div>

          <div className='side-cart-pay-info-2'>
            <div style={{ color: 'rgb(251, 119, 1)' }} className='side-cart-pay-info-p2 d-flex gap-1 mt-1'><div>د.أ</div> <div><del> {(cartMoney?.discount).toFixed(2)}</del> </div> </div>
            <div className='side-cart-pay-info-p1'>: الخصم</div>


          </div>

          <div className='side-cart-pay-info-2'>
            <div style={{ color: 'rgb(10, 136, 0)' }} className='side-cart-pay-info-p2 d-flex gap-1 mt-1'><div>مجانا</div>  </div>
            <div style={{ color: 'rgb(10, 136, 0)' }} className='side-cart-pay-info-p1'>: الشحن</div>


          </div>

          <div className='side-cart-pay-info-2'>
            <article>
              <div className='side-cart-pay-info-p2 d-flex gap-1 mt-1'><div>د.أ</div> <div> {(cartMoney?.total1).toFixed(2)} </div> </div>
              <p style={{ backgroundColor: 'rgb(10, 136, 0)', color: 'white', padding: '2px', fontSize: '14px' }}>إجمالي التوفير ؜ {(cartMoney?.discount).toFixed(2)} د.أ</p>

            </article>

            <div className='side-cart-title-p'>: الاجمالي</div>


          </div>
          {/*  */}
          <p style={{ color: 'rgb(85, 85, 85)', textAlign: 'right', fontSize: '14px' }} className=' mt-2'>يرجى الرجوع إلى مبلغ الدفع الفعلي النهائي الخاص بك</p>
          {/* button div */}
          <div className='d-flex align-items-center'>  <button className='side-cart-btn flex-grow-1'>

            <div className='d-flex justify-content-center gap-1'> <p>(4) اتمام دفع</p>   <img style={{ width: '20px', height: '20px' }} src={side_cart_btn} alt="" /> </div>
            <div style={{ marginTop: "-12px" }}>‪%74.3-‬ لفترة محدودة</div>

          </button>
          </div>
          {/* button div */}

          {/*  */}
          <div style={{ color: 'rgb(85, 85, 85)', textAlign: 'right', fontSize: '14px' }} className=' mt-2 d-flex align-items-start gap-1'> <p>لا يمكننا ضمان توفر المنتج وضمان سعره حتى يتم الدفع بشكل نهائي</p>
            <img style={{ width: '15px', height: '15px' }} src="https://aimg.kwcdn.com/upload_aimg/cart/e820c889-411a-4a82-b26f-14a5fcef8989.png.slim.png?imageView2/2/w/800/q/70/format/avif" alt="" />
          </div>
          {/*  */}
          <div style={{ textAlign: 'right', fontSize: '14px' }} className=' mt-2 d-flex align-items-start gap-1'> <p>لن يتم تحصيل أي رسوم منك إلا بعد مراجعة هذا الطلب في الصفحة التالية</p>
            <img style={{ width: '18px', height: '18px' }} src={lock} alt="" />
          </div>


          {/* <div style={{ textAlign: 'right' ,fontSize:'14px',fontWeight:'700'}} className=' mt-2 d-flex align-items-start justify-content-end gap-1'> <p>خيارات الدفع الامنه</p>
      <img style={{width:'18px',height:'18px'}} src={gurantee} alt="" />
      </div> */}
          {/*       
       <p> <span> بحماية معلومات الدفع الخاصة بكTemu يلتزم </span> <span>نمتثل لمعايير أمن البيانات في صناعة بطاقات الدفع ونستخدم تشفيرا قويا، ونجري مراجعات منتظمة لنظامها لحماية خصوصيتك.</span> </p> */}


        </main>
        {/* side-cart-end  */}

        {/*2nd-side-cart-start */}
        <main className='side-cart-2nd'>
          {/*  */}
          <div className='side-cart-2nd-header d-flex justify-content-between align-items-center'>
            <div className='side-cart-2nd-header-p'>عرض لوقت محدود</div>

            <div className='d-flex gap-1'><div className='side-cart-2nd-header-p1'>شحن مجاني خاص لك</div> <img style={{ width: '27px' }} src={nike} alt="" />  </div>


          </div>
          {/*  */}

          {/*cart products start */}
          {(cart ? cart : []).map((item) => (
            <div key={item._id} className='product-container-cart d-flex gap-2 align-items-start mt-2'>

              {/*  */}
              <div className='d-flex flex-column flex-grow-1'>

                <div className='d-flex align-items-start gap-2'>
                  <button onClick={() => { removeCart(item.product._id) }} style={{ border: 'none' }}> <svg style={{ cursor: 'pointer' }} class="_3fYZfW21" alt="" aria-label="" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="30px" height="30px" fill="rgb(85, 85, 85)"><path d="M603.4 96c47.7 0 86.9 36.4 91.3 82.9l0.5 8.8-0.1 75.1 168.9 0c24.7 0 44.8 20.1 44.8 44.8 0 22.7-16.9 41.4-38.7 44.4l-6.1 0.4-20.5 0-46.2 436.2c-5.5 52.1-47.2 92.3-98.5 96.9l-9.7 0.4-354.2 0c-52.4 0-96.8-37.2-106.7-87.7l-1.5-9.6-46.2-436.2-20.5 0c-24.7 0-44.8-20.1-44.8-44.8 0-22.7 16.9-41.4 38.7-44.3l6.1-0.5 169 0 0-75.1c0-47.7 36.4-86.9 82.9-91.3l8.8-0.4 182.7 0z m149.9 256.4l-482.7 0 45.2 426.7c0.9 8.4 7.1 15 15 16.8l4.1 0.4 354.2 0c8.4 0 15.7-5.4 18.2-13.1l0.9-4.1 45.1-426.7z m-149.9-166.8l-182.7 0c-0.8 0-1.5 0.4-1.8 1.1l-0.3 1 0 75.1 186.9 0 0.1-75.1c0-0.8-0.4-1.5-1.1-1.8l-1.1-0.3z"></path></svg></button>
                  <p className='cart-product-name'>{item.product.name}</p>


                </div>

                <div style={{ textAlign: 'right', fontSize: '18px', fontWeight: '600' }}><del style={{ color: 'rgba(251, 119, 1, 0.8)' }}><div style={{ color: 'black' }}>{item.product.price1}</div></del> </div>

                <div className='d-flex justify-content-between '>
                  <div className='' style={{ width: '80px', height: '35px' }} name="" id="">
                    الكميه {quantity}
                    {/* <option selected>الكميه</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option> */}
                  </div>
                  <div style={{ textAlign: 'right' }} className='product-name-1 d-flex'><div class="discount-cart d-flex align-items-center px-1 mx-1 ">%75-</div>  <p>د.أ</p>{item.product.price1} <p className='product-name-offer'> بعد تطبيق العروض إلى </p> <p>د.أ</p> {item.product.price2}</div>



                </div>


              </div>
              {/*  */}
              <div><img className='cart-product-img' src={imgMap[item.product.img]} alt="" /> </div>

            </div>
          ))}
          {/*cart products end */}



          {/*cart products last start */}
          <div className='product-container-cart-last '>


          </div>
          {/*cart products last end */}


        </main>
        {/*2nd-side-cart-end  */}


      </main>
      {/* main container end */}






    </>

  )
}

export default Cart