import React from 'react'
import data from "../data.json";
import premium from "../assets/PS.webp";
import { Link } from 'react-router-dom';

export const Home = () => {

  const arrow = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z"/></svg>
  return (
    <>
      <div className="home" id='home'>
        <main>
            <h2>India's #1 Jobs Site</h2>
            <p>5 Crore+ Candidates | 4 Lakh+ Companies</p>
            <div className="btn-box">
              <div>
                <h3>Want a Job?</h3>
                <Link to={"/register"}>Search for Jobs</Link>
              </div>
              <div>
                <h3>Want to hire?</h3>
                <Link to={"/register"}>Search for Candidates</Link>
              </div>
            </div>
        </main>
      </div>

      <div className="home2">
        <h2>Trusted by 4 Lakh+ Companies</h2>
        <div>
        {
            data.map(img =>{
              return(
                <div className='box'>
                  <img src={img.image} alt="" />
                </div>
              );
            })
        }
        </div>
      </div>

      <div className="home3" id='about'>
        <h1>Find a job in 3 easy steps</h1>
        <div>
          <div className='steps'>
            <h3>Create your Profile</h3>
          </div>
          {arrow}
          <div className='steps'>
            <h3>Apply for Jobs</h3>
          </div>
          {arrow}
          <div className='steps'>
            <h3>Contact HR Directly</h3>
          </div>
        </div>
      </div>

      <div className='blank'></div>

      <div className="home4" id="brands">
        <div>
          <h1>Accelerate your Job finding with Premium Services</h1>
          <div>
            <img src={premium} alt="" />
            <p></p>
          </div>
        </div>
      </div>
      <div className="white-box"></div>
    </>
  )
}

