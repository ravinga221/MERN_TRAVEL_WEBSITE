import React from 'react';
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';


const Home = () => {
  return (
    <>
    {/* ===========hero section start============ */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero_subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt='world' />
              </div>
              <h1>Traveling opens the door to creating 
              <span className="highLight"> memories </span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nisi est temporibus cumque in deleniti maiores nobis qui 
                  similique voluptate molestias dolor, repellendus facere 
                  numquam recusandae cum rerum soluta eaque suscipit </p>
            </div>
          </Col>

          <Col lg='2'>
          <div className="hero_Img_Box">
            <img src={heroImg}  alt=''/>
          </div>
          </Col>
          <Col lg='2'>
          <div className="hero_Img_Box mt-4">
            <video src={heroVideo}  alt='' controls/>
          </div>
          </Col>
          <Col lg='2'>
          <div className="hero_Img_Box mt-5">
            <img src={heroImg02}  alt=''/>
          </div>
          </Col>

          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/* ===========hero section end============ */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services_subtitle'>What we serve</h5>
            <h2 className='services_title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    {/* =============featured tour section start============ */}
    <section className='featured_tour_section'>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className='featured_tour_title'>Our Featured Tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
      </section>
    {/* =============featured tour section end============ */}
    </>
  );
};

export default Home;