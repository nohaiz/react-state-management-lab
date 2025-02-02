import { useState } from "react";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (zombieFighter) => {
    if (zombieFighter.price <= money) {
      setMoney(money - zombieFighter.price);
      setTeam([...team, zombieFighter]);
    } else {
      console.log("Not enough money");
    }
    setTotalStrength(totalStrength + zombieFighter.strength);
    setTotalAgility(totalAgility + zombieFighter.agility);
  };

  const handleRemoveFighter = (index) => {
    const newTeam = team.filter(
      (teamMember) => team[index].name !== teamMember.name
    );
    setMoney(money + team[index].price);
    setTotalStrength(totalStrength - team[index].strength);
    setTotalAgility(totalAgility - team[index].agility);
    setTeam(newTeam);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength {totalStrength}</h2>
      <h2>Agility {totalAgility}</h2>
      <h2>Team:</h2>
      <p>{team.length ? "" : "Pick some team members"}</p>
      <ul>
        {team.map((member, index) => (
          <li key={index}>
            <img src={member.img} alt={`${member.name} image`} />
            <li>Name: {member.name}</li>
            <li>Price: {member.price}</li>
            <li>Strength: {member.strength}</li>
            <li>Agility: {member.agility}</li>
            <button
              onClick={() => {
                handleRemoveFighter(index);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <div key={index}>
            <img src={zombieFighter.img} alt={`${zombieFighter.name} image`} />
            <li>Name: {zombieFighter.name}</li>
            <li>Price: {zombieFighter.price}</li>
            <li>Strength: {zombieFighter.strength}</li>
            <li>Agility: {zombieFighter.agility}</li>
            <button
              onClick={() => {
                handleAddFighter(zombieFighter);
              }}
            >
              Add
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
