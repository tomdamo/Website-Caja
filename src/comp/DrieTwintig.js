import './drietwintig.css'
import Card from 'react-bootstrap/Card';
import images from './images';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




export function DrieTwintig(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
    <h1>2022 gallery</h1>
    <p>click on the image!</p>
    <div>
      
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Kind regards</ModalHeader>
        <ModalBody>
        Oil and paste medium on canvas <br/>
        40x35cm <br/>
        2022
        </ModalBody>
      </Modal>
    </div>

    <div className='photo-grid'>
      <div className='card'>
        <img src={images.pl1} onClick={toggle}></img>
      </div>
      <div className='card'>
        <img src={images.pl2}></img>
      </div>
      <div className='card'>
        <img src={images.pl3}></img>
      </div>
      <div className='card'>
        <img src={images.pl4}></img>
      </div>
      <div className='card'>
        <img src={images.pl5}></img>
      </div>
      <div className='card'>
        <img src={images.pl6}></img>
      </div>
      <div className='card'>
        <img src={images.pl7}></img>
      </div>
      <div className='card'>
        <img src={images.pl8}></img>
      </div>
      <div className='card'>
        <img src={images.pl9}></img>
      </div>
      <div className='card'>
        <img src={images.pl10}></img>
      </div>
      <div className='card'>
        <img src={images.pl11}></img>
      </div>
      <div className='card'>
        <img src={images.pl2}></img>
      </div>
      <div className='card'>
        <img src={images.pl13}></img>
      </div>
      <div className='card'>
        <img src={images.pl14}></img>
      </div>
      <div className='card'>
        <img src={images.pl15}></img>
      </div>
      <div className='card'>
        <img src={images.pl16}></img>
      </div>
      <div className='card'>
        <img src={images.pl17}></img>
      </div>
      <div className='card'>
        <img src={images.pl18}></img>
      </div>
      <div className='card'>
        <img src={images.pl19}></img>
      </div>
      <div className='card'>
        <img src={images.pl20}></img>
      </div>
      <div className='card'>
        <img src={images.pl21}></img>
      </div>
      <div className='card'>
        <img src={images.p22}></img>
      </div>
      <div className='card'>
        <img src={images.p23}></img>
      </div>
      <div className='card'>
        <img src={images.p24}></img>
      </div>
      <div className='card'>
        <img src={images.p25}></img>
      </div>
      <div className='card'>
        <img src={images.p26}></img>
      </div>
      <div className='card'>
        <img src={images.p27}></img>
      </div>
      <div className='card'>
        <img src={images.p28}></img>
      </div>
      <div className='card'>
        <img src={images.pl29}></img>
      </div>
    </div>
    </>
  );
}


