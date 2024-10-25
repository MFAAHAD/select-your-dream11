const Newsletter = () => {
    return (
        <div className="relative w-full h-full flex justify-center items-center md:-mt-[41rem] -mt-[68rem]">
  <div className="md:w-[70%] w-[85%] mx-auto bg-gradient-to-r from-blue-100 to-orange-100 rounded-2xl p-8 shadow-lg">
    <div className="text-center">
      
      <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
      
      <p className="text-gray-600 mb-6">Get the latest updates and news right in your inbox!</p>
      
      {/* Flex direction changes based on screen size */}
      <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full sm:w-64 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      
        <button 
          type="submit" 
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
        </div>


      
    );
};

export default Newsletter;