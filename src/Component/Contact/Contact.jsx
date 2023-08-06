import img from "/src/assets/image/img.png";
import img1 from "/src/assets/image/img1.png";
import img2 from "/src/assets/image/img2.png";
import "./Contact.css";
const Contact = () => {
 
  return (
    <>
      <div className="bg-colores  ">
        <div className="carded ">
          <div className="cardm">
            <img className="imgse " src={img1} alt="" />

            <h2 className="textras">Jacob Jones</h2>
            <p className="textrs">Buffalo, NJ</p>
            <p className="textras">- - - - - - - - - - - - - - - - </p>
            <p className="textra">
              Sociable on as carriage my position weddings raillery consider.
              Peculiar trifling absolute and wandered.
            </p>
          </div>
          <div className="cardme">
            <img className="imgse " src={img} alt="" />
            <h2 className="textme">Jacob Jones</h2>
            <p className="textmss">Buffalo, NJ</p>
            <p className="textmses">- - - - - - - - - - - - - - - - </p>
            <p className="txtsa">
              Sociable on as carriage my position weddings raillery consider.
              Peculiar trifling absolute and wandered.
            </p>
          </div>
          <div className="cardm ">
            <img className="imgse " src={img2} alt="" />

            <h2 className="textras">Jacob Jones</h2>
            <p className="textrs">Buffalo, NJ</p>
            <p className="textras">- - - - - - - - - - - - - - - - </p>
            <p className="textra">
              Sociable on as carriage my position weddings raillery consider.
              Peculiar trifling absolute and wandered.
            </p>
          </div>
        </div>
        <div className="justifis">
        <i className="fa-solid fa-arrow-left icn "></i>  <i className="fa-solid fa-arrow-right icns"></i>
        </div>
       
      </div>
    
    </>
  );
};

export default Contact;
