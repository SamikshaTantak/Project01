const Navbar = () => {
    return(<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img id="logo" src="/Assets/logo.jpg" width="30" height="24"></img>
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">About</a>
        </li>

        <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Contact Us</a>
        </li>

        <li className="nav-item">
            <button>Book Now</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>)
}
export default Navbar;