import logo from '../Assets/logo.jpg'
const Navbar = () => {
    return(<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" id="navbar">
  <img id="logo" src={logo} width="120" height="40"></img>
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse navbar-expand-md" id="navbarSupportedContent">
      <ul className="nav navbar-nav navbar-right mr-auto ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
            <a className="nav-link active" href="pages\about.html" tabIndex="-1" >About</a>
        </li>

        <li className="nav-item">
            <a className="nav-link active" href="pages\contactUs" tabIndex="-1">Contact Us</a>
        </li>

        <li className="nav-item">
            <button id="book">Book Now</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>)
}
export default Navbar;