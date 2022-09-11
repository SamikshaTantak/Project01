import image from '../Assets/HPimage.jpg'
const section = () => {
    return(<>

  <div className="container">
    <div className="row">
    <div className="col">
      <img src={image} align="right" width="650" height="400" id="image"></img>
    </div>
    <div class="col">
      <div className="row" id="text">
      <br></br>Let’s Explore India !!<br></br>
      India is an ancient country. Historical 
      monuments, archaeological wealth and
      relics are spread all over the country. 
      Therefore, people of various countries 
      come to India every year to see innumerable
      lovely spots, historic sites... <br></br>
      We can help you!!<br></br>
      </div> <br></br>

      <div className="row">
      <button id="start" width="10" height="10">Get Started </button>
      </div>
    </div>
  </div>
  
</div>

    </>)
}
export default section;