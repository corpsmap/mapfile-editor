import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import Monaco from '../components/Editor';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Filelist from '../components/FileList'

function Editor (props) {
  return (
      <Container>
        <h1>Editor Page</h1>
        <Row>
          <Col>
            <Monaco/>
          </Col>
        </Row>
        <Row>
          <Filelist/>
        </Row>
      </Container>
    
  )
}

export default Editor
