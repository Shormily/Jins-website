import Contact from "../Contact/Contact";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <>
      <div className="containers">
        <div className="image-container">
          <img
            className="center-image"
            src="/src/assets/image/jeans.png"
            alt="My Image"
          />
        </div>
      </div>
      <h1 className="texts">
        লেনদেনকালে কিভাবে নিরাপদ থাকবেন তার কিছু নির্দেশনাবলী
      </h1>
      <div className="containers">
        <p className="border-text">
          প্রোডাক্টটি ভালোভাবে যাচাই করে নিন এবং পুরোপুরি সন্তুষ্ট হলে তারপর দাম
          পরিশোধ করুন।
        </p>
        <p className="border-texts">
          প্রোডাক্ট ও অর্থ দুটোই একই সময় লেনদেন করুন
        </p>
        <div className="image-containers">
        <img
            className="center-image "
            src="/src/assets/image/design.jpg"
            alt="My Image"
        
          />
        </div>
     

      </div>
<Contact/>

    </>
  );
};

export default Testimonial;
