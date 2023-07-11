import React, { useEffect } from 'react'
import movie1 from '../homepage/movie1.mp4'
import img1 from '../homepage/scuba-diver.png'
import img2 from '../homepage/oxygen-tank.png'
import img3 from '../homepage/ocean.png'
import img4 from '../homepage/diving.png'
import axios from 'axios'
import { useState } from 'react'
import Item from './Item'

// require('dotenv').config()

export default function Homepage(props) {
  const [weather, setWeather] = useState({
    wind: 'speed',
    weather: 'discription',
    main: '{}'

 });

  useEffect(() => {
    weatherHandler()
    // console.log(weather.weather[0].description)
    // console.log(process.env.REACT_APP_API_KEY)
  }, [])

  const weatherHandler = async () => {
    // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=manama&lat=44.34&lon=10.99&appid=${process.env.REACT_APP_API_KEY}`)
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=manama&lat=44.34&lon=10.99&appid=074111d3a571fcaa1b5b953f58a185a4`)

    setWeather(response.data)
    console.log(response.data)

     // const weather = response.data.weather[0].description;
      // const temperature = response.data.main.temp;
      // const feelsLike = response.data.main.feels_like;
      // const main = response.data.weather[0].main;

  }
  // if({weather.weather[0].description} === 'Clear'){
  //   <p>Let's Go Diving</p>
  // }

  function Weather() {
    return (
      <section>
        <Item 
          isClear={true} 
          weather="Clear" 
        />
        <Item 
          isClear={true} 
          weather="Sunny!" 
        />

        <Item 
          isClear={false} 
          weather="Cloudy!" 
        />

       <Item 
          isClear={false} 
          weather=" Windy!" 
        />
      </section>
    );
  }
  

  return (
    <div className='home' >

      <div className='overlay'></div>

      <video src={movie1} autoPlay loop muted/>
      <div className='title'><h3>Welcome to our Website</h3></div>

      <div className='part2'>
        <h3 className='quote'> "  75% of the Earth is water. <br></br> Divers live on a much bigger planet. " </h3>
        <p className='quote1'>Fouder & CEO</p>

        <img className='first' src="https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        <img className='second' src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        <img className='base' src="https://images.unsplash.com/photo-1580019542155-247062e19ce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80" alt="" />

        <div className='services'>
          <a href="/"><img className='pics' src={img1} alt="scuba-diver" /></a>
          <a href="/"><img className='pics' src={img2} alt="oxygen-tank" /></a>
          <a href="/"><img className='pics' src={img3} alt="ocean" /></a>
          <a href="/"><img className='pics' src={img4} alt="diving" /></a>
          
          <div className='pages'>
          <h4 className='pagestitle'>Diving Courses</h4>
          <h4 className='pagestitle'>Rent Equipments</h4>
          <h4 className='pagestitle'>Adventures</h4>
          <h4 className='pagestitle'>Suggestions</h4>
          </div>
        </div>

        <div className='divingTitle'>
          <h2>Join Our Group Diving</h2> <br></br>
          <h5>We welcome anyone who likes to dive with us, talk diving, and join us for fun dives ...</h5>
        </div>
        <div className='g1'>
        <img className='pics1' src="https://images.unsplash.com/photo-1517627043994-b991abb62fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=417&q=80" alt="scuba-diver" />
        <p className='par'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                          dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                          Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                          sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
        </p>
        </div>


        <div className='g1'>
        <img className='pics1' src="https://images.unsplash.com/photo-1607073521066-99ea925762c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1125&q=80" alt="oxygen-tank" />
        <p className='par'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                          dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                          Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                          sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
        </p>
        </div>
        {/* <script>{this.props.weather}</script> */}

        <p className='description'>Today's Forecase is: {weather.weather[0].description}</p>
        <p className='speed'>Wind speed is: {weather.wind.speed}</p>
        <p className='feels'>Feels Like: {weather.main.feels_like}</p>
        <p className='humidity'>Humidity: {weather.main.humidity}</p>


        


      </div>

    </div>
  )
}

