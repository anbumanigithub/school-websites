import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      image: 'https://media.istockphoto.com/id/626964604/photo/running-outside-during-recess.jpg?s=612x612&w=0&k=20&c=WOutW-I6xnkNu-WEB1ZPQZJw8i_5q8eYhytZXIeneBE=',
      title: '2nd Standard - Sports Day',
      content: 'The 2nd standard students participated in the school\'s annual Sports Day, securing second place in the 100m race. The event fostered a spirit of healthy competition and teamwork.',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1663047290215-ca30fdbd0423?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FyYXRlJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D',
      title: '5th Standard - Cultural Fest',
      content: 'The 5th standard students excelled in the school\'s Cultural Fest, winning first place in the group dance competition. The event highlighted their creativity and collaboration.',
    },
    {
      image: 'https://www.dailypioneer.com/uploads/2022/story/images/big/yoga-in-schools-for-wellbeing-2022-09-14.jpg',
      title: '8th Standard - Yoga Day',
      content: 'The 8th standard students led the school\'s Yoga Day event, demonstrating various yoga poses and promoting health and mindfulness among their peers.',
    },
    {
      image: 'https://www.ihf.info/sites/default/files/images/2.jpg',
      title: '9th Standard - Handball Tournament',
      content: 'The 9th standard handball team competed in the inter-school tournament, performing exceptionally well and securing second place after a series of challenging matches.',
    },
    {
      image: 'https://blog.khelomore.com/wp-content/uploads/2017/12/IMG_2326.jpg',
      title: '10th Standard - Volleyball Championship',
      content: 'In the 10th standard, the school\'s volleyball team reached the finals of the district-level championship, finishing as strong runners-up.',
    },
    {
      image: 'https://c8.alamy.com/comp/2M4N9MM/school-students-playing-volleyball-in-playground-stock-photos-2M4N9MM.jpg',
      title: '12th Standard - Volleyball Finals',
      content: 'The 12th standard volleyball team advanced to the finals of the state-level competition, showcasing excellent teamwork and securing a second-place finish.',
    },
  ];

  return (
    <section className="overflow-hidden py-5 py-md-6 py-lg-7">
      <Container>
        <Row id="filterable-content">
          {portfolioItems.map((item, index) => (
            <Col sm={12} md={6} lg={4} className="filter-item all web illustrator" key={index}>
              <Card className="shadow border h-100">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={`work-thumbnail-${index}`}
                  style={{ transition: 'transform 0.3s ease-in-out' }}
                  className="img-fluid"
                />
                <Card.Body>
                  <h5 className="mt-0">{item.title}</h5>
                  <p className="text-muted mb-1">{item.content}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSection;
