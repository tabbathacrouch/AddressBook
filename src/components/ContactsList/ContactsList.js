import React, { useState } from "react";
import "./ContactsList.css";

function ContactCard({ id, name, street, city, stateName, zip }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      key={id}
      className="contact"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <p>Name: {name}</p>
      {isExpanded && (
        <>
          <p>Street: {street}</p>
          <p>City: {city}</p>
          <p>State: {stateName}</p>
          <p>Zip: {zip}</p>
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
