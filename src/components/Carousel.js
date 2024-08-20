import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

const Carousel = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <BootstrapCarousel>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src="https://images.yourstory.com/cs/5/80396100-2d6d-11e9-aa97-9329348d4c3e/21551115443458.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=3840&q=75"
            alt="First slide"
            style={{
              height: '500px', // Set a fixed height for consistency
              objectFit: 'cover', // Ensure the image covers the container
              width: '100%', // Make sure the image takes full width
            }}
          />
          <BootstrapCarousel.Caption>
            <h3>Welcome to Our School</h3>
            <p>Providing quality education for a bright future.</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src="https://www.shutterstock.com/image-photo/exterior-view-typical-american-school-260nw-1965106786.jpg"
            alt="Second slide"
            style={{
              height: '500px', // Set a fixed height for consistency
              objectFit: 'cover', // Ensure the image covers the container
              width: '100%', // Make sure the image takes full width
            }}
          />
          <BootstrapCarousel.Caption>
            <h3>Modern Facilities</h3>
            <p>Equipped with state-of-the-art resources for learning.</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src="https://images.picxy.com/cache/2019/7/8/bf4a6e604477fcf03a5574f4a84dfc48.jpg"
            alt="Third slide"
            style={{
              height: '500px', // Set a fixed height for consistency
              objectFit: 'cover', // Ensure the image covers the container
              width: '100%', // Make sure the image takes full width
            }}
          />
          <BootstrapCarousel.Caption>
            <h3>Experienced Faculty</h3>
            <p>Learn from the best in the field.</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
    </div>
  );
};

export default Carousel;
