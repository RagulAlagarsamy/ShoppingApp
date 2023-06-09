import react from "react";
import "./footer.css";
import "font-awesome/css/font-awesome.min.css";
import mastercard from "../assets/mastercard.png";
import ebaycard from "../assets/ebaycard.png";
import gpaycard from "../assets/google-pay.jpeg";
import paypalcard from "../assets/paypal.jpeg";
import monobankcard from "../assets/monobank.jpeg";
import Discoverbank from "../assets/Discoverbank.png";
import Westernunionbank from "../assets/western-union.png";
import Payoneer from "../assets/Payoneer.jpeg";
import PayPalApple from "../assets/PayPal-Apple.png";
import americanexp from "../assets/americanexp.png";
import amazon from "../assets/amazon.png";
import alipay from "../assets/alipay.png";
import bitpay from "../assets/bitpay.png";
import bitcoin from "../assets/bitcoin.png";

function Footer() {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-lg-6" style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col-lg-4" style={{ marginTop: "20px" }}>
              <div style={{ color: "black" }}>COMPANY INFO</div>
              <div className="sublinks">About</div>
              <div className="sublinks">Social Responsibility</div>
              <div className="sublinks">Affiliate</div>
              <div className="sublinks">Fashion Blogger</div>
            </div>
            <div className="col-lg-4" style={{ marginTop: "20px" }}>
              <div style={{ color: "black" }}>HELP & SUPPORT</div>
              <div className="sublinks">Shipping Info</div>
              <div className="sublinks">Returns</div>
              <div className="sublinks">How to Order</div>
              <div className="sublinks">How to Track</div>
              <div className="sublinks">Size Chart</div>
            </div>
            <div className="col-lg-4" style={{ marginTop: "20px" }}>
              <div style={{ color: "black" }}>COSTUMER CARE</div>
              <div className="sublinks">Contact Us</div>
              <div className="sublinks">Payment</div>
              <div className="sublinks">Bonus Point</div>
              <div className="sublinks">Notices</div>
            </div>
          </div>

          <div style={{ marginTop: "60px" }}>
            <p>&copy; 2010-2022 All Rights Reserved</p>
            <p>
              <span
                style={{ textDecoration: "underline", paddingRight: "5px" }}
              >
                Privacy Center{" "}
              </span>
              |{" "}
              <span
                style={{ textDecoration: "underline", paddingRight: "5px" }}
              >
                Privacy & Cookie Policy{" "}
              </span>
              |{" "}
              <span
                style={{ textDecoration: "underline", paddingRight: "5px" }}
              >
                Manage Cookies{" "}
              </span>
              |
            </p>
            <p>
              {" "}
              <span
                style={{ textDecoration: "underline", paddingRight: "5px" }}
              >
                Terms & Conditions{" "}
              </span>
              |{" "}
              <span
                style={{ textDecoration: "underline", paddingRight: "5px" }}
              >
                Copyright Notice{" "}
              </span>
              |{" "}
              <span
                style={{ textDecoration: "underline", paddingRight: "5px" }}
              >
                Imprint{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="col-lg-6" style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col-lg-8" style={{ marginTop: "20px" }}>
              <div style={{ color: "black" }}>SOCIALS</div>
              <div style={{ marginTop: "10px" }}>
                <span style={{ marginRight: "10px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style={{ width: "29px" }}
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </span>

                <span style={{ marginRight: "10px" }}>
                  <svg
                    fill="#000000"
                    height="33px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                  </svg>
                </span>

                <span style={{ marginRight: "10px" }}>
                  <svg
                    fill="#000000"
                    height="29px"
                    viewBox="0 0 19.2 19.2"
                    data-name="Instagram w/circle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z" />
                  </svg>
                </span>
                <span style={{ marginRight: "10px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 333333 333333"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    height="29px"
                  >
                    <path
                      d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm33461 70641c337 2877 825 5661 1461 8341l6304 2c1170 9991 4006 19119 8465 26697 7282 6745 16796 10904 28280 11641v9207c2131 444 4350 746 6659 894v29689c-14847 1462-27841-3426-42981-12531l2324 50846c0 16398 61 23892-8738 38976-20546 35222-58194 36676-82176 18322-12269-4256-23069-12466-29881-23611-19875-32516-1959-85512 55687-90966l-94 7835v1970c3105-646 6365-1144 9794-1468v31311c-12483 2057-20412 5890-24119 12980-7424 14197-4049 26526 3716 34309 16276 2796 34400-8481 31672-43351V70640h33628z"
                      fill="#1a121f"
                    />
                    <path
                      d="M200127 70641c3093 26406 18915 45038 44509 46681v25046l-165 15v-21275c-25595-1642-40311-17390-43404-43796l-27114-1v111094c3912 50004-35050 51490-49954 32531 17482 10933 45867 3826 42500-39202V70640h33628zm-72854 184164c-15319-3153-29249-12306-37430-25689-19875-32516-1959-85512 55687-90966l-94 7835c-53443 8512-58809 65920-44009 89801 5707 9209 15076 15686 25846 19019z"
                      fill="#26f4ee"
                    />
                    <path
                      d="M207892 78984c1761 15036 7293 28119 16454 36903-12866-6655-20630-19315-23062-36905l6609 2zm36580 47511c2181 463 4456 777 6824 929v29689c-14847 1462-27841-3426-42981-12531l2324 50846c0 16398 61 23892-8738 38976-21443 36760-61517 36743-85239 15810 30930 17765 84927 3857 84828-56453v-55495c15141 9105 28134 13993 42981 12530v-24302zm-99035 21460c3105-646 6365-1144 9794-1468v31311c-12483 2057-20412 5890-24119 12980-10441 19964 474 36238 14923 41365-18075-649-36010-19214-23555-43031 3707-7089 10474-10923 22957-12980v-28176z"
                      fill="#fb2c53"
                    />
                    <path
                      d="M201068 77312c3093 26406 17809 42154 43404 43796v29689c-14847 1462-27841-3425-42981-12530v55495c119 72433-77801 77944-100063 42024-14800-23881-9435-81289 44009-89801v30146c-12483 2057-19250 5891-22957 12980-22909 43808 56997 69872 51475-706V77311l27114 1z"
                      fill="#fefefe"
                    />
                  </svg>
                </span>
                <span style={{ marginRight: "10px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3333 3333"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    height="29px"
                  >
                    <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm532 1492c86-429-81-787-533-791-323-2-617 208-537 761 10 69-23 61-75 49-43-9-87-19-130-28-21 4-37 12-48 23-62 66 63 117 110 135 62 23 130 45 121 118-3 29-13 57-24 86-59 142-215 275-363 317-77 22-116 31 1 95 53 29 119 45 205 57 12 227 98 81 284 119 23 5 48 8 75 20 48 21 96 62 151 94 166 96 316 102 478-12 94-66 183-131 350-111 117 15 109 51 149-114 147-26 279-54 271-135-192-41-314-141-416-305-40-65-91-160 15-205 28-12 65-18 108-34 38-13 72-37 80-54 21-48-14-90-59-94-86-6-127 50-179 33-12-4-23-11-37-23h1z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-lg-3" style={{ marginTop: "20px" }}>
              <div style={{ color: "black" }}>PLATFORMS</div>
              <div style={{ marginTop: "10px", alignContent: "center" }}>
                <span style={{ marginLeft: "6px", marginRight: "15px" }}>
                  <svg
                    height="29px"
                    viewBox="42.544 -.671 467.96 553.72"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m76.774 179.141c-9.529 0-17.614 3.323-24.26 9.969s-9.97 14.621-9.97 23.929v142.914c0 9.541 3.323 17.619 9.97 24.266 6.646 6.646 14.731 9.97 24.26 9.97 9.522 0 17.558-3.323 24.101-9.97 6.53-6.646 9.804-14.725 9.804-24.266v-142.914c0-9.309-3.323-17.283-9.97-23.929s-14.627-9.969-23.935-9.969zm275.198-128.294 23.598-43.532c1.549-2.882.998-5.092-1.658-6.646-2.883-1.34-5.098-.661-6.646 1.989l-23.928 43.88c-21.055-9.309-43.324-13.972-66.807-13.972-23.488 0-45.759 4.664-66.806 13.972l-23.929-43.88c-1.555-2.65-3.77-3.323-6.646-1.989-2.662 1.561-3.213 3.764-1.658 6.646l23.599 43.532c-23.929 12.203-42.987 29.198-57.167 51.022-14.18 21.836-21.273 45.698-21.273 71.628h307.426c0-25.924-7.094-49.787-21.273-71.628-14.181-21.824-33.129-38.819-56.832-51.022zm-136.433 63.318c-2.552 2.558-5.6 3.831-9.143 3.831-3.55 0-6.536-1.273-8.972-3.831-2.436-2.546-3.654-5.582-3.654-9.137 0-3.543 1.218-6.585 3.654-9.137 2.436-2.546 5.429-3.819 8.972-3.819s6.591 1.273 9.143 3.819c2.546 2.558 3.825 5.594 3.825 9.137-.007 3.549-1.285 6.591-3.825 9.137zm140.086 0c-2.441 2.558-5.434 3.831-8.971 3.831-3.551 0-6.598-1.273-9.145-3.831-2.551-2.546-3.824-5.582-3.824-9.137 0-3.543 1.273-6.585 3.824-9.137 2.547-2.546 5.594-3.819 9.145-3.819 3.543 0 6.529 1.273 8.971 3.819 2.438 2.558 3.654 5.594 3.654 9.137 0 3.549-1.217 6.591-3.654 9.137zm-231.654 292.639c0 10.202 3.543 18.838 10.63 25.925 7.093 7.087 15.729 10.63 25.924 10.63h24.596l.337 75.454c0 9.528 3.323 17.619 9.969 24.266s14.627 9.97 23.929 9.97c9.523 0 17.613-3.323 24.26-9.97s9.97-14.737 9.97-24.266v-75.447h45.864v75.447c0 9.528 3.322 17.619 9.969 24.266s14.73 9.97 24.26 9.97c9.523 0 17.613-3.323 24.26-9.97s9.969-14.737 9.969-24.266v-75.447h24.928c9.969 0 18.494-3.544 25.594-10.631 7.086-7.087 10.631-15.723 10.631-25.924v-221.361h-305.09zm352.304-227.663c-9.309 0-17.283 3.274-23.93 9.804-6.646 6.542-9.969 14.578-9.969 24.094v142.914c0 9.541 3.322 17.619 9.969 24.266s14.627 9.97 23.93 9.97c9.523 0 17.613-3.323 24.26-9.97s9.969-14.725 9.969-24.266v-142.914c0-9.517-3.322-17.552-9.969-24.094-6.647-6.53-14.737-9.804-24.26-9.804z" />
                  </svg>
                </span>
                <span style={{ marginRight: "10px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="29px"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    viewBox="0 0 640 640"
                  >
                    <path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <p>SIGN UP</p>
          <input
            type="email"
            placeholder="Your email"
            style={{
              width: "266px",
              height: "40px",
              padding: "10px",
              marginRight: "5px",
            }}
          />
          <button
            className="btn btn-dark"
            style={{
              borderRadius: "0px",
              height: "41px",
              width: "130px",
              padding: "7px",
              fontSize: "14px",
            }}
          >
            SUBSCRIBE
          </button>
          <br></br>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>
            {" "}
            By clicking the SUBSCRIBE button, you are agreeing to our{" "}
            <a href="">Privacy & Cookie Policy</a>
          </p>

          <div style={{ marginTop: "30px" }}>
            WE ACCEPT
            <div style={{ marginTop: "10px" }}>
              <img
                src={mastercard}
                width="40px"
                style={{ marginRight: "5px" }}
              />

              <img
                src={paypalcard}
                width="40px"
                style={{ marginRight: "5px" }}
              />
              <img src={ebaycard} width="40px" style={{ marginRight: "5px" }} />
              <img src={gpaycard} width="40px" style={{ marginRight: "5px" }} />
              <img
                src={monobankcard}
                width="40px"
                style={{ marginRight: "5px" }}
              />
              <img
                src={Discoverbank}
                width="40px"
                style={{ marginRight: "5px" }}
              />
              <img
                src={Westernunionbank}
                width="40px"
                style={{ marginRight: "5px" }}
              />
              <img src={Payoneer} width="40px" style={{ marginRight: "5px" }} />
            </div>
            <div style={{ marginTop: "10px" }}>
              <img
                src={PayPalApple}
                width="40px"
                style={{ marginRight: "5px" }}
              />
              <img
                src={americanexp}
                width="40px"
                style={{ marginRight: "5px" }}
              />
              <img src={amazon} width="40px" style={{ marginRight: "5px" }} />
              <img src={alipay} width="40px" style={{ marginRight: "5px" }} />
              <img src={bitpay} width="40px" style={{ marginRight: "5px" }} />
              <img src={bitcoin} width="40px" style={{ marginRight: "5px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
