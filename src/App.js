import React, { useState } from "react";
import "./App.css";
import ContactsList from "./components/ContactsList/ContactsList";
import AddressForm from "./components/AddressForm/AddressForm";
import SearchForm from "./components/SearchForm/SearchForm";
import Header from "./components/Header/Header";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [option, setOption] = useState("name");

  const addContact = (contact) => {
    const newContact = [...contacts, contact];
    setContacts(newContact);
  };

  return (
    <div className="App">
      <Header />
      <AddressForm addContact={addContact} />
      <SearchForm
        searchString={searchString}
        setSearchString={setSearchString}
        option={option}
        setOption={setOption}
      />
      <ContactsList
        contacts={contacts.filter((contact) =>
          contact[option].includes(searchString)
        )}
      />
    </div>
  );
}

export default App;
