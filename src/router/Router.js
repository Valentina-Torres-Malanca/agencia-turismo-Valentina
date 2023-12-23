import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../pages/home/home';
import Nav from '../components/Nav/nav';
import Contact from '../pages/contact/contact';
import Cities from '../pages/cities/cities';
import CityMenu from '../pages/cities/CityMenu';
import AttractionCard from '../components/Card/AttractionCard';
import Register from '../pages/Register/register';
import ShoppingCart from '../pages/shoppingCart/ShoppingCart';
import Login from '../pages/Login/login';

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route  path='/home' element={<Home/>}/>
                <Route path='/nav' element={<Nav/>}/>
                <Route path='/cities' element={<Cities/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/CityMenu' element={<CityMenu/>}/>
                <Route path='/AttractionCard' element={<AttractionCard/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/shoppingCart' element={<ShoppingCart/>}/>
              
                
               
            </Routes>
        </BrowserRouter>

    )
}