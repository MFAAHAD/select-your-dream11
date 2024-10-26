
const SelectedInfo = ({ players, onRemovePlayer, handleAddMorePlayer }) => {
    return (
        <div className="w-[90%] mx-auto">
            <h2 className="text-5xl font-bold mb-6">Selected Players ({players.length}/6)</h2>
            <div className="grid grid-cols-1 gap-4">
                {players.map(player => (
                    <div key={player.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center">
                            <img src={player.batsman_img} alt={player.name} className="w-16 h-16 mr-4" />
                            <div>
                                <h3 className="text-lg font-bold">{player.name}</h3>
                                <p>{player.batting_type}</p>
                            </div>
                        </div>
                        <button onClick={() => onRemovePlayer(player.id)} className="text-red-500">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                ))}
            </div>
            {/* Button always visible */}
            
            <div className="border border-black rounded-xl p-1 inline-block ">
                <button
                    onClick={handleAddMorePlayer}
                    className="bg-[#E7FE29] border border-[#E7FE29] text-black font-bold py-2 px-4 rounded-lg "
                >
                    Add More Player
                </button>
            </div>
        </div>
    );
};

export default SelectedInfo;
