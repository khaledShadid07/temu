import React from 'react'
import './Footer.css'
import img1 from '../productPic/footer1.avif'
import img2 from '../productPic/footer2.avif'
import img3 from '../productPic/footer3.avif'
import img4 from '../productPic/footer4.avif'
import img5 from '../productPic/footer5.avif'
import img6 from '../productPic/footer6.avif'
import apple from '../productPic/apple.avif'
import googleplay from '../productPic/googleplay.avif'
import insta from '../productPic/insta.avif'
import face from '../productPic/face.avif'
import x from '../productPic/x.avif'
import tik from '../productPic/tik.avif'
import tube from '../productPic/tube.avif'
import pin from '../productPic/pin.avif'
import pay1 from '../productPic/pay1.avif'
import pay2 from '../productPic/pay2.avif'
import pay3 from '../productPic/pay3.avif'
import pay4 from '../productPic/pay4.avif'
import pay5 from '../productPic/pay5.avif'
import pay6 from '../productPic/pay6.avif'
import pay7 from '../productPic/pay7.avif'
import pay8 from '../productPic/pay8.avif'
import pay9 from '../productPic/pay9.avif'
import pay10 from '../productPic/pay10.avif'
import pay11 from '../productPic/pay11.avif'
import pay12 from '../productPic/pay12.avif'
import pay13 from '../productPic/pay13.avif'
import pay14 from '../productPic/pay14.avif'
const Footer = () => {
  return (
    <>

      <main className='footer-container  p-2'>

        <section className='section1'>

          <p className='footer-header-p me-3'> Temu تنزيل تطبيق </p>
          <div className='footer-sub-header-p1 d-flex   '> <span className='p-2 d-flex align-items-center justify-content-end span-border1'><div className='me-1 text-end '>تتبع الطلبات في أي وقت</div> <img src={img2} alt="" /> </span>  <span className='p-2 d-flex align-items-center justify-content-end  span-border'><div className='me-1'>تنبيهات انخفاض الأسعار</div> <img src={img1} alt="" /> </span> </div>
          <div className='footer-sub-header-p1 d-flex div-footer'> <span className='p-2 d-flex align-items-center justify-content-end span-border1'><div className='me-1 text-end'>تنبيهات توفر المنتج بكميات</div> <img src={img4} alt="" /> </span>  <span className='p-2 d-flex align-items-center justify-content-end span-border'><div className='me-1'>عملية دفع أسرع وأكثر أمانًا</div> <img src={img3} alt="" /> </span> </div>
          <div className='footer-sub-header-p1 d-flex div-footer'> <span className='p-2 d-flex align-items-center justify-content-end span-border1'><div className='me-1 text-end'>تنبيهات العروض والقسائم</div> <img src={img6} alt="" /> </span>  <span className='p-2 d-flex align-items-center justify-content-end  span-border'><div className='me-1'>عروض حصرية</div> <img src={img5} alt="" /> </span> </div>
          {/* footer-app-store */}
          <main className='app-store-container'>

                 <div className='footer-app-store'>
             
             <div style={{marginRight:'10px'}}>
               <article className='text-end' style={{color:'rgb(170, 170, 170)'}}>احصل عليه من</article>
              <article style={{color:'white',fontWeight:'700'}}>Google Play</article>
             </div>
             <img style={{width:'35px'}} src={googleplay} alt="" /> 
          </div>


            <div className='footer-app-store'>
             
             <div style={{marginRight:'10px'}}>
               <article className='text-end' style={{color:'rgb(170, 170, 170)'}}>تنزيل على</article>
              <article style={{color:'white',fontWeight:'700'}}>App Store </article>
             </div>
             <img style={{width:'35px'}} src={apple} alt="" /> 
          </div>

 
          </main>
          {/* footer-app-store */}
          {/* تواصل معنا */}

          <main className='d-flex flex-column justify-content-end mt-4'>
            <div style={{color:'white',fontWeight:'700',fontFamily:'Noto Sans Arabic',textAlign:'end'}}>تواصل معنا</div>
            <div className='d-flex align-items-center justify-content-end mt-3 gap-4'>
              <img style={{width:'35px'}} src={pin} alt="" />
              <img style={{width:'35px'}} src={tube} alt="" />
              <img style={{width:'35px'}} src={tik} alt="" />
              <img style={{width:'35px'}} src={x} alt="" />
              <img style={{width:'35px'}} src={face} alt="" />
              <img style={{width:'35px'}} src={insta} alt="" />

            </div>


          </main>

          {/* تواصل معنا */}
        </section>

        <section className='section1 '>

          <p className='footer-header-p'>المساعدة</p>
          <p className='footer-sub-header-p'>مركز الدعم والأسئلة الشائعة</p>
          <p className='footer-sub-header-p'>مركز الأمان</p>
          <p className='footer-sub-header-p'>Temu حماية الشراء من </p>
          <p className='footer-sub-header-p'>Temu اعمل مع </p>


        </section>

        <section className='section1 '>

          <p className='footer-header-p'>خدمة العملاء</p>
          <p className='footer-sub-header-p'>سياسة الإرجاع والاسترداد</p>
          <p className='footer-sub-header-p'>سياسة الملكية الفكرية</p>
          <p className='footer-sub-header-p'>معلومات الشحن</p>
          <p className='footer-sub-header-p'>الإبلاغ عن النشاط المشبوه</p>


        </section>


        <section className='section1 '>

          <p className='footer-header-p'>Temu معلومات عن</p>
          <p className='footer-sub-header-p'>Temu نبذة عن </p>
          <p style={{ maxWidth: '' }} className='footer-sub-header-p text-center'>برنامج المؤثرين على شبكات التواصل الاجتماعي والتسويق بالعمولة: انضم لتربح</p>
          <p className='footer-sub-header-p'>تواصل معنا</p>
          <p className='footer-sub-header-p'>المنافذ الإعلامية</p>
          <p className='footer-sub-header-p'>Temu برنامج زراعة الأشجار الخاص بـ </p>

        </section>

{/*  */}
<div className='d-flex flex-column gap-5'>
{/*  الدفع*/}
          <div className='d-flex gap-5 flex-wrap align-content-center justify-content-center'>
              <main className='d-flex flex-column justify-content-end mt-4 '>
            <div style={{color:'white',fontWeight:'700',fontFamily:'Noto Sans Arabic',textAlign:'end'}}>نحن نقبل</div>
            <div className='d-flex align-items-center justify-content-end mt-3 gap-3'>
              <img style={{width:'40px'}} src={pay8} alt="" />
              <img style={{width:'40px'}} src={pay9} alt="" />
              <img style={{width:'40px'}} src={pay10} alt="" />
              <img style={{width:'40px'}} src={pay11} alt="" />
              <img style={{width:'40px'}} src={pay12} alt="" />
              <img style={{width:'40px'}} src={pay13} alt="" />
              <img style={{width:'40px'}} src={pay14} alt="" />

            </div>


          </main>
              <main className='d-flex flex-column justify-content-end mt-4 '>
            <div style={{color:'white',fontWeight:'700',fontFamily:'Noto Sans Arabic',textAlign:'end'}}>شهادات الامان</div>
            <div className='d-flex align-items-center justify-content-end mt-3 gap-3'>
              <img style={{width:'40px'}} src={pay1} alt="" />
              <img style={{width:'40px'}} src={pay2} alt="" />
              <img style={{width:'40px'}} src={pay3} alt="" />
              <img style={{width:'40px'}} src={pay4} alt="" />
              <img style={{width:'40px'}} src={pay5} alt="" />
              <img style={{width:'40px'}} src={pay6} alt="" />
              <img style={{width:'40px'}} src={pay7} alt="" />

            </div>


          </main>
         

            </div>   

         

{/*  الدفع*/}

{/* last */}

<div className='d-flex gap-4  align-items-center justify-content-center align-content-center last-footer '>

   <div style={{textDecoration:'underLine'}} className='footer-sub-header-p text-center'>خيارات الإعلان</div>

   <div style={{textDecoration:'underLine'}} className='footer-sub-header-p text-center'>خيارات الخصوصية الخاصة بك</div>

   <div style={{textDecoration:'underLine'}} className='footer-sub-header-p text-center'>سياسة الخصوصية</div>

   <div style={{textDecoration:'underLine'}} className='footer-sub-header-p text-center'>شروط الاستخدام</div>

   <div style={{textDecoration:'underLine'}} className='footer-sub-header-p text-center'>© 2022－2026 Whaleco Inc.‎</div>
  
  
</div>

{/*last  */}
</div>
{/*  */}


      </main>

    </>

  )
}

export default Footer