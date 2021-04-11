import './App.css';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p className="App-find">Find contacts by name</p>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
