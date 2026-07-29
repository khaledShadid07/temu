import React from 'react'
import './Navbar.css'

const Navbar = () => {
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


      {/* lower nav start */}
      <nav className='nav-2nd d-flex align-items-center  align-content-center justify-content-center  flex-wrap p-2 px-4'>
        <div style={{ cursor: 'pointer' }} className='me-3 responsive-1'>
          <svg class="iconSvg-2ArbZ iconFill-65mNB" alt="" aria-label="" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="30px" height="30px"><path d="M650.7 916.1c-32.8 0-59.4-26.6-59.5-59.4 0-32.8 26.6-59.4 59.5-59.4 32.8 0 59.4 26.6 59.4 59.4 0 32.8-26.6 59.4-59.4 59.4z m-396.2 0c-32.8 0-59.4-26.6-59.5-59.4 0-32.8 26.6-59.4 59.5-59.4 32.8 0 59.4 26.6 59.4 59.4 0 32.8-26.6 59.4-59.4 59.4z m684.2-815.1l-90.3 17.4c-49.9 9.6-88.7 49.2-97.2 99.4l-2.3 13.8-486.2 0c-91.4 0-165.5 74.1-165.5 165.5 0 8.8 0.7 17.6 2.1 26.3l28.9 179.1c12.6 78.3 80.2 135.8 159.4 135.8l335.9 0c80.8 0 149.1-59.7 160-139.6l43-314.8 0.5-2.3 8.4-49.6c2.5-15 14.2-26.9 29.1-29.8l90.3-17.4c23.1-4.4 38.3-26.8 33.9-49.9-4.4-23.1-26.8-38.3-50-33.9z m-676 216l473.2 0-36.9 270.1c-5.2 37.7-37.4 65.9-75.5 65.9l-335.9 0c-37.4 0-69.3-27.1-75.2-64.1l-28.9-179c-0.7-4.2-1-8.5-1-12.8 0-44.3 35.9-80.2 80.2-80.1z"></path></svg>
        </div>

        <div style={{ cursor: 'pointer' }} className='d-flex align-items-center me-3 responsive-1'>
          <div className='nav-2nd-p '>الدعم</div>
          <svg class="iconSvg-2ArbZ iconFill-65mNB" alt="" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="30px" height="30px" fill="#222222"><path d="M512 107.4c-212.1 0-384 171.9-384 384 0 212.1 171.9 384 384 384 31.4 0 62.4-3.8 92.4-11.2l-11.8 2.6 82.6 25c38.6 11.7 79.2-8.5 93.7-45.3l2.1-6c2.3-7.6 3.4-15.4 3.3-23.3l-0.7-44.8 3.8-3.5c71.8-68.7 114.9-162.8 118.4-264.3l0.2-13.2c0-212.1-171.9-384-384-384z m0 85.3c164.9 0 298.7 133.7 298.7 298.7 0 89.7-39.8 172.9-107.4 229.3-9.9 8.2-15.5 20.5-15.3 33.3l0.8 52.7-82.3-24.8c-5.5-1.7-11.3-2.2-17-1.6l-5.6 1c-23.3 5.8-47.4 8.7-71.9 8.7-164.9 0-298.7-133.7-298.7-298.6 0-164.9 133.7-298.7 298.7-298.7z m81.7 343.5c-12.1 33.6-44 56.5-80.3 56.5-34 0-64.2-20-77.8-50.2l-2.5-6.1c-8-22.2-32.5-33.6-54.6-25.6-22.2 8-33.6 32.5-25.7 54.6 24.2 67.1 88.1 112.7 160.6 112.6 72.6 0 136.5-45.8 160.7-113 8-22.2-3.6-46.6-25.8-54.5-22.2-8-46.6 3.6-54.6 25.7z"></path></svg>

        </div>

        <div style={{ cursor: 'pointer' }} className='d-flex align-items-center responsive-1'>
          <div className='nav-2nd-p profile'>

            {/* <!-- Button trigger modal --> */}
            <button style={{ border: 'none', backgroundColor: 'white' }} type="button" class=" " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <div style={{ marginBottom: '-5px' }} className='nav-2nd-p text-end'>الطلبات</div>
              <div className='nav-2nd-p'>والحسابات</div>
            </button>


          </div>
          {/* <!-- Button trigger modal --> */}

          <button style={{ border: 'none', backgroundColor: 'white' }} type="button" class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <svg class="iconSvg-2ArbZ iconFill-65mNB" alt="" aria-label="" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="30px" height="30px" aria-hidden="true"><path d="M510.8 575.6c204.6 0 323.5 71 356.9 212.9 9 38.1-14.7 76.3-52.8 85.3-5.4 1.3-10.9 1.9-16.4 1.9l-575.5 0c-39.2-0.1-70.9-31.9-70.8-71.1 0-5.4 0.6-10.8 1.9-16.1 33.2-141.9 152.1-212.9 356.7-212.9z m0 81c-161 0-244.7 44.6-273.3 134l-1.2 4 549.1 0-1.1-3.8c-27.8-86.8-107.6-131.5-259.5-134l-14-0.2z m1.2-523.8c103.2 0 186.8 83.6 186.8 186.8 0 103.2-83.6 186.8-186.8 186.8-103.2 0-186.8-83.6-186.8-186.8 0-103.2 83.6-186.8 186.8-186.8z m0 81c-58.4 0-105.8 47.3-105.8 105.8 0 58.4 47.3 105.8 105.8 105.7 58.4 0 105.8-47.3 105.8-105.7 0-58.4-47.3-105.8-105.8-105.8z"></path></svg>

          </button>



        </div>

        <div className='d-flex align-items-center flex-grow-1 mx-3 responsive-1'>
          <div className="searchBtn-3xoXl searchBtn-3Rzpf searchBtn-div"><svg viewBox="0 0 1024 1024" fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" class="searchBtnIcon-_6vD7" alt="" aria-label=""><path d="M486.4 102.4c212.1 0 384 171.9 384 384 0 78.4-23.5 151.3-63.8 212l147.5 132.4c21 18.9 22.8 51.3 3.9 72.3-17.4 19.4-46.4 22.4-67.2 7.9l-5.1-4-146.5-131.5c-67.5 59.1-156 94.9-252.8 94.9-212.1 0-384-171.9-384-384 0-212.1 171.9-384 384-384z m0 102.4c-155.5 0-281.6 126.1-281.6 281.6 0 155.5 126.1 281.6 281.6 281.6 155.5 0 281.6-126.1 281.6-281.6 0-155.5-126.1-281.6-281.6-281.6z"></path></svg></div>
          <input className='search form-control' type="text" placeholder='فساتين' />

        </div>


        <div style={{ cursor: 'pointer' }} className='nav-2nd-p me-3 responsive-1'>الدعم</div>

        <div style={{ cursor: 'pointer' }} className='nav-2nd-p me-3 responsive-1'>جديد في</div>

        <div style={{ cursor: 'pointer' }} className='d-flex align-items-center me-3 responsive-1'>
          <div className='nav-2nd-p '>منتجات بتقييم 5 نجوم</div>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="ms-1 titleIcon-2C5W0 titleIcon-OK7jZ titleIcon-1LBM3" alt="" aria-label="" fill="#222222" aria-hidden="true"><title>منتجات بتقييم 5 نجوم</title><path d="M848.7 133.8c62.1 0 112.5 52.1 112.4 116.3l0 481c0 64.2-50.4 116.3-112.4 116.3l-212.5 0c-8.9 0-17.5 3.6-23.6 10.1l-86.8 90.5-0.8 0.8c-13 12.6-33.7 12.3-46.4-0.6l-88.5-90.9c-6.2-6.3-14.6-9.9-23.4-9.9l-191.4 0c-59.3 0-107.9-47.4-112.1-107.6l-0.3-8.7 0-481c0-64.2 50.4-116.3 112.4-116.3z m-329.7 178.4c-10-3.4-20.8 2.1-24.1 12.4l-34.2 106.1-108.2 0.8c-6 0-11.7 3-15.2 8-6.3 8.8-4.5 21.1 4 27.6l87.1 66.4-32.7 106.6c-1.8 5.9-0.8 12.4 2.7 17.4 6.1 8.9 18.1 10.9 26.6 4.6l88-65.1 88 65.1c4.9 3.6 11.1 4.6 16.8 2.7 10-3.3 15.6-14.4 12.4-24.7l-32.6-106.6 87-66.4c4.8-3.7 7.7-9.5 7.8-15.7 0.1-10.9-8.4-19.8-19-19.9l-108.1-0.8-34.2-106.1c-1.9-5.9-6.4-10.5-12.1-12.4z"></path></svg>
        </div>
        <div style={{ cursor: 'pointer' }} className='d-flex align-items-center me-3 responsive-1'>
          <div className='nav-2nd-p '>المنتجات الأكثر مبيعا</div>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="ms-1 titleIcon-2C5W0 titleIcon-OK7jZ titleIcon-1LBM3" alt="" aria-label="" fill="#222222" aria-hidden="true"><title>المنتجات الأكثر مبيعًا</title><path d="M542.7 34.1c58.8 0 110.7 40.1 127.6 98.8l0.7 2.5 0.5 1.1c0.3 0.9 0.6 1.8 0.9 2.7l0.7 2.8c6.2 29.5 9.5 59.1 9.5 88.8 0 26.2-2.4 52.3-7.2 78l-1.8 9.2 145.4 0.1c2.5 0 5 0.2 7.5 0.5l1.1 0.1 2.7 0.2c41.3 3.2 79.2 25.6 102.2 61.6l2.6 4.2c15.3 25.2 22.4 54.8 20.2 84.5l0.1-1.4 0.1-1.1 0 1.1c0.1 5.4-0.3 10.6-1.2 15.3l-0.8 3.4-74 340c-2.1 8.1-5.5 15.7-10.1 22.4l0.4-0.8 1.2-1.8-1.6 3.2c-9.9 18.7-23.9 34.8-40.8 47l-4.6 3.2c-21.9 14.4-47 21.9-72.5 21.9-0.9 0-1.7 0-2.5-0.1l-612.3-0.2c-36.4 0-66.4-29.7-68.2-67.4l-0.1-3.6c-0.1-1.6-0.2-2.7 0-4l0.3-389.6c0-34.8 24.3-64.4 57.2-70.1l3.4-0.4c102-11.9 169.3-32.5 200-59 42.2-36.2 80.1-108.7 80.1-154.3 0-78.4 59-138.7 133.3-138.8z m-218.4 460.8c-28.3 0-51.2 22.9-51.2 51.2l0 204.8c0 28.3 22.9 51.2 51.2 51.2 28.3 0 51.2-22.9 51.2-51.2l0-204.8c0-28.3-22.9-51.2-51.2-51.2z"></path></svg>
        </div>

        <svg className="iconmain-NcPVf responsive-1" style={{ width: '60px', height: '60px', cursor: 'pointer' }} alt="temu" aria-label="temu" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="1em" height="1em" fill="#fb7701" stroke="none" title="temu"><path d="M741.4 102.4c99.5 0 180.2 80.7 180.2 180.2l0 458.8c0 99.5-80.7 180.2-180.2 180.2l-458.8 0c-99.5 0-180.2-80.7-180.2-180.2l0-458.8c0-99.5 80.7-180.2 180.2-180.2l458.8 0z m63.1 423.8c-9.6 0-17.4 8-17.4 17.8l0 74.6c0 23.4-12.9 35.5-34.1 35.5-21.2 0-34.1-12.5-34.2-36.6l0-73.5c0-9.8-7.8-17.8-17.4-17.8-9.6 0-17.4 8-17.4 17.8l0 74.4c0 43.5 26 65.7 68.5 65.6 42.5 0 69.4-22 69.4-66.7l0-73.3c0-9.8-7.8-17.8-17.4-17.8z m-269.5 0l-10.8 0c-9.6 0-17.4 8-17.4 17.8l0 122.2c0 9.8 7.8 17.8 17.4 17.8 9.6 0 17.4-8 17.4-17.8l0-80.2 29.3 42.4c6.1 8.8 18.8 8.8 24.9 0l29.4-42.4 0 80.2c0 9.8 7.8 17.8 17.4 17.8 9.6 0 17.4-8 17.4-17.8l0-122.2c0-9.8-7.8-17.8-17.4-17.8l-10.8 0c-4.2 0-8.1 2.1-10.4 5.5l-38 58.5-38-58.5c-2.4-3.5-6.3-5.5-10.4-5.5z m-219.3 0l-101.7 0c-9.6 0-17.4 8-17.4 17.8 0 9.8 7.8 17.8 17.4 17.9l33.5 0 0 104.1c0 9.8 7.8 17.8 17.3 17.9 9.6 0 17.4-8 17.4-17.9l0-104.1 33.5 0c9.6 0 17.4-8 17.4-17.9 0-9.8-7.8-17.8-17.4-17.8z m150.4 0l-94.2 0c-9.6 0-17.4 8-17.4 17.8l0 122c0 9.8 7.8 17.8 17.4 17.9l94.2 0c9.6 0 17.4-8 17.4-17.9 0-9.8-7.8-17.8-17.4-17.8l-76.8 0 0-25.3 66.9 0c9.6 0 17.4-8 17.4-17.9 0-9.8-7.8-17.8-17.4-17.8l-66.9 0 0-25.3 76.8 0c9.6 0 17.4-8 17.4-17.9 0-9.8-7.8-17.8-17.4-17.8z m-174.4-130.8l-0.4-1.2-0.2-0.7c-1.8-8.6 2.8-15.4 5.5-18.5l0.7-0.7c13.7-18 2.2-34.3 2.2-34.3l-3.3 0-3.3 0.1c-13.5 0.9-22.8 6.9-28 15-6.1-9.3-17.5-15.9-34.7-15.1 0 0-11.5 16.3 2.2 34.3 2.5 2.7 8.5 10.3 6 19.9l-34.9 57.9c-2.8 4.7-1.6 10.8 2.8 13.9 9 6.5 27.2 15.4 58.6 15.5 31.4 0 49.5-9 58.5-15.5l1.4-1.1c3.3-3.3 4-8.6 1.4-12.8l-34.9-57.9 0.4 1.2z m117.6-28.3c-12-24.3-27.5-28.5-35.2-22.1-5.9 4.8-19.7 24.1-20.6 25.4-15.1 22-14.3 27.3 5.1 39.8 11 7 19.7-2 23.6-4.7-1.8 11.6-7.3 29.9-15.7 42.7-4.5-3.5-7.8-6.2-10-8.1-2.6-2.4-6.6-2.3-9.1 0.2-1.2 1.2-1.8 2.9-1.7 4.6 0.1 1.7 0.8 3.3 2 4.5 20.2 18.9 46.8 29.7 75 29.7 28.4 0 55.1-10.7 75.3-29.7 2.6-2.4 2.7-6.5 0.3-9-2.5-2.6-6.5-2.7-9.1-0.3-1.6 1.5-3.2 2.9-4.9 4.2l-8.8-20.2c-1.4-3.5-3-7.9-4.8-13.2 0.9-2.2 2.7-4.3 5.4-7.1 1.9-2 3.5-3.9 4.6-5.8 5.9-9.5 2.5-15.1 0.8-18.8-4.2-8.8-10.8-5.9-15.6-0.8-5.9 6.3-11.5 9.1-20.7 11.3-7.7 1.8-13.7 0.9-18.6-2.3-6.8-4.3-17.3-20.3-17.3-20.3z m219.8-24.8c-10 9.7-12.3 23.9-14.2 39l-0.9 7c-2.7 21.1-6.9 42.7-32.1 55.2-5.1 2.5-9.3-5.8-16-5.7-19.3 0.1-56 17.5-57.5 26.3-1.2 7.2 14.5 13 60.8 13 40.2 0 53.2-62.8 67.3-62.8 14.1 0 7.5 56.9 6 62.8l14.8 0c-1.3-5.9-2.2-23.8-2.2-49.1 0-25.2 4.4-30.9 8-49.9 3.1-16.6-20.9-31-34-35.8z m144.5 2.1l-41.3 0c-26.7 0-48.9 21.2-50.7 48.4l-3 43.8c-1.4 20.8 14.6 38.4 35 38.5l78.7 0c20.3 0 36.4-17.7 35-38.5l-3-43.8c-1.9-27.3-24-48.5-50.7-48.4z m-350.7 100.6c12.4 0 21.9 6.3 25.5 17.9-8.4 2.3-17 3.4-25.7 3.4-13 0-17.6-1.2-25.9-3.6 3.4-10.2 14.4-17.7 26.1-17.6z m311.3-64.3l0 1.2c0 10.6 8.4 19.2 18.8 19.2 10.3 0 18.7-8.6 18.7-19.2l0-1.2c0-4.7 16.6-4.7 16.6 0l0 1.2c0 20-15.9 36.2-35.3 36.2-19.5 0-35.3-16.2-35.4-36.2l0-1.2c0-4.7 16.6-4.7 16.6 0z"></path></svg>

      </nav>
      {/* lower nav end */}


      {/*third nav start */}
      <nav className='nav-3rd d-flex align-items-center  align-content-center justify-content-center  flex-wrap p-2 px-4'>

        <div className='third-item me-3'>
          Travel Tourism
        </div>
        <div className='third-item me-3'>
          Hobbies Leisure
        </div>
        <div className='third-item me-3'>
          Apparel
        </div>
        <div className='third-item me-3'>
          Occasions Gifts
        </div>
        <div className='third-item me-3'>
          Sports Fitness
        </div>
        <div className='third-item me-3'>
          Women's Clothing
        </div>
        <div className='third-item me-3'>
          Home Garden
        </div>
        <div className='third-item me-3'>
          Mens's Clothing
        </div>
        <div className='third-item me-3'>
          Womens's Shoes
        </div>
        <div className='third-item me-3'>
          مُستَحسَن
        </div>


      </nav>
      {/*third nav end */}


      {/* 1st modal start */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="modal-header ">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <p className="modal-title profile-modal-txt1 " id="staticBackdropLabel">تسجيل الدخول / إنشاء حساب</p>
            {/* 1 */}
            <div className='d-flex justify-content-center gap-1 '>
              <p style={{ fontFamily: 'Noto Sans Arabic', color: 'rgb(10, 136, 0)' }} className=' '>جميع البيانات مؤمنة</p>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="1em" height="1em" fill="rgb(10, 136, 0)" className="mt-1   lock-1D86P" aria-hidden="true"><path d="M512 30.7c138.6 0 250.9 112.3 250.9 250.9l0 61.4 35.8 0c59.5 0 108.2 46.1 112.4 104.6l0.3 8.1 0 419.8c0 62.2-50.4 112.6-112.7 112.7l-573.4 0c-62.2 0-112.6-50.4-112.7-112.7l0-419.8c0-62.2 50.4-112.6 112.7-112.7l35.8 0 0-61.4c0-134.8 106.3-244.8 239.7-250.6l11.2-0.3z m0 506.9c-22.6 0-41 18.3-41 41l0 174c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41l0-174c0-22.6-18.3-41-41-41z m0-414.7c-87.7 0-158.7 71.1-158.7 158.7l0 56.3 317.4 0 0-56.3c0-84.6-66.2-153.8-149.7-158.5l-9-0.2z"></path></svg>
            </div>
            {/* 1end */}
            {/* 2start */}
            <main className='d-flex align-items-center justify-content-center gap-4'>
              <div className='d-flex flex-column align-items-center me-4'>
                <img alt="" data-cui-image="1" data-state="succ" class="new-cui-img-3czqs icon-2SJtA supportRotate-35LoL" src="https://aimg.kwcdn.com/upload_aimg/lyd/7e30ab01-509b-416d-ab9e-0c3abadb80ad.png?imageView2/2/w/72/q/80/format/avif" aria-hidden="true" data-did-mount="1" />
                <p style={{ fontFamily: 'Noto Sans Arabic' }} className='fw-bold '>إرجاع مجاني</p>
                <p style={{ fontFamily: 'Noto Sans Arabic' }} className=''>لمدة تصل إلى ٩٠ يومًا</p>

              </div>
              <div className='d-flex flex-column align-items-center ms-4'>
                <img alt="" data-cui-image="1" data-state="succ" class="new-cui-img-3czqs icon-2SJtA supportRotate-35LoL" src="https://aimg.kwcdn.com/upload_aimg/lyd/30f360ec-b978-4a63-824b-a8e64c57d117.png?imageView2/2/w/72/q/80/format/avif" aria-hidden="true" data-did-mount="1" />
                <p style={{ fontFamily: 'Noto Sans Arabic' }} className='fw-bold '>شحن مجاني</p>
                <p style={{ fontFamily: 'Noto Sans Arabic' }} className=''>عرض خاص لك</p>

              </div>


            </main>
            {/* 2end */}

            {/* form start */}
            <form onSubmit={(e)=>{e.preventDefault()}} className='form-login d-flex flex-column' action="">
              <p style={{ fontFamily: 'Noto Sans Arabic', textAlign: 'right' }} className='fw-bold'>البريد الإلكتروني أو رقم الهاتف</p>
              <input style={{ height: '50px' }} className='form-control border border-secondary' type="text"  />
              <button type="submit" class="form-login-btn mt-4 fw-bold" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">المتابعة</button>
              <p style={{ fontFamily: 'Noto Sans Arabic', textAlign: 'center' }} className=' text-secondary mt-3'><u>هل تواجه مشكلة في تسجيل الدخول؟</u> </p>
              <p style={{ fontFamily: 'Noto Sans Arabic', textAlign: 'center' }} className=' text-secondary mt-4'>أو المتابعة بطرق أخرى</p>
              {/*  */}
              <div className='d-flex align-items-center justify-content-center gap-4'>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="60px" height="60px" fill="currentColor"><path d="M503.4 228.7c41.5 0 93.5-27.6 124.5-64.5 28-33.4 48.5-80 48.6-126.7 0-6.3-0.6-12.6-1.8-17.8-46.2 1.7-101.7 30.5-135.1 69.1-26.3 29.3-50.3 75.4-50.2 122.7 0 6.9 1.2 13.8 1.7 16.1 3 0.6 7.6 1.1 12.3 1.1z m-146.1 696.8c56.7 0 81.8-37.4 152.5-37.4 71.9 0 87.7 36.2 150.9 36.3 62 0 103.5-56.4 142.6-111.7 43.8-63.3 62-125.5 63.2-128.4-4.1-1.2-122.8-49-122.8-183.2 0-116.3 93.5-168.7 98.8-172.8-62-87.5-156.1-89.8-181.8-89.7-69.6 0-126.3 41.4-162 41.4-38.6 0-89.4-39.1-149.6-39.2-114.6 0-230.9 93.3-230.9 269.5 0 109.4 43.2 225.2 96.4 300.1 45.5 63.3 85.3 115.2 142.6 115.1z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="60px" height="60px" fill="currentColor" class="fb-2eJ9m"><path d="M607.9 248c-99 0-163.6 60-163.6 168.5v95.5h-110v125.2h110v302.8c-207.2-32.5-365.6-211.7-365.6-428 0-239.3 194-433.2 433.3-433.2 239.3 0 433.3 193.9 433.2 433.2 0 216.2-158.4 395.5-365.5 428v-302.8h100.9l19.3-125.2h-120.2v-81.3c0-34.3 16.7-67.7 70.6-67.6h54.6v-106.7s-49.6-8.5-96.9-8.4z"></path></svg>
                <img alt="Google" data-cui-image="1" data-state="succ" className="new-cui-img-3czqs icon-DqqeU google" src="https://aimg.kwcdn.com/upload_aimg/login/8e2e59cd-5090-4feb-ae78-691e9971ed89.png.slim.png?imageView2/2/w/72/q/80/format/avif" aria-hidden="true" data-did-mount="1"></img>

              </div>
              {/*  */}
              <div style={{ fontFamily: 'Noto Sans Arabic' }} className="policyNote-hocda policyClassName-1LYrA text-center mt-3">بالمتابعة، فإنك توافق على <span class="policyLinkParent-1X3oa"><a href="#" className="a-raak6 policyLink-jKwVU" aria-label="شروط الاستخدام - يفتح في صفحة جديدة، رابط." tabindex="0">شروط الاستخدام</a></span> و<span class="policyLinkParent-1X3oa"><a href="#" className="a-raak6 policyLink-jKwVU" aria-label="سياسة الخصوصية - يفتح في صفحة جديدة، رابط." role="link" tabindex="0">سياسة الخصوصية</a></span>.</div>
            </form>

            {/* form end */}


          </div>
        </div>
      </div>

      {/*1st modal end  */}


      {/*2nd modal start*/}


      <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="modal-header ">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <p className="modal-title profile-modal-txt1 " id="staticBackdropLabel">تسجيل الدخول / إنشاء حساب</p>
            {/* 1 */}
            <div className='d-flex justify-content-center gap-1 '>
              <p style={{ fontFamily: 'Noto Sans Arabic', color: 'rgb(10, 136, 0)' }} className=' '>جميع البيانات مؤمنة</p>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="1em" height="1em" fill="rgb(10, 136, 0)" className="mt-1   lock-1D86P" aria-hidden="true"><path d="M512 30.7c138.6 0 250.9 112.3 250.9 250.9l0 61.4 35.8 0c59.5 0 108.2 46.1 112.4 104.6l0.3 8.1 0 419.8c0 62.2-50.4 112.6-112.7 112.7l-573.4 0c-62.2 0-112.6-50.4-112.7-112.7l0-419.8c0-62.2 50.4-112.6 112.7-112.7l35.8 0 0-61.4c0-134.8 106.3-244.8 239.7-250.6l11.2-0.3z m0 506.9c-22.6 0-41 18.3-41 41l0 174c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41l0-174c0-22.6-18.3-41-41-41z m0-414.7c-87.7 0-158.7 71.1-158.7 158.7l0 56.3 317.4 0 0-56.3c0-84.6-66.2-153.8-149.7-158.5l-9-0.2z"></path></svg>
            </div>
            {/* 1end */}

            {/* form start */}
            <form className='form-login d-flex flex-column' action="">
              <div className='mb-4'>
                <div style={{ fontFamily: 'Noto Sans Arabic', textAlign: 'right' }} className='fw-bold'>أنشئ حسابك</div>
                <div style={{ fontFamily: 'Noto Sans Arabic', textAlign: 'right' }} className=''>سجل الآن بكل سهولة؛ فما عليك سوى إدخال كلمة المرور.</div>

              </div>
              <p style={{ fontFamily: 'Noto Sans Arabic', textAlign: 'right' }} className='fw-bold mt-4'>البريد الإلكتروني أو رقم الهاتف</p>
              <input style={{ height: '50px' }} className='form-control border border-secondary' type="text" />
            
              <p style={{ fontFamily: 'Noto Sans Arabic', textAlign: 'right' }} className='fw-bold mt-4' >كلمة المرور</p>
              <input style={{ height: '50px' }} placeholder='كلمه المرور: يلزم ادخال 8 احرف على الاقل' className='form-control border border-secondary pass-input' type="password"  />
              <button type="submit" class="form-login-btn mt-4 fw-bold" >التسجيل</button>
                           {/*  */}
              <div className='mb-4 mt-4'>
                <div style={{ fontFamily: 'Noto Sans Arabic', textAlign: 'right' }} className='fw-bold'>:جودة كلمة المرور</div>
                <div style={{ fontFamily: 'Noto Sans Arabic', textAlign: 'right' }} className=''>لا تستخدم كلمة مرور من موقع آخر، أو شيئًا واضحًا جدًا مثل اسم حيوانك الأليف.</div>

              </div>
              {/*  */}
             <div style={{ fontFamily: 'Noto Sans Arabic' }} className="policyNote-hocda policyClassName-1LYrA text-center mt-3 policy-2nd">بالمتابعة، فإنك توافق على <span class="policyLinkParent-1X3oa"><a href="#" className="a-raak6 policyLink-jKwVU" aria-label="شروط الاستخدام - يفتح في صفحة جديدة، رابط." tabindex="0">شروط الاستخدام</a></span> و<span class="policyLinkParent-1X3oa"><a href="#" className="a-raak6 policyLink-jKwVU" aria-label="سياسة الخصوصية - يفتح في صفحة جديدة، رابط." role="link" tabindex="0">سياسة الخصوصية</a></span>.</div>

            </form>

            {/* form end */}


          </div>
        </div>

      </div>


      {/*2nd modal end */}

    </>
  )
}

export default Navbar