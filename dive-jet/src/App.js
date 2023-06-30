import{BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import Signup from './components/user/Signup'
import Signin from './components/user/Signin'
import axios from 'axios'
import { useEffect , useState } from 'react'
import jwt_decode from 'jwt-decode'

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
    axios.post("auth/signup", user) //user here will contain json object
    .then(res => {
      console.log(res)
    }) 
    .catch(err => {
      console.log(err)
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
        return <Navigate to='/books' />
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
    
        <h1>Dive Jet</h1>
        <Router>
          <nav>
            <div>
              <Link to="/signup">Signup</Link> &nbsp;
              <Link to="/signin">Signin</Link> &nbsp;
              <Link to="/logout"onClick={logoutHandler}>Logout</Link> 
            </div>
          </nav>
          
          <Routes>
            <Route path="/signup" element={ <Signup register={registerHandler}></Signup> }></Route>
            <Route path="/signin" element={<Signin login={loginHandler}></Signin>}></Route>
          </Routes>
        </Router>
    </>
  
  )
}