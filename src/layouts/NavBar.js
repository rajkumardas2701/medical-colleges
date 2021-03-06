import '../styles/NavBar.css';

const NavBar = () => (
  <div className="navbar">
    <a href="/" className="logoAnc">
      <h1 data-testid="navbar-heading">IndianMedicalColleges</h1>
    </a>
    <a href="/" className="btnAnc">
      <button type="button">
        Home
      </button>
    </a>
  </div>
);

export default NavBar;
