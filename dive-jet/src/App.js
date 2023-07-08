import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Signup from './components/user/Signup'
import Signin from './components/user/Signin'
import axios from 'axios'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import Homepage from './components/homepage/Homepage'
import Items from './components/items/Items'
import Cart from './components/cart/Cart'
import Counter from './components/cart/Counter'
import About from './components/about/About'
import './CSS/items.css'
import data from './data'

import Contact from './components/contact/Contact'
import './CSS/homepage.css'
import './CSS/about.css'

export default function App(){


  const [isAuth, setIsAuth] = useState(false);    // check if the user is authenticated or not (logged in or not)
  const [user, setUser] = useState({}); // Contain User, if any.
  // const [items] = useState([])
  const { products } = data;
  const [cartItems, setCartItems] = useState([])
  const [countCartItems, setCountCartItems] = useState(0)

  // let countCartItems = 0

  const onAdd = (product) => {
    console.log("id is", product._id)
    console.log('cartitems', cartItems[0])
    const exist = cartItems.find(x => x._id === product._id)
    console.log('exist', exist)
    setCountCartItems (countCartItems +1)

    console.log(countCartItems)
    if (exist && Object.keys(exist).length) {
      console.log("existing:")
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      console.log("cart items in else block:")
      product.qty = 1
      const updatedCart = [...cartItems, product]
      setCartItems(updatedCart)
    }
    console.log(cartItems)
  }

  const onRemove = (product) => {
    console.log(product._id)
    setCountCartItems (countCartItems - 1)

    console.log(countCartItems)

    const exist = cartItems.find(x => x._id === product._id)
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((x) =>
          x._id !== product._id
        )
      )
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token != null) {
      let user = jwt_decode(token)

      setIsAuth(true)
      setUser(user)
    } else if (!user) {
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
        if (token != null) {
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
          <h3 className='logo'>Dive 🤿 Jet</h3>
          <ul className='ulNav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/rent-item">Rent Items</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/cart" > <Counter const countCartItems={countCartItems}></Counter>   </Link></li>

            <li><Link to="/logout" onClick={logoutHandler}>Logout</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<Signup register={registerHandler}></Signup>}></Route>
          <Route path="/signin" element={<Signin login={loginHandler}></Signin>}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/rent-item" element={<Items products={products} onAdd={onAdd} />}></Route>
          <Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>

        <footer>

          <div>
            <h3 className='logoFooter'>Dive 🤿 Jet</h3>
            <div className='contact'>
              <h6>PHONE : +97317558899 </h6>
              <h6>Email : info@divejet.com</h6>
              <h6>Location : Building 1306, 346 Rd 4625, Manama</h6>
            </div>
            <div className='quick'>
              <h6>QUICK LINKS</h6>
              <h6 className='links'><Link to="/">Home</Link> <br></br>
                <Link to="/about">about</Link><br></br>
                <Link to="/signup">Signup</Link></h6>

            </div>
          </div>
        </footer>
      </Router>
    </>

  )
}