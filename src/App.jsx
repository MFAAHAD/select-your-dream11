import { useState } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './Components/Banners/Banner';
import Navbar from './Components/Navbar/Navbar';
import Available from './Components/AvailableButton/Available';
import Players from './Components/Players/Players';
import SelectedInfo from './Components/BtnInfo/SelectedInfo';
import { toast, ToastContainer } from 'react-toastify';
import Footer from './Components/myfooter/Footer';
import Newsletter from './Components/myfooter/Newsletter';

function App() {
  const [coins, setCoin] = useState(0);
  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  });

  // State for selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleIsActiveState = (status) => {
    setIsActive({
      available: status === 'available',
      status: status
    });
  };

  const handleAddCoins = () => {
    setCoin(coins + 3000000);
    
    // Display a warning message when credits are added
    toast.warn('Credit added to your account.', {
      position: "top-center",
      autoClose: 2000,
      progressClassName: 'progress-bar-yellow',
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      icon: "⚠️"
    });
  };

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.length < 6) {
      const playerExists = selectedPlayers.find(p => p.id === player.id);

      // If the player is not already selected
      if (!playerExists) {
        if (coins >= player.price) {
          setCoin(coins - player.price);
          setSelectedPlayers([...selectedPlayers, player]);

          toast.success(`Congrats!! ${player.name} is now in your squad.`, {
            position: "top-center",
            autoClose: 2000,
            progressClassName: 'progress-bar-red',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            icon: "✔️"
          });
        } else {
          toast.error('Not enough coins to add this player!', {
            position: "top-center",
            autoClose: 3000,
            progressClassName: 'progress-bar-red',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            icon: "⚠️"
          });
        }
      } else {
        toast.error('Player already selected', {
          position: "top-center",
          autoClose: 2000,
          progressClassName: 'progress-bar-red',
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          icon: "⚠️"
        });
      }
    } else {
      toast.error('You have exceeded the limit to choose players.', {
        position: "top-center",
        autoClose: 3000,
        progressClassName: 'progress-bar-red',
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: "⚠️"
      });
    }
  };

  const handleRemovePlayer = (id) => {
    const playerToRemove = selectedPlayers.find(player => player.id === id);
    
    if (playerToRemove) {
      setSelectedPlayers(selectedPlayers.filter(player => player.id !== id));
      
      // Display a warning message when a player is removed
      toast.warn(`${playerToRemove.name} has been removed from your squad.`, {
        position: "top-center",
        autoClose: 2000,
        progressClassName: 'progress-bar-yellow',
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: "⚠️"
      });
    }
  };
  
  const handleAddMorePlayer = () => {
    setIsActive({
      available: true,
      status: 'available'
    });
  };

  return (
    <div>
      <ToastContainer />
      <Navbar coins={coins}></Navbar>
      <Banner handleAddCoins={handleAddCoins}></Banner>
      
      <Available handleIsActiveState={handleIsActiveState} isActive={isActive} selectedCount={selectedPlayers.length} />
      
      {isActive.available ? (
        <Players onSelectPlayer={handleSelectPlayer}></Players>
      ) : (
        <SelectedInfo players={selectedPlayers} onRemovePlayer={handleRemovePlayer} handleAddMorePlayer={handleAddMorePlayer} />
      )}
      
      <Footer />
      <Newsletter />
    </div>
  );
}

export default App;
