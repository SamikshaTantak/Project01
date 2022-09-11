import twitter from '../Assets/twitter.PNG'
import instagram from '../Assets/instagram.PNG'
const Footer = () => {
    return(<>

<div class="container" id="footer">
  <div class="row">
    <div class="col">
    <p> Need Help?      +91 11 57296440   +91 23 76286936</p>

    </div>
    <div class="col">
    <p> Developed By-  Samiksha Tantak   Saniya Shaikh  Pranali Pawar   Akshada Patil</p>

    </div>
    <div class="col">
      <p> Copyright- Travlendia|2022</p>
    </div>
  </div> <hr></hr>
  <div class="row">
      <img src={twitter} width="10" height="10"></img>
      <img src={instagram} width="10" height="10"></img>
  </div>
</div>

    </>)
}
export default Footer;