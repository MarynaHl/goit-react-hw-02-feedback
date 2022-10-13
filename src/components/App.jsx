import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import Section from './Section';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

export default class App extends Component {
  state = {
    contacts: [],
  };

  onGetDataForm = (data) => {
    const hasName = this.state.contacts.some(it => it.name === data.name);
    if (hasName) {
      Notify.warning(`Contact "${data.name}" is already exist.`);
      return;
    }

    this.setState(p => ({
      contacts: [...p.contacts, { ...data, id: nanoid() }]
    }))
  }

  deleteItem = (deletedId) => {
    this.setState(p => ({
      contacts: p.contacts.filter(({id}) => id !== deletedId)
    }))
  }

  render() {
    const {contacts} = this.state;
    return (
      <div>
        <Section title='Phonebook'>
          <ContactForm
            onSubmit={this.onGetDataForm}
          />
        </Section>
        <Section title='Contacts'>
          <Contacts
            contacts={contacts}
            onClickDelete={this.deleteItem}
          />
        </Section>
      </div>
    );
  }
}