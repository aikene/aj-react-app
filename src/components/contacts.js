import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Contacts = ({ contacts }) => {
  return (
    <div className="grid">
        {contacts.map((contact) => (
        <Card style={{ width: '18rem' }} className="box" key={contact.id}>
          <Card.Body>
            <Card.Title>{contact.first_name} {contact.last_name}</Card.Title>
            <Card.Text>{contact.team.full_name}</Card.Text>
            <footer>{contact.position}</footer>
            <Button onClick={() => window.open("https://www.nba.com/players") } variant="primary">Head to NBA</Button>
          </Card.Body>
        </Card>
        ))}
    </div>
  )
};

export default Contacts