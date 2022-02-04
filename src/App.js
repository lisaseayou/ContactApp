
import './App.css';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import ContactList from './view/contact/components/ContactList';
import CreateContact from './view/contact/components/CreateContact'


function App() {
  return (
    <div className="App">
      <Header />
      <CreateContact />
      <ContactList />
      <Footer />
    </div>
  );
}

export default App;
