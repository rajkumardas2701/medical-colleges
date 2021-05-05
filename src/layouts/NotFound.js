import NavBar from './NavBar';
import Footer from './Footer';
import '../styles/NotFound.css';

const NotFound = () => (
  <div>
    <NavBar />
    <img src="https://culapp.co/static/media/notFound.914aef37.png" alt="Page Not Found" className="errorPage" />
    <Footer />
  </div>
);

export default NotFound;
