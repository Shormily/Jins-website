import Testimonial from "../Testimonial/Testimonial";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="bg-colors">
        <div className="container threend-part">
          <div className="cards">
            <div className="card">
            <img className="imgs " src="/src/assets/image/jins1.png" alt="" />
            <div className="hero-texts">
              <p className="text-mx">মেনস ডেনিম জিন্স প্যান্ট</p>
            </div>
            </div>
            <div className="card">
            <img className="imgs " src="/src/assets/image/jins2.png" alt="" />
            <div className="hero-texts">
              <p className="text-mx">মেনস ডেনিম জিন্স প্যান্ট</p>
            </div>
            </div>
            <div className="card">
            <img className="imgs " src="/src/assets/image/jins3.png" alt="" />
            <div className="hero-texts">
              <p className="text-mx">মেনস ডেনিম জিন্স প্যান্ট</p>
            </div>
            </div>
            <div className="card">
            <img className="imgs " src="/src/assets/image/jins4.png" alt="" />
            <div className="hero-texts">
              <p className="text-mx">মেনস ডেনিম জিন্স প্যান্ট</p>
            </div>
            </div>
            
          </div>
          <p className="dot">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - 
          </p>
          <h1 className="about-tag">আমাদের ডেনিম ও জিন্সের কিছু বৈশিষ্ট্য</h1>

          <div className="display-flex">
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> ডেনিম
              ফেব্রিক ১০০% কটন টুইল বা স্টেচ টুইল দিয়ে তৈরি হয়।
            </p>
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> সহজে
              ভাঁজ পড়ে না। ফলে আয়রনের ঝামেলা ছাড়াই পরা যায়।
            </p>
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> সহজে
              ভাঁজ পড়ে না। ফলে আয়রনের ঝামেলা ছাড়াই পরা যায়।
            </p>
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> Fজিন্স
              বারবার ধোয়ার প্রয়োজন হয় না।
            </p>
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> দীর্ঘদিন
              ব্যবহার করা যায়।
            </p>
            
          </div>
         
        </div>
       
      </div>
      <Testimonial/>
    </>
  );
};

export default About;
