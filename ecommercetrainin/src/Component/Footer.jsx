import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",   // removes container limit
        backgroundColor: "#0d47a1",
        color: "white",
        padding: "40px 0",
      }}
    >
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-col">
          <h4>Get to Know Us</h4>
          <p>About us</p>
          <p>Contact us</p>
          <p>Feedback</p>
          <p>Career</p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Connect with Us</h4>
          <p>Order status</p>
          <p>Shopping details</p>
          <p>FAQs</p>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Make Money with Us</h4>
          <p>Become a partner</p>
          <p>Advertise with us</p>
          <p>Build your own brand</p>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Let Us Help You</h4>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Safety Alerts</p>
          <p>100% Purchase Protection</p>
          <p>App Download</p>
          <p>Help</p>
        </div>
      </div>

      <div className="footer-social">
        <FacebookIcon className="social-icon" />
        <InstagramIcon className="social-icon" />
        <TwitterIcon className="social-icon" />
      </div>
    </footer>
  );
}