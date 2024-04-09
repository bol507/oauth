import { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useUser } from '@/contexts/userContext';
interface DashboardProps {
  user: {
    avatar_url: string;
    name: string;
    bio: string;
    html_url: string;
  };
}

const Dashboard = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }
  return (
    <div className="App  text-center container-fluid">
      <h1>Welcome!</h1>
      <p>This is a simple integration between OAuth2 on GitHub with Node.js</p>

      <Container>
        <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
          <Col>
            <Card style={{ maxWidth: '25%', margin: 'auto' }}>
              <Card.Img variant="top" src={user.avatar_url} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.bio}</Card.Text>
                <Button variant="primary" target="_blank" href={user.html_url}>
                  GitHub Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
