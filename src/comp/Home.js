import React, { useState } from 'react';
import {Images, homeImages} from './images';
import {CarouselComp} from './Carousel'

import { TweeTwintig } from './TweeTwintig';
import './Home.css'

function Home(args) {
  
      

  return (
    <>
    <div className='grid-container'>
    <div className='carousel'>
    <CarouselComp/>
    </div>
    {/* <div className='gallery'>
      <TweeTwintig/>
</div> */}
</div>
    </>
  );
}

export default Home;