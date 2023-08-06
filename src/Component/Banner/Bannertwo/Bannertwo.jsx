// import React from 'react';
import About from "../../About/About";
import "./Bannertwo.css";

const Bannertwo = () => {
  
   const numbers = [
    {
      id:"৩০",
    },
    {
      id:"৩২",
    },
    {
      id:"৩৪",
    },
    {
      id:"৩৬",
    }
   ]

  return (
    <>
      <div className="container twond-part">
        <div>
          <img
            className="twond-img"
            src="/src/assets/image/twond.jpeg"
            alt=""
          />
        </div>
        <div className="banner1">
          <h2 className="banner-h1">
            আমাদের ডেনিম জিন্স প্যান্ট <br /> প্রোডাক্টের বিবরণ{" "}
            
          </h2>
         
          <div className="display">
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> Mens
              Denim Pant.
            </p>
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> Size-
              30/32/34/36
            </p>
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> Spandax-
              2%
            </p>
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> Fabrics-
              Denim
            </p>
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> Style-
              Narrow Slim Fit
            </p>
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> Very
              Comfortable to Wear.
            </p>
            <p className="margin-details">
              <i className="fa-regular fa-square-check icn-design"></i> Nice
              Stylish Narrow Slim Fit.
            </p>
          </div>
        </div>
      </div>
      <div className="banner-center-img">
        <h1 className="banner-pragraph">ডেনিম ফেব্রিক জিন্স সাইজ  <br/>
        <div className="flex-item"> 
        {numbers?.map((number, i) =>(
          <><svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="101"
          viewBox="0 0 99 101"
          fill="none"
        >
          <g clip-path="url(#clip0_1_107)">
       
            <path
              d="M19.0777 87.6188C17.5182 86.4123 16.0289 85.1028 14.617 83.6948C10.2918 79.3845 6.89572 74.3643 4.52379 68.7741C2.06622 62.9836 0.819588 56.8363 0.819588 50.4995C0.819588 44.1626 2.06503 38.0153 4.5226 32.2248C6.89572 26.6346 10.2918 21.6144 14.6158 17.3041C16.2217 15.7041 17.9251 14.2322 19.7189 12.8918"
              stroke="#F0E615"
              stroke-width="2.79"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />  
            <path
              d="M47.9251 90.6148C37.1729 90.6148 27.0642 86.442 19.4619 78.8655C11.8596 71.289 7.67248 61.2154 7.67248 50.4995C7.67248 39.7836 11.8596 29.7112 19.4619 22.1335C27.0642 14.557 37.1729 10.3842 47.9251 10.3842C58.6772 10.3842 68.7859 14.557 76.3882 22.1335C83.9905 29.71 88.1776 39.7836 88.1776 50.4995C88.1776 61.2154 83.9905 71.2878 76.3882 78.8643C68.7859 86.442 58.6772 90.6148 47.9251 90.6148Z"
              fill="white"
            />
            <path
              d="M47.9251 3.55542C73.9401 3.55542 95.0305 24.5736 95.0305 50.4995C95.0305 76.4253 73.9401 97.4435 47.9251 97.4435"
              stroke="#F0E615"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.1408 14.1445C23.8016 14.1445 25.1479 12.8031 25.1479 11.1485C25.1479 9.49382 23.8016 8.15247 22.1408 8.15247C20.48 8.15247 19.1336 9.49382 19.1336 11.1485C19.1336 12.8031 20.48 14.1445 22.1408 14.1445Z"
              stroke="#F0E615"
              stroke-width="5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />          
            <path
              d="M22.1408 92.8475C23.8016 92.8475 25.1479 91.5061 25.1479 89.8515C25.1479 88.1968 23.8016 86.8555 22.1408 86.8555C20.48 86.8555 19.1336 88.1968 19.1336 89.8515C19.1336 91.5061 20.48 92.8475 22.1408 92.8475Z"
              stroke="#F0E615"
              stroke-width="5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>    
         <defs>
           
          </defs>
        
          <text className="text-color"  x="25" y="63" fontSize="9.2" fill="black">{number.id}</text>
         
        </svg></>
   
        ))}
       
      
     
   
          
        </div>
     
        </h1>
        
        <h1 className="text-end">
          সবচেয়ে চেয়ে কম দামে আমাদের <br />
          থেকে কিনুন।
        </h1>
        <div className="margin-matter">
          <p className="btn2">
            অর্ডার করুন{" "}
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="17"
              viewBox="0 0 36 17"
              fill="none"
            >
              <path
                d="M35.1394 8.42963C35.1394 8.94241 34.7165 9.36195 34.1998 9.36195L9.91589 9.36195C9.39912 9.36195 8.9763 8.94241 8.9763 8.42963C8.9763 7.91686 9.39912 7.49731 9.91589 7.49731L34.1998 7.49731C34.7165 7.49731 35.1394 7.91685 35.1394 8.42963Z"
                fill="#003B60"
              />
              <path
                d="M2.32866 8.42963C2.32866 7.91473 1.90798 7.49731 1.38906 7.49731C0.870135 7.49731 0.449463 7.91473 0.449463 8.42963C0.449463 8.94454 0.870135 9.36195 1.38906 9.36195C1.90798 9.36195 2.32866 8.94454 2.32866 8.42963Z"
                fill="#003B60"
              />
              <path
                d="M6.58973 8.42963C6.58973 7.91473 6.16905 7.49731 5.65013 7.49731C5.1312 7.49731 4.71053 7.91473 4.71053 8.42963C4.71053 8.94454 5.1312 9.36195 5.65013 9.36195C6.16905 9.36195 6.58973 8.94454 6.58973 8.42963Z"
                fill="#003B60"
              />
              <path
                d="M35.1394 8.42963C35.1394 8.64407 35.0642 8.8585 34.9139 9.03098L28.6749 16.3171C28.3367 16.7086 27.7447 16.7553 27.3501 16.4243C26.9555 16.0933 26.9085 15.5013 27.2421 15.1097L32.9642 8.42963L27.2421 1.74955C26.9085 1.35797 26.9555 0.770608 27.3501 0.434972C27.7447 0.0993366 28.3367 0.150616 28.6749 0.542191L34.9139 7.82828C35.0642 8.00076 35.1394 8.2152 35.1394 8.42963Z"
                fill="#003B60"
              />
            </svg>
          </p>
        </div>
      </div>
      <About />
    </>
  );
};

export default Bannertwo;
