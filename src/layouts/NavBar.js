import '../styles/NavBar.css';

const NavBar = () => (
  <navbar>
    <a href="/" className="logoAnc">
      <h1 data-testid="navbar-heading">IndianMedicalColleges</h1>
    </a>
    <a href="/" className="btnAnc">
      <button type="button">
        Home
      </button>
    </a>
  </navbar>
);

export default NavBar;
