import { useEffect, useState } from "react";
import "./card.css";

const ColorCard = () => {
  const [bgColor, setBgColor] = useState("#d85e93");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const randomHex = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    setBgColor(randomHex);
  }, [count]);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h2>Tarjeta cambiante 🎨</h2>
      <p>Has modificado el color <strong>{count}</strong> veces</p>
      <button onClick={handleClick}>¡Nuevo color!</button>
    </div>
  );
};

export default ColorCard;