const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="font-Sora w-11/12 lg:w-4/5 mx-auto py-24 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="font-bold text-32 sm:text-32 lg:text-32 leading-10 text-color2">
            Gadget Heaven
          </h1>
          <p className="font-medium leading-5 text-base sm:text-xl lg:text-xl text-color2.6">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="space-y-4 text-center">
            <h2 className="font-bold text-xl sm:text-24 leading-6 text-color2">
              Services
            </h2>
            <ul className="leading-8 sm:text-xl text-color2.6 space-y-4">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="space-y-4 text-center">
            <h2 className="font-bold text-xl sm:text-24 leading-6 text-color2">
              Company
            </h2>
            <ul className="leading-8 sm:text-xl text-color2.6 space-y-4">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-4 text-center">
            <h2 className="font-bold text-xl sm:text-24 leading-6 text-color2">
              Legal
            </h2>
            <ul className="leading-8 sm:text-xl text-color2.6 space-y-4">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
