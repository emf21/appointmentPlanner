import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState("");

  // authenticate duplication
  useEffect(() => {
    let checker = contacts.map((contact) => contact.name).indexOf(name);
    if (checker !== -1) {
      setDuplicate(true);
      console.log("name already exist");
    } else {
      setDuplicate(false);
      console.log("name not taken");
    }
  }, [contacts, name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);

      //  clearing form to default
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arrayList={contacts} />
      </section>
    </div>
  );
};
