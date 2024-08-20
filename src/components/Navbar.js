import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import Carousel from './Carousel';


const SchoolNavbar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
        <Container>
          {/* Logo image */}
          <Navbar.Brand href="#home">
            <img
              src="https://www.vrukshamontessori.com/images-vruksha/high/vruksha-high-logo.jpg" // Replace with your logo URL
              alt="School Logo"
              className="d-inline-block align-top"
              style={{ maxHeight: '50px' }} // Adjust size as needed
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className="text-white px-3 py-2 rounded"
                style={{ transition: 'background-color 0.3s, color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Home
              </Nav.Link>

              <Nav.Link 
                href="#about" 
                className="text-white px-3 py-2 rounded"
                style={{ transition: 'background-color 0.3s, color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                About
              </Nav.Link>

              <Dropdown>
                <Dropdown.Toggle 
                  id="dropdown-notice"
                  className="text-white px-3 py-2 rounded"
                  style={{ backgroundColor: 'transparent', border: 'none', transition: 'background-color 0.3s, color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Notice Board
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#notice1">Notice 1</Dropdown.Item>
                  <Dropdown.Item href="#notice2">Notice 2</Dropdown.Item>
                  <Dropdown.Item href="#notice3">Notice 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle 
                  id="dropdown-disclosures"
                  className="text-white px-3 py-2 rounded"
                  style={{ backgroundColor: 'transparent', border: 'none', transition: 'background-color 0.3s, color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Mandatory Disclosures
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#disclosure1">Disclosure 1</Dropdown.Item>
                  <Dropdown.Item href="#disclosure2">Disclosure 2</Dropdown.Item>
                  <Dropdown.Item href="#disclosure3">Disclosure 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle 
                  id="dropdown-events"
                  className="text-white px-3 py-2 rounded"
                  style={{ backgroundColor: 'transparent', border: 'none', transition: 'background-color 0.3s, color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Events
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#event1">Event 1</Dropdown.Item>
                  <Dropdown.Item href="#event2">Event 2</Dropdown.Item>
                  <Dropdown.Item href="#event3">Event 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle 
                  id="dropdown-students"
                  className="text-white px-3 py-2 rounded"
                  style={{ backgroundColor: 'transparent', border: 'none', transition: 'background-color 0.3s, color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Students
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#student1">Student 1</Dropdown.Item>
                  <Dropdown.Item href="#student2">Student 2</Dropdown.Item>
                  <Dropdown.Item href="#student3">Student 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle 
                  id="dropdown-blog"
                  className="text-white px-3 py-2 rounded"
                  style={{ backgroundColor: 'transparent', border: 'none', transition: 'background-color 0.3s, color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Our Blog
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#blog1">Blog Post 1</Dropdown.Item>
                  <Dropdown.Item href="#blog2">Blog Post 2</Dropdown.Item>
                  <Dropdown.Item href="#blog3">Blog Post 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link 
                href="#contact" 
                className="text-white px-3 py-2 rounded"
                style={{ transition: 'background-color 0.3s, color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Contact
              </Nav.Link>

              <Dropdown>
                <Dropdown.Toggle 
                  id="dropdown-admissions"
                  className="text-white px-3 py-2 rounded"
                  style={{ backgroundColor: '#ffc107', border: 'none', transition: 'background-color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0a800'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
                >
                  Admissions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#apply-now">Apply Now</Dropdown.Item>
                  <Dropdown.Item href="#admission-process">Admission Process</Dropdown.Item>
                  <Dropdown.Item href="#contact-admissions">Contact Admissions</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
<  Carousel/>
    </>
  );
};

export default SchoolNavbar;
