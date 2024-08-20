import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* School Information Section */}
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
              Vruksha International School of Montessori provides a nurturing environment for children to learn and grow. We are dedicated to offering quality education with a focus on holistic development.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="!#" className="text-light"  style={{textDecoration:"none"}}>Home</a></li>
              <li><a href="!#" className="text-light"  style={{textDecoration:"none"}}>About</a></li>
              <li><a href="!#" className="text-light"  style={{textDecoration:"none"}}>Admission</a></li>
              <li><a href="!#" className="text-light"  style={{textDecoration:"none"}}>Contact</a></li>
              <li><a href="!#" className="text-light"  style={{textDecoration:"none"}}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information Section and Map Section */}
          <div className="col-md-4 mb-4 d-flex flex-column">
            <div>
              <h5>Contact Us</h5>
              <p>
                <i className="fas fa-map-marker-alt"></i> 123 Montessori Street,Sholinganalore,chennai <br />
                <i className="fas fa-phone"></i> +91 94444 81438<br />
                <i className="fas fa-envelope"></i> info@vrukshamontessori.com
              </p>
            </div>
            <div className="mt-4">
              <h5>Find Us</h5>
              <div className="map-responsive" style={{ position: 'relative', paddingTop: '50%', height: '200px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.478719930953!2d144.9630579156587!3d-37.81410767975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1d564b3%3A0x5045675218ce840!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1632936485123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="School Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Vruksha International School of Montessori. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
