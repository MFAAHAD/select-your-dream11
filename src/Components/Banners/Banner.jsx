import bannermain from '../../assets/images/banner-main.png'


const Banner = ({ handleAddCoins }) => {
    return (

        <div
            className="hero bg-black bg-cover bg-no-repeat rounded-3xl w-[90%] mx-auto  my-10 py-6"
            style={{
                backgroundImage: {},
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-content text-center grid grid-cols-1  gap-6 items-center">
                <div>
                    <img src={bannermain} alt="Cricket Logo" className="mx-auto mb-4" />
                </div>
                <div>
                    <h1 className="md:text-5xl text-3xl font-bold mb-3 text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5 text-lg text-gray-300">Beyond Boundaries Beyond Limits</p>
                    <div className="border border-[#E7FE29] rounded-lg p-1 inline-block shadow-lg">
                        <button
                            onClick={handleAddCoins}
                            className="bg-[#E7FE29] border border-[#E7FE29] text-black font-semibold py-2 px-4 rounded-lg shadow-lg"
                        >
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;