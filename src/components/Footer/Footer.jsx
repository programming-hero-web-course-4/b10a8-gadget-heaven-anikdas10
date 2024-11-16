

const Footer = () => {
    return (
        <div className=" bg-white py-12 mt-20">
            <div className="container">
                <div className="text-center ">
                <h2 className="text-2xl font-bold">Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
           <footer className="footer text-black p-10">
  <nav>
    <h6 className="footer-title">Services
</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company
</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
            </footer> 
            </div>
        </div>
    );
};

export default Footer;