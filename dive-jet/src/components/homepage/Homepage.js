import React, { useEffect , useState } from 'react'
import movie1 from '../homepage/movie1.mp4'
// import img1 from '../homepage/scuba-diver.png'
// import img2 from '../homepage/oxygen-tank.png'
// import img3 from '../homepage/ocean.png'
// import img4 from '../homepage/diving.png'
import axios from 'axios'


export default function Homepage() {
  const [weather, setWeather] = useState({
    wind: 'speed',
    weather: 'discription',
    main: '{}'

 });

  useEffect(() => {
    weatherHandler()
  }, [])

  const weatherHandler = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=manama&lat=44.34&lon=10.99&appid=074111d3a571fcaa1b5b953f58a185a4&units=metric`)

    setWeather(response.data)
    console.log(response.data)

  }
  return (
    <div className='home' >

      <div className='overlay'></div>

      <video src={movie1} autoPlay loop muted/>
      <div className='title'><h3>Welcome To The Oceans World</h3></div>

      <div className='part2'>
        <h3 className='quote'> “  75% of the Earth is water. <br></br> Divers live on a much bigger planet. ” </h3>
        <p className='quote1'>Fouder & CEO</p>

        <img className='first' src="https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        <img className='second' src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        <img className='base' src="https://images.unsplash.com/photo-1580019542155-247062e19ce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80" alt="" />

        <div className='services'>
          {/* <a href="/courses"><img className='pics' src='https://divemagazine.com/wp-content/uploads/learning-to-dive-pool-training.jpg' alt="scuba-diver" /></a> */}
          {/* <a href="/courses"><img className='pics' src='https://www.tripsavvy.com/thmb/GiaEltqBKCTRFjUt2dlz3wsjIuM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-597572085-584819855f9b5851e593fd0b-5c336fd646e0fb0001d39014.jpg' alt="scuba-diver" /></a> */}
          <a href="/courses"><img className='pics' src='https://baliocean.com/wp-content/uploads/2020/02/blog-images-BSB-january-1024x683.jpg' alt="scuba-diver" /></a>
          {/* <a href="/rent-item"><img className='pics' src='https://static9.depositphotos.com/1609929/1100/i/600/depositphotos_11008562-stock-photo-scuba-gear.jpg' alt="oxygen-tank" /></a> */}
          <a href="/rent-item"><img className='pics' src='https://www.tripsavvy.com/thmb/1Kb4aOEh0hulYSUdvc2lfYp9xUU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-set-of-scuba-diving-equipment--scuba-gear-and-accessories--1223442535-7472dd1b3cc647b7a0240e4ff28577c1.jpg' alt="oxygen-tank" /></a>
          <a href="/"><img className='pics' src='https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/07/13/9e617f7e-b5fd-4336-a894-1a62e6b716b1/scuba-diving-uk' alt="ocean" /></a>
          <a href="/"><img className='pics' src='https://samujana.com/wp-content/uploads/1-1.jpg' alt="diving" /></a>
          
          <div className='pages'>
          <h4 className='pagestitle'>Diving Courses</h4>
          <h4 className='pagestitle'>Rent Equipments</h4>&nbsp;&nbsp;&nbsp;&nbsp;
          <h4 className='pagestitle'>Adventures</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h4 className='pagestitle'>Blogs</h4>
          </div>
        </div>

        <div className='divingTitle'>
          <h2>Join Our Group Diving</h2> <br></br>
          <h5>We welcome anyone who likes to dive with us, talk diving, and join us for fun dives . . .</h5>
        </div>
        <div className='g1'>
        <img className='pics1' src="https://www.planetdiveholidays.com/blog/wp-content/uploads/sites/3/2016/08/group-diving.jpg" alt="scuba-diver" />
        <p className='par'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                          dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                          Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                          sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
        </p>
        </div>


        <div className='g1'>
        <img className='pics1' src="https://www.blackfrogdivers.com/wp-content/uploads/2021/03/Scuba-diving-groups_diving-holiday_diving-with-friends_organize-a-diving-group_holiday-in-Spain.jpg" alt="oxygen-tank" />
        <p className='par'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                          dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                          Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                          sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
        </p>
        </div>


        <div className='g1'>
          <img className='pics1' src="https://images.unsplash.com/photo-1595323397978-65433d24fc23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="oxygen-tank" />
          <p className='par'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
          </p>
        </div>



        <div className='bor'>
        <div className="weather-data">
          <p className='description'>{weather.weather[0].description}</p>
          <p className='temperature'>{Math.round(weather.main.temp)}&deg;C</p>
          <div className='details'>
            <p>Humidity</p>
            <span>{weather.main.humidity}%</span>
          </div>
          <div className='details'>
            <p>Wind Speed</p>
            <span>{weather.wind.speed} m/s</span>
            
          </div><br></br>
          <h3 className='ready'>Ready To Dive 🥽 ?</h3>
        </div>
        </div>


      </div>
    </div>
  )
}
