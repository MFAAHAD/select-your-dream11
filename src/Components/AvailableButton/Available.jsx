
const Available = ({ handleIsActiveState, isActive }) => {
    return (
        <div className="flex  md:flex-row  flex-col justify-between items-center w-[90%] mx-auto mb-10">
            <div>
                <h2 className="md:text-2xl text-3xl mb-3">Available</h2>
            </div>
            <div className="flex items-center border rounded-xl gap-4">
                <button
                    onClick={() => handleIsActiveState("available")}
                    className={`${isActive.available ? "bg-yellow-500 text-white" : "bg-none text-gray-300"} px-4 py-2 rounded-lg`}
                >
                    Available
                </button>
                <button
                    onClick={() => handleIsActiveState("selected")}
                    className={`${!isActive.available ? "bg-yellow-500 text-white" : "bg-none text-gray-300"} px-4 py-2 rounded-lg`}
                >
                    Selected
                </button>
            </div>
        </div>
    );
};

export default Available;