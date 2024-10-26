// eslint-disable-next-line no-unused-vars
import fakeData from '../../../public/fakeData.json'

import { useEffect, useState } from "react";
import { FaFlag } from "react-icons/fa6";

const Players = ({ onSelectPlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {players.map(player => (
          <div key={player.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-[250px]" src={player.batsman_img} alt="player" />
            </figure>
            <div className="card-body">
              <h2 className="card-title "><img className="border-gray-400 border" src="https://img.icons8.com/?size=30&id=98957&format=png" alt="" />{player.name}</h2>
              <div className="flex items-center">
                <p className="flex gap-2 items-center"><FaFlag />{player.country_name}</p>
                <div className="border p-1 rounded-md"><small>{player.player_type}</small></div>
              </div>
              <hr />
              <h1 className="font-bold">Rating</h1>
              <div className="flex justify-between items-center">
                <h1>Batting-Style: </h1>
                <h1>{player.batting_type}</h1>
              </div>
              <div className="flex justify-between items-center">
                <h1>Price: ${player.price}</h1>
                <button onClick={() => onSelectPlayer(player)} className="border p-1 hover:bg-[#E7FE29]">
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;