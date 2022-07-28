import React from "react";
import { TestimonialCSS } from "../css/TestimonialCSS";
import pic1 from "../images/icons/pic1.jpeg";
import pic2 from "../images/icons/pic2.jpeg";
import pic3 from "../images/icons/pic3.jpeg";

const Testimonial = () => {
  return (
    <TestimonialCSS>
      <section className="testimonial_section">
        <div className="testimonial_head">
          <h1>Hear From Our Users</h1>
        </div>
        <div className="testimonial_container">
          <div className="testimonial_box">
            <div className="testimonial_title">
              <span>
                <img className="testimonial_image" src={pic1} alt="pic1" />
              </span>
              <span className="testimonial_name">Rhedwan Joe</span>
              <span>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.37 5.27543V5.77543C17.37 10.8104 13.55 16.5804 6.56 16.5804C4.49647 16.5849 2.47677 15.9852 0.75 14.8554C1.04989 14.8962 1.35239 14.9145 1.655 14.9104C3.3655 14.9151 5.02791 14.3446 6.375 13.2904C5.58034 13.2787 4.80958 13.0168 4.17228 12.542C3.53498 12.0672 3.06355 11.4035 2.825 10.6454C3.06171 10.6956 3.30303 10.7208 3.545 10.7204C3.88288 10.7205 4.21923 10.6751 4.545 10.5854C3.68429 10.4139 2.90996 9.94849 2.3545 9.26899C1.79904 8.58949 1.49698 7.73807 1.5 6.86043V6.81043C2.0266 7.10459 2.61698 7.26592 3.22 7.28043C2.4173 6.75221 1.84659 5.93742 1.62448 5.00254C1.40238 4.06765 1.54564 3.08323 2.025 2.25043C2.98013 3.42518 4.17179 4.38576 5.52252 5.06974C6.87325 5.75372 8.35281 6.14578 9.865 6.22043C9.79014 5.93664 9.75481 5.64388 9.76 5.35043C9.73185 4.57489 9.9434 3.80951 10.3659 3.15851C10.7883 2.50752 11.4011 2.00254 12.1209 1.71234C12.8407 1.42214 13.6324 1.36083 14.3882 1.53674C15.1441 1.71265 15.8273 2.11725 16.345 2.69543C17.1959 2.52372 18.0121 2.21108 18.76 1.77043C18.4764 2.66611 17.873 3.42608 17.065 3.90543C17.8198 3.80143 18.5557 3.58925 19.25 3.27543C18.7468 4.04825 18.1102 4.72546 17.37 5.27543V5.27543Z"
                    stroke="#A9A9A5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="testimonial_content">
              <p>
                Will @AuthIt please just right now setup <br></br>
                An annual pass type thing so I can just <br></br>
                Be apart of every damn thing they offer?
              </p>
            </div>
          </div>
          <div className="testimonial_box">
            <div className="testimonial_title">
              <span>
                <img className="testimonial_image" src={pic2} alt="pic2" />
              </span>
              <span className="testimonial_name">Helen Peter</span>
              <span>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.37 5.27543V5.77543C17.37 10.8104 13.55 16.5804 6.56 16.5804C4.49647 16.5849 2.47677 15.9852 0.75 14.8554C1.04989 14.8962 1.35239 14.9145 1.655 14.9104C3.3655 14.9151 5.02791 14.3446 6.375 13.2904C5.58034 13.2787 4.80958 13.0168 4.17228 12.542C3.53498 12.0672 3.06355 11.4035 2.825 10.6454C3.06171 10.6956 3.30303 10.7208 3.545 10.7204C3.88288 10.7205 4.21923 10.6751 4.545 10.5854C3.68429 10.4139 2.90996 9.94849 2.3545 9.26899C1.79904 8.58949 1.49698 7.73807 1.5 6.86043V6.81043C2.0266 7.10459 2.61698 7.26592 3.22 7.28043C2.4173 6.75221 1.84659 5.93742 1.62448 5.00254C1.40238 4.06765 1.54564 3.08323 2.025 2.25043C2.98013 3.42518 4.17179 4.38576 5.52252 5.06974C6.87325 5.75372 8.35281 6.14578 9.865 6.22043C9.79014 5.93664 9.75481 5.64388 9.76 5.35043C9.73185 4.57489 9.9434 3.80951 10.3659 3.15851C10.7883 2.50752 11.4011 2.00254 12.1209 1.71234C12.8407 1.42214 13.6324 1.36083 14.3882 1.53674C15.1441 1.71265 15.8273 2.11725 16.345 2.69543C17.1959 2.52372 18.0121 2.21108 18.76 1.77043C18.4764 2.66611 17.873 3.42608 17.065 3.90543C17.8198 3.80143 18.5557 3.58925 19.25 3.27543C18.7468 4.04825 18.1102 4.72546 17.37 5.27543V5.27543Z"
                    stroke="#A9A9A5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="testimonial_content">
              <p>
                Will @AuthIt please just right now setup <br></br>
                An annual pass type thing so I can just <br></br>
                Be apart of every damn thing they offer?
              </p>
            </div>
          </div>
          <div className="testimonial_box">
            <div className="testimonial_title">
              <span>
                <img className="testimonial_image" src={pic3} alt="pic3" />
              </span>
              <span className="testimonial_name">Maz Sam</span>
              <span>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.37 5.27543V5.77543C17.37 10.8104 13.55 16.5804 6.56 16.5804C4.49647 16.5849 2.47677 15.9852 0.75 14.8554C1.04989 14.8962 1.35239 14.9145 1.655 14.9104C3.3655 14.9151 5.02791 14.3446 6.375 13.2904C5.58034 13.2787 4.80958 13.0168 4.17228 12.542C3.53498 12.0672 3.06355 11.4035 2.825 10.6454C3.06171 10.6956 3.30303 10.7208 3.545 10.7204C3.88288 10.7205 4.21923 10.6751 4.545 10.5854C3.68429 10.4139 2.90996 9.94849 2.3545 9.26899C1.79904 8.58949 1.49698 7.73807 1.5 6.86043V6.81043C2.0266 7.10459 2.61698 7.26592 3.22 7.28043C2.4173 6.75221 1.84659 5.93742 1.62448 5.00254C1.40238 4.06765 1.54564 3.08323 2.025 2.25043C2.98013 3.42518 4.17179 4.38576 5.52252 5.06974C6.87325 5.75372 8.35281 6.14578 9.865 6.22043C9.79014 5.93664 9.75481 5.64388 9.76 5.35043C9.73185 4.57489 9.9434 3.80951 10.3659 3.15851C10.7883 2.50752 11.4011 2.00254 12.1209 1.71234C12.8407 1.42214 13.6324 1.36083 14.3882 1.53674C15.1441 1.71265 15.8273 2.11725 16.345 2.69543C17.1959 2.52372 18.0121 2.21108 18.76 1.77043C18.4764 2.66611 17.873 3.42608 17.065 3.90543C17.8198 3.80143 18.5557 3.58925 19.25 3.27543C18.7468 4.04825 18.1102 4.72546 17.37 5.27543V5.27543Z"
                    stroke="#A9A9A5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="testimonial_content">
              <p>
                Will @AuthIt please just right now setup <br></br>
                An annual pass type thing so I can just <br></br>
                Be apart of every damn thing they offer?
              </p>
            </div>
          </div>
        </div>
      </section>
    </TestimonialCSS>
  );
};

export default Testimonial;
