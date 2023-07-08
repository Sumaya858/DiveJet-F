import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Signup from './components/user/Signup'
import Signin from './components/user/Signin'
import axios from 'axios'
import { useEffect , useState } from 'react'
import jwt_decode from 'jwt-decode'
import Homepage from './components/homepage/Homepage'
import About from './components/about/About'
import Profile from './components/profile/Profile'
import Contact from './components/contact/Contact'
import Courses from './components/course/Courses'
import logo from './divejet.png'

export default function App(){

  const [isAuth, setIsAuth] = useState(false);    // check if the user is authenticated or not (logged in or not)
  const [user, setUser] = useState({}); // Contain User, if any.

  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token != null){
      let user = jwt_decode(token)

      setIsAuth(true)
      setUser(user)
    } else if(!user){
      localStorage.remove("token")
      setIsAuth(false)
    }
 
  }, [])
  

  const registerHandler = (user) => {
    console.log("user::::", user)
    axios.post("auth/signup", user) //user here will contain json object
    .then(res => {
      console.log(res)
    }) 
    .catch(err => {
      console.log(err)
      console.log(err.message)
    })
  }

  const loginHandler = (cred) => { 
    axios.post("auth/signin", cred) 
    .then(res => {
      console.log(res.data.token)

      let token = res.data.token
      if(token != null){
        localStorage.setItem("token", token)
        let user = jwt_decode(token)
        setIsAuth(true)
        setUser(user)
        // return <Navigate to='/books' />
      } 
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  const logoutHandler = (e) => {
    e.preventDefault() //do not reload the page
    localStorage.removeItem("token");
    setIsAuth(false)
    setUser(null)
  }

  return (

     <>
    
        <Router>
          <nav className='nav'>
            {/* <h3 className='logo'>Dive 🤿 Jet</h3>  */}
            <img className='logo' src={logo} alt="r" />
            <ul className='ulNav'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li>{isAuth? <Link to ="/profile">Profile</Link> : <Link to="/signup">Signup</Link>}</li>
              <li>{isAuth? <Link to="/logout" onClick={logoutHandler}>Logout</Link> : <Link to="/signin">Signin</Link>}</li> 
              <li></li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/signup" element={ <Signup register={registerHandler}></Signup> }></Route>
            <Route path="/signin" element={<Signin login={loginHandler}></Signin>}></Route>
            
            <Route path="contact" element={<Contact />}></Route>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
          </Routes>

          <footer>
          <div>
            {/* <h3 className='logoFooter'>Dive 🤿 Jet</h3> */}
            <img className='logoFooter' src={logo} alt="r" />

            <div className='contact'>
              <h6>PHONE : +97317558899 </h6>
              <h6>Email : info@divejet.com</h6>
              <h6>Location : Building 1306, 346 Rd 4625, Manama</h6>
            </div>
            <div className='quick'>
              <h6>QUICK LINKS</h6>
              <h6 className='links'><Link to="/">Home</Link> <br></br>
               <Link to="/about">about</Link><br></br>
               <Link to="/contact">Contact us</Link></h6>
              
            </div>
          </div>
        </footer>
        </Router>
    </>
  
  )
}