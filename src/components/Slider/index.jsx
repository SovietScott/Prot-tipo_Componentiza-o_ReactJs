import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';


const IMAGES = [
  {url: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
  {url: 'https://images.unsplash.com/photo-1465426721606-27b1239015fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'},
  {url: 'https://images.unsplash.com/photo-1621962728420-a7328f6ea8ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
  {url: 'https://images.unsplash.com/photo-1512207846876-bb54ef5056fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
  {url: 'https://thumbs.dreamstime.com/z/beauty-products-cosmetic-woman-makeup-decorated-star-confetti-gray-table-top-view-flat-lay-style-banner-format-beauty-150726529.jpg'},
  {url: 'https://thumbs.dreamstime.com/z/bottles-health-beauty-products-color-isolated-white-background-69451300.jpg'},
];

const Slider = () => {

  return(
    <SimpleImageSlider className='id' width={'100%'} height={800} images={IMAGES} 
    showNavs={true} startIndex={0} showBullets={true} bgColor={'purple'}
    navStyle={2} 
    />
  );
};

export default Slider;