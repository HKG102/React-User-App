import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";



function User(props) {
  const user = props.userInfo
  return (
   
    <div className="User-card">
      <Card style={{ border: "3px solid black", width: "18rem" }}>
        <Card.Img variant="top" src={user.image} />
        <Card.Body>
          <Card.Title>{`${user.firstName} ${user.maidenName} ${user.lastName}`}</Card.Title>
          <Card.Text>{user.birthDate}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Email: {user.email}</ListGroup.Item>
          <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
          <ListGroup.Item>University: {user.university}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">{user.bloodGroup}</Card.Link>
          <Card.Link href="#">{user.gender}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default User;
