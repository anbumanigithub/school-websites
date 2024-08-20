import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AdmissionInquiryForm from './AdmissionInquiryForm';

const Section1 = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const cardData = [
    {
      image: 'https://www.thoughtco.com/thmb/TOV_4R2lcb4PH7B1tjJoVew6O74=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/teacher-standing-in-front-of-a-class-of-raised-hands-dv1940073-5b42b097c9e77c00371ba22c.jpg',
      title: 'Engaged Classroom',
      description: 'In an engaged classroom, students actively participate and contribute to discussions, making learning a collaborative effort.'
    },
    {
      image: 'https://images.news18.com/ibnlive/uploads/2022/08/shutterstock_570197581.jpg',
      title: 'Learning in Progress',
      description: 'Continuous learning is essential for both students and teachers. Here, we see students deeply involved in their studies.'
    },
    {
      image: 'https://go.panoramaed.com/hubfs/get-to-know-you-questions-for-students.jpeg',
      title: 'Interactive Session',
      description: 'Interactive sessions help break the ice and foster a sense of community among students, encouraging them to express their thoughts.'
    },
    {
      image: 'https://media.istockphoto.com/id/1410336912/photo/happy-teacher-and-schoolgirl-giving-high-five-during-class-at-school.jpg?s=612x612&w=0&k=20&c=waX0PDd_PLqbyY6yBkIj-AL_7RD0J0hzjLHi1S7f8Eo=',
      title: 'Celebrating Success',
      description: 'Celebrating achievements, big or small, motivates students and creates a positive learning environment.'
    },
    {
      image: 'https://www.waterford.org/wp-content/uploads/2019/04/iStock-610839440.jpg',
      title: 'Focused Learning',
      description: 'Focused learning allows students to dive deeper into subjects, fostering a strong understanding of key concepts.'
    },
    {
      image: 'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/images/articles/4bdab05a4c3386108dd155f3fd01eb2ac22f66e5.jpg',
      title: 'Class Discussion',
      description: 'Class discussions encourage critical thinking and help students articulate their ideas and perspectives.'
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card" style={{ overflow: 'hidden', position: 'relative' }}>
              <div
                className="card-img-wrapper"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{ overflow: 'hidden' }}
              >
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={`Card ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '200px', // Set a fixed height for all images
                    objectFit: 'cover', // Ensure images cover the area
                    transition: 'transform 0.3s ease-in-out',
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)', // Zoom effect
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <a href="!#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4" style={{ backgroundColor: 'grey', padding: '20px' }}>
        <h4>Schedule a Visit</h4>
        <Button onClick={handleShowForm} className="btn btn-primary mt-4">
          Click here to schedule a visit
        </Button>
      </div>

      <AdmissionInquiryForm show={showForm} handleClose={handleCloseForm} />
    </div>
  );
};

export default Section1;
