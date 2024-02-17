import logo from "../assets/logo/white-logo.ico";

const Footer = () => {
  return (
    <footer className="bg-black footer">
      <div className="footer section-wrapper text-base-content py-10">
        <div>
          <img className="h-8 mb-5" src={logo} alt="Logo" />
          <p>© 2023 Car Craze Ltd - All rights reserved.</p>
        </div>

        <div>
          <p className="font-bold mb-2 uppercase">Services</p>
          <a className="link link-hover">Sports Car</a>
          <a className="link link-hover">Sedan</a>
          <a className="link link-hover">Police Car</a>
        </div>

        <div>
          <p className="font-bold mb-2 uppercase">Company</p>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
        </div>

        <div>
          <p className="font-bold mb-2 uppercase">Social</p>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
