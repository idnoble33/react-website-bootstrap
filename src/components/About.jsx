import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="images/standout.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="images/aboutID.jpeg" className="about-profile-pic" rounded />
            <h3>Idowu Bello</h3>
            <p>Experienced IT professional with experience in frontend development, IT service level management, and maintenance, optimization and Agile project management. Expertise in Object Oriented Programming and software development lifecycle. Experience working with NodeJS, JavaScript, React CSS, GIT and Bootstrap. I have experience working in different industries and, organizational structures such as simple, and complex environments. I'm also quick to establish and build strong relationship across business environments with different stakeholders.</p>
            <p>Anyone can paint. You can do anything here. So don't worry about it. Life is too short to be alone, too precious. Share it with a friend. Every highlight needs it's own personal shadow.</p>
            <p>That's what makes life fun. That you can make these decisions. That you can create the world that you want. Of course he's a happy little stone, cause we don't have any other kind. It's so important to do something every day that will make you happy.</p>
            <p>You better get your coat out, this is going to be a cold painting. That's the way I look when I get home late; black and blue. That's crazy. We're trying to teach you a technique here and how to use it.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
