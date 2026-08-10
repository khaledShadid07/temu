import React from 'react'
import './AllProducts.css'
import Navbar from './Navbar'

const AllProducts = () => {
  return (
    <>
      <Navbar />


{/*all products start  */}
      <main className='cards-container d-flex justify-content-center align-content-center  flex-wrap gap-2  p-2'>


        <div className="card card1" style={{ width: "274px", height: "250px" ,border:'none',cursor:'pointer'}}>
          <img  src="https://img.kwcdn.com/product/fancy/1798dce7-8ae5-4be3-ac6a-c5613180049a.jpg?imageView2/2/w/800/q/70/format/avif" className="card-img-top card-img" alt="..." />
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

          </div>
        </div>   

        <div className="card card1" style={{ width: "274px", height: "250px" ,border:'none',cursor:'pointer'}}>
          <img  src="https://img.kwcdn.com/product/fancy/9279fbb2-c1f7-4289-8eef-c7c166af9c9b.jpg?imageView2/2/w/800/q/70/format/avif" alt="..." />
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

          </div>
        </div>       

        <div className="card card1" style={{ width: "274px", height: "250px" ,border:'none',cursor:'pointer'}}>
          <img  src="https://img.kwcdn.com/product/fancy/d82d78be-b278-4bb1-b694-9a42f8771bae.jpg?imageView2/2/w/800/q/70/format/avif" className="card-img-top card-img" alt="..." />
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

          </div>
        </div>      

        <div className="card card1" style={{ width: "274px", height: "250px" ,border:'none',cursor:'pointer'}}>
          <img  src="https://img.kwcdn.com/product/fancy/7a571841-513a-4ea1-b3b7-e2c7971d7f49.jpg?imageView2/2/w/800/q/70/format/avif" className="card-img-top card-img" alt="..." />
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

          </div>
        </div>   

        <div className="card card1" style={{ width: "274px", height: "250px" ,border:'none',cursor:'pointer'}}>
          <img  src="https://img.kwcdn.com/product/open/0189276f3ee74de4a50705d3663a4a85-goods.jpeg?imageView2/2/w/800/q/70/format/avif" className="card-img-top card-img" alt="..." />
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

          </div>
        </div>       

        
        <div className="card card1" style={{ width: "274px", height: "250px" ,border:'none',cursor:'pointer'}}>
          <img  src="https://img.kwcdn.com/product/fancy/1798dce7-8ae5-4be3-ac6a-c5613180049a.jpg?imageView2/2/w/800/q/70/format/avif" className="card-img-top card-img" alt="..." />
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

          </div>
        </div>   

        <div className="card card1" style={{ width: "274px", height: "250px" ,border:'none',cursor:'pointer'}}>
          <img  src="https://img.kwcdn.com/product/fancy/9279fbb2-c1f7-4289-8eef-c7c166af9c9b.jpg?imageView2/2/w/800/q/70/format/avif" alt="..." />
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

          </div>
        </div>       

        <div className="card card1" style={{ width: "274px", height: "250px" ,border:'none',cursor:'pointer'}}>
          <img  src="https://img.kwcdn.com/product/fancy/d82d78be-b278-4bb1-b694-9a42f8771bae.jpg?imageView2/2/w/800/q/70/format/avif" className="card-img-top card-img" alt="..." />
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

          </div>
        </div>      

        <div className="card card1" style={{ width: "274px", height: "250px" ,border:'none',cursor:'pointer'}}>
          <img  src="https://img.kwcdn.com/product/fancy/7a571841-513a-4ea1-b3b7-e2c7971d7f49.jpg?imageView2/2/w/800/q/70/format/avif" className="card-img-top card-img" alt="..." />
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

          </div>
        </div>   
            
        <div className="card card1" style={{ width: "274px", height: "250px" ,border:'none',cursor:'pointer'}}>
          <img  src="https://img.kwcdn.com/product/open/0189276f3ee74de4a50705d3663a4a85-goods.jpeg?imageView2/2/w/800/q/70/format/avif" className="card-img-top card-img" alt="..." />
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

          </div>
        </div>       
       
      </main>
{/*all products end  */}




    </>
  )
}

export default AllProducts