import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Section1 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const cardImages = [
    'https://www.thoughtco.com/thmb/TOV_4R2lcb4PH7B1tjJoVew6O74=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/teacher-standing-in-front-of-a-class-of-raised-hands-dv1940073-5b42b097c9e77c00371ba22c.jpg',
    'https://images.news18.com/ibnlive/uploads/2022/08/shutterstock_570197581.jpg',
    'https://go.panoramaed.com/hubfs/get-to-know-you-questions-for-students.jpeg',
    'https://media.istockphoto.com/id/1410336912/photo/happy-teacher-and-schoolgirl-giving-high-five-during-class-at-school.jpg?s=612x612&w=0&k=20&c=waX0PDd_PLqbyY6yBkIj-AL_7RD0J0hzjLHi1S7f8Eo=',
    'https://www.waterford.org/wp-content/uploads/2019/04/iStock-610839440.jpg',
    'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/images/articles/4bdab05a4c3386108dd155f3fd01eb2ac22f66e5.jpg',
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cardImages.map((image, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card" style={{ overflow: 'hidden', position: 'relative' }}>
              <img
                src={image}
                className="card-img-top"
                alt={`Card ${index + 1}`}
                style={{
                  width: '100%',
                  height: '200px', // Set a fixed height for all images
                  objectFit: 'cover', // Ensure images cover the area
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Card title {index + 1}</h5>
                <p className="card-text">
                  This is a card with a zoom effect on hover.
                </p>
                <a href="!#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4" style={{ backgroundColor: 'grey', padding: '20px' }}>
        <h4>Schedule a Visit</h4>
        <Button onClick={handleButtonClick} className="btn btn-primary mt-4">
          Click here to schedule a visit
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Schedule a Visit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Preferred Date</label>
              <input type="date" className="form-control" id="date" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Section1;
