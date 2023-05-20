import './layout.css';
import './layout-header.css';
import './layout-aside.css';
import './layout-footer.css';
import logo from '../../assets/images/logo.png';
import telegram from '../../assets/images/telegram.png';
import watsapp from '../../assets/images/whatsapp.png';
import instagram from '../../assets/images/instagram.png';
import { Outlet ,Link} from 'react-router-dom';

const Layout=()=>{
    return(
      <div className='main'>

        <header className='header'>
        <div className="c1">
        <div className='c11'>تلفن : 09125983983</div>
        <div className="c12">مهندسان غیرممکن ها را ممکن و زندگی را راحت تر میسازند</div>
         <div className="c13">عضویت/ورود</div>
    </div>
    <div class="c2">
        <section>طراحی صنعتی کادیزاین </section>
        <div class="c21">
            <img src={logo} alt='logo' style={{width:'100%',height:'100%'}}/>
        </div>
    </div>
        </header>

        <article className='article'>
          <Outlet/>
        </article>

        <aside className='aside'>
       <nav>
        <ul>
        <li><Link to='home' style={{textDecoration:'none',color:'black'}}>صفحه اصلی</Link></li>

        <li><Link to='software' style={{textDecoration:'none',color:'black'}}>نرم افزار های طراحی</Link></li>

        <li><Link to='designing' style={{textDecoration:'none',color:'black'}}>طراحی صنعتی چیست؟ </Link></li>

        <li><Link to='models' style={{textDecoration:'none',color:'black'}}>مدل های سه بعدی</Link></li>

        <li><Link to='about' style={{textDecoration:'none',color:'black'}}> درباره کادیزاین </Link></li>

        </ul>
        </nav>
        </aside>

        <footer className='footer'>
        <div className="c4">
        <div className="c41">
            <div className="social1">
              <img src={telegram} alt='telegram' style={{width:'100%',height:'100%'}}/>
            </div>
            <div className="social2">
              <img src={instagram} alt='instagram' style={{width:'100%',height:'100%'}}/>
            </div>
            <div className="social3">
              <img src={watsapp} alt='watsapp' style={{width:'100%',height:'100%'}}/>
            </div>
                    </div>

    </div>
    <div class="c5">تمامی حقوق این سایت محفوظ میباشد &copy;</div>
        </footer>

      </div>
    )
}

export default Layout;