import './software.css';
import solidworks from '../../assets/images/solid-Logo.png';
import catia from '../../assets/images/CATIA-Logo.png';

const Software=()=>{
    return(
        <div className='software'>
        <div className='catia'>
         <img src={catia} alt='catia'/>
         <h1 style={{textAlign:'center'}}>کتیا</h1>
         <p>
         کتیا یک مجموعه نرم‌افزاری چند منظوره است که تمام 
         ابزارهای مورد نیاز برای طراحی به کمک کامپیوتر، مهندسی به کمک کامپیوتر، تولید به کمک کامپیوتر، مدل‌سازی سه‌بعدی،
          تحلیل، شبیه‌سازی و مدیریت چرخه عمر محصول را به صورت یکجا در اختیار کاربر قرار می‌دهد. 
         نرم افزار CATIA از محبوبیت بسیار زیادی نزد مهندسان مکانیک 
         و شرکت‌های تولیدکننده تجهیزات مکانیکی (هواپیما، خودرو، کشتی و غیره) برخوردار است. 
         </p>
        </div>
        <div className='solidworks'>
         <img src={solidworks} alt='solidworks'/>
         <h1 style={{textAlign:'center'}}>سالیدورکس</h1>
         <p>
          سالیدورکس (SolidWorks)، یک نرم‌افزار طراحی به کمک کامپیوتر (CAD) و مهندسی به
          کمک کامپیوتر (CAE)
          است. این نرم‌افزار، امکان طراحی و تحلیل مدل‌های سه‌بعدی از قطعات و تجهیزات مکانیکی را فراهم می‌کند.

          قابلیت‌های فراوان SolidWorks، باعث صرفه‌جویی در زمان و هزینه می‌شود. مهندسان می‌توانند با استفاده
           از این قابلیت‌ها و بدون ساخت نمونه‌های واقعی، محدودیت‌ها و ایرادات طراحی خود را مورد ارزیابی و بهینه‌سازی قرار دهند.
         </p>
        </div>
        </div>
    )
}

export default Software;