
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
            {/* Button always visible, regardless of player count */}
            <button
                onClick={handleAddMorePlayer}
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
                Add More Player
            </button>
        </div>
    );
};

export default SelectedInfo;
