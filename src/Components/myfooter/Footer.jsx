

import footerimg from "..//..//assets/images/logo-footer.png"

const Footer = () => {
  return (
    <footer className="bg-neutral  text-neutral-content p-10 mt-[270px] md:mt-[150px]  relative">
      <div className="  flex flex-col justify-between items-center space-y-8">

        {/* Image at the top */}
        <div className="mt-[100px]">
          <img src={footerimg} alt="Footer Logo" className="mb-6 mx-auto" />
        </div>

        {/* Navigation items centered below the image */}
        <div className=" flex flex-col sm:flex-row justify-around w-full mx-auto space-y-6 sm:space-y-0 sm:space-x-8">

          <nav className="flex flex-col items-center mb-4 sm:mb-0">
            <h6 className="footer-title">About-Us</h6>
            <p className="text-center">
              We are a passionate team providing<br /> quality service. You will get<br /> many services timely.
            </p>
          </nav>

          <nav className="flex flex-col items-start mb-4 sm:mb-0 space-y-2">
            <h6 className="text-xl text-white">Quick-List</h6>
            <ul className="list-disc list-inside space-y-1">
              <li><a className="link link-hover">Home</a></li>
              <li><a className="link link-hover">Contact</a></li>
              <li><a className="link link-hover">About us</a></li>
              <li><a className="link link-hover">Press kit</a></li>
            </ul>
          </nav>

          <nav className="flex flex-col items-center">
            <h6 className="footer-title">Subscribe</h6>
            <p className="text-center">
              Subscribe to newsletter for the<br /> latest updates.
            </p>

            <div className="w-full flex justify-center items-center p-4 ">
              <div className="flex overflow-hidden rounded-full shadow-md w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-4 w-full text-gray-700 focus:outline-none"
                />
                <button className="px-6 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold">
                  Subscribe
                </button>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </footer>



  );
};

export default Footer;
