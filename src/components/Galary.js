import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Array of image URLs for the gallery
  const images = [
    'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
    'https://3.imimg.com/data3/SC/FP/MY-8077462/students-school-college-tour-package-500x500.jpg',
    'https://www.dpwis.com/Uploads/fileupload/982DSC_3466.jpg',
    'https://www.shutterstock.com/image-photo/group-kids-school-volunteer-charity-260nw-619627493.jpg',
    'https://www.rvasia.org/sites/default/files/styles/max_width_770px/public/2021-10/kg_pc_1.jpg?itok=hlhSp4gs',
    'https://adityaschool.co.in/wp-content/uploads/2024/02/AEMSs-Student-Sai-Yogesh-Shirke-clinched-Gold-Medal-in-National-Gymnastics-Championship-1-450x480.png',
    'https://assets.thehansindia.com/h-upload/2022/02/15/1276981-meru-international-school.webp',
    'https://www.teachermagazine.com/assets/images/teacher/Retracing-the-story-of-schoolteachers.jpg',
    'https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0=',
  ];

  return (
    <section id="gallery" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Gallery</h2>
        <Row>
          {images.map((url, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card>
                <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{ 
                    overflow: 'hidden', 
                    transition: 'transform 0.3s ease-in-out',
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)' // Zoom effect
                  }}
                >
                  <Card.Img 
                    variant="top" 
                    src={url} 
                    alt={`Gallery image ${index + 1}`} 
                    style={{ 
                      width: '100%', 
                      height: '200px', // Fixed height for all images
                      objectFit: 'cover', // Ensures images cover the area without distortion
                      transition: 'transform 0.3s ease-in-out'
                    }} 
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
