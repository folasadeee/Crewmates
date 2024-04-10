import { Link } from "react-router-dom";

const CrewmateCard = (props) => {

    let shadowColor, imageSrc;
    const color = props.crewmate.color;

    if (color.toLowerCase() === 'rainbow') {
        shadowColor = `1px 1px 1px 0 #ff0000,
                       2px 2px 2px 0 #ff7f00,
                       3px 3px 3px 0 #ffff00,
                       4px 4px 4px 0 #00ff00,
                       5px 5px 5px 0 #0000ff,
                       6px 6px 6px 0 #4b0082,
                       7px 7px 7px 0 #8f00ff`;
    } else {
        shadowColor = '5px 5px 5px ' + color;
    }

    imageSrc = `./crewmate-images/${color.toLowerCase()}-crewmate.png`;

    return (

       <>

<div className="crewmate-card" style={{ boxShadow: shadowColor} }>

<Link
to={`/details/${props.crewmate.id}`}
key={props.crewmate.id}>

<img src={imageSrc} className="crewmate-img" alt="Crewmate" />
</Link>


<h2 className="text-3xl font-bold">{props.crewmate.name}</h2>
<p className="text-xl"><span className="font-bold">Speed:</span> {props.crewmate.speed} mph</p>
<p className="text-xl"><span className="font-bold">Color:</span> {props.crewmate.color}</p>

<Link

to={`/edit/${props.crewmate.id}`}
key={props.crewmate.id}>

<button className="edit-crewmate-button">Edit Crewmate</button>
</Link>

</div>
       
       </>

    )
}

export default CrewmateCard;