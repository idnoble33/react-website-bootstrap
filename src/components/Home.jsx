import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Codelife at Vog App Developer</h2>
          <p>This is my React journey to build a website with React, React-Router & React-Bootstrap. Just started this project.My goal is to improve myself daily and bring the best out of it</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="nba-wrapper">
            <Image src="images/nba-1.jpg" circle className="profile-pic"/>
            <h3>Kobe</h3>
            <p>Kobe Bean Bryant (born August 23, 1978) is an American former professional basketball player. He played his entire 20-year career with the Los Angeles Lakers of the National Basketball Association (NBA). He entered the NBA directly from high school and won five NBA championships. Bryant is an 18-time All-Star, 15-time member of the All-NBA Team, and 12-time member of the All-Defensive team. He led the NBA in scoring during two seasons and ranks third on the league's all-time regular season scoring and fourth on the all-time postseason scoring list. He is widely regarded as one of the greatest basketball players of all time.[3][4][5][6] Bryant is the first guard in NBA history to play at least 20 seasons.</p>
          </Col>
          <Col xs={12} sm={4} className="nba-wrapper">
            <Image src="images/nba-2.jpg" circle className="profile-pic"/>
            <h3>Mason</h3>
            <p>Brook Robert Lopez (born April 1, 1988) is an American professional basketball player for the Milwaukee Bucks of the National Basketball Association (NBA). He was selected 10th overall by the Nets in the 2008 NBA draft, after playing two years of college basketball for the Stanford Cardinal. In 2013, Lopez was selected to play in his first NBA All-Star Game. His twin brother Robin Lopez is also an NBA player.</p>
          </Col>
          <Col xs={12} sm={4} className="nba-wrapper">
            <Image src="images/nba-3.jpg" circle className="profile-pic"/>
            <h3>Lebron</h3>
            <p>LeBron Raymone James Sr. (/ləˈbrɒn/; born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). He is often regarded as the greatest basketball player of all time.[1][2][3][4] His accomplishments include three NBA championships, four NBA Most Valuable Player Awards, three NBA Finals MVP Awards, and two Olympic gold medals. James has appeared in fifteen NBA All-Star Games and been named NBA All-Star MVP three times. He won the 2008 NBA scoring title, is the all-time NBA playoffs scoring leader, and is fourth in all-time career points scored. He has been voted onto the All-NBA First Team twelve times and the All-Defensive First Team five times.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
