import './home.css';
import pic1 from '../../assets/images/p1.jpg';
import pic2 from '../../assets/images/p2.jpg';
import pic3 from '../../assets/images/p3.JPG';
import pic4 from '../../assets/images/p4.JPG';
import pic5 from '../../assets/images/p5.jpg';
import pic6 from '../../assets/images/p6.JPG';

const Home=()=>{
    return(
        <div className='c-home'>

        <div  className='c3'>
        <div className='c31'>
            <img src={pic1} alt='pic1'/>
        </div>
        <div className='c32'>
        مهندسی معکوس و ابرنقاط
        </div>
        </div>

        <div  className='c3'>
        <div className='c31'>
            <img src={pic2} alt='pic2'/>
            <div className="c32">
                طراحی دستگاه
            </div>
        </div>
        </div>

        <div className='c3'>
            <div className='c31'>
            <img src={pic3} alt='pic3'/>
            <div className="c32">
                طراحی مکانیزم 
                </div>
            </div>
        </div>
         
       <div className='c3'>
        <div className='c31'>
            <img src={pic4} alt='pic4'/>
             <div className="c32">طراحی قطعات صنعتی
             </div>
        </div>
       </div>

       <div className='c3'>
        <div className='c31'>
            <img src={pic5} alt='pic5'/>
            <div className='c32'>
                طراحی قطعات تزریقی
            </div>
        </div>
       </div>
        
        <div className='c3'>
            <div className='c31'>
                <img src={pic6} alt='pic6'/>
                <div class="c32">طراحی آبجکت
                </div>
            </div>
        </div>


        </div>
    )
}

export default Home;