



const Card = () => [
    const [color,setColor] = useState("#ffff")
    const [counter,setCounter] = useState(0);

    return (


       

        <div className="tarjeta" style={{backgroundColor: "$(color)"}}>
            <h1>Color counter</h1>
            <p>Change Color{counter}times!</p>
            <button id= "cambiar boton" onClick={{}=> setCounter(counter + 1)}
                ></button>
        </div>
    )

]

export default Card;