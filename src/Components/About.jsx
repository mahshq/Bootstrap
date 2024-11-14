import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';


function About() {
  return (
    <Container>
      <Row style={{padding: '60px'}}>
        <Col>
        <img src="/public/pic1.jpeg" style={{width: '400px',height: '500px'}} alt="" />
        </Col>
        <Col style={{}}>
        <h1>Why do we use it?</h1>
        <p style={{fontSize: '24px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
