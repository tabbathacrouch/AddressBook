import React, { useState } from "react";
import "./ContactsList.css";

function ContactCard({ id, name, street, city, stateName, zip }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      key={id}
      data-testid={`contact-${name}`}
      className="contact"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <p>Name: <span data-testid={`contact-${name}-name`}>{name}</span></p>
      {isExpanded && (
        <>
          <p>Street: <span data-testid={`contact-${name}-street`}>{street}</span></p>
          <p>City: <span data-testid={`contact-${name}-city`}>{city}</span></p>
          <p>State: <span data-testid={`contact-${name}-stateName`}>{stateName}</span></p>
          <p>Zip: <span data-testid={`contact-${name}-zip`}>{zip}</span></p>
        </>
      )}
    </div>
  );
}

function ContactsList({ contacts }) {
  return (
    <div className="contacts-map">
      {contacts.map((contact) => (
        <ContactCard
          name={contact.name}
          street={contact.street}
          city={contact.city}
          stateName={contact.stateName}
          zip={contact.zip}
        />
      ))}
    </div>
  );
}

export default ContactsList;
