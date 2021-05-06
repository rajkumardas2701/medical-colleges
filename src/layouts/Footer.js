import '../styles/Footer.css';

const getYear = () => {
  const d = new Date();
  return d.getFullYear();
};

const Footer = () => (
  <footer>
    <p>
      {'© '}
      {
       getYear()
      }
      {' '}
      |
      {' '}
      <b>Rajkumar Das</b>
      {' '}
      All rights reserved
    </p>
  </footer>
);

export default Footer;
