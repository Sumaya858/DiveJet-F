import React from 'react'
import movie1 from '../homepage/movie1.mp4'
import img1 from '../homepage/scuba-diver.png'
import img2 from '../homepage/oxygen-tank.png'
import img3 from '../homepage/ocean.png'
import img4 from '../homepage/diving.png'
export default function Homepage() {
  return (
    <div className='home' >

        <div className='overlay'></div>

        <video src={movie1} autoPlay loop muted/>
        <div className='title'>
            <h3>Welcome to our Website</h3>
        </div>

        <div className='part2'>
            <h3 className='quote'> “  75% of the Earth is water. <br></br> Divers live on a much bigger planet. ” </h3>
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



        </div>

        



    </div>
  )
}
