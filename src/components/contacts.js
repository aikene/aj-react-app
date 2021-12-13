import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Contacts = ({ contacts }) => {
  return (
    <div className="grid">
        {contacts.map((contact) => (
        <Card style={{ width: '18rem' }} className="box">
          <Card.Body>
            <Card.Title>{contact.name}</Card.Title>
            <Card.Text>Email: {contact.email}</Card.Text>
            <footer className="blockquote-footer">{contact.company.catchPhrase}</footer>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        ))}
    </div>
  )
};

export default Contacts