import React from "react";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const EditCrewmate = () => {

    const { id } = useParams();

    const colors = [
        "Red",
        "Green",
        "Blue",
        "Purple",
        "Yellow",
        "Orange",
        "Pink",
        "Rainbow",
      ];

    const [currentDetails, setCurrentDetails] = useState({
        id: null,
        name: "",
        speed: "",
        color: "",
    });


  useEffect(() => {

    const fetchCrewmateDetail = async () => {
        const { data, error } = await supabase
        .from('Crewmates')
        .select()
        .eq('id', id);

        setCurrentDetails(
            { id: data[0].id,
                name: data[0].name,
                speed: data[0].speed,
                color: data[0].color
            }
        );
    }
    fetchCrewmateDetail();


}, [])





  const handleChange = async (event) => {

    event.preventDefault();

    let newName = event.target.name.value;
    let newSpeed = event.target.speed.value;
    let newColor = event.target.color.value;

    if(confirm("Are you sure you want to update this crewmate?")) {
        try {

            await supabase.from('Crewmates').
            update({name: newName, speed: newSpeed, color: newColor}).eq('id', id);

            alert("Crewmate Updated!");
            window.location = "/gallery";

        } catch (error) {
            console.log("Error updating crewmate:", error.message);
        }
    } else {
        alert("Crewmate not updated!");
        return;
    }

  };

  const handleDelete = async (event) => {

    event.preventDefault();

    if (confirm("Are you sure you want to delete this crewmate?")) {
        try {
            await supabase.from('Crewmates').delete().eq('id', id);
        alert("Crewmate Deleted!");
        window.location = "/gallery";
        } catch (error) {
            console.log("Error deleting crewmate:", error.message);
        }

    } else {
        alert("Crewmate not deleted!");
        return;
    }


  }

  return <>

<header className="create-a-crewmate-header">

  <h1 className="py-5 text-5xl font-bold">Edit Crewmate!</h1></header>


  <main>

  <img src={`/crewmate-images/${currentDetails.color}-crewmate.png`} className="crewmate-img" alt="Crewmate" width={"50px"} />


    <h2 className="py-5 text-2xl font-bold">Current Crewmate Info:</h2>
    <ul className="text-center text-lg py-5">
        <li><b>Name:</b> {currentDetails.name}</li>
        <li><b>Speed:</b> {currentDetails.speed} mph</li>
        <li><b>Color:</b> <span className="capitalize">{currentDetails.color}</span></li>
    </ul>

   

  </main>

<form className="crewmate-creation-form" onSubmit={handleChange}>
       <div className="inputs"> <div className="input-container">
          <label htmlFor="name">Crewmate Name</label>
          <input
            type="text"
            placeholder="Enter Crewmate Name"
            name="name"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="speed">Speed (mph):</label>
          <input
            type="number"
            placeholder="Enter Speed"
            name="speed"
            required
          />
        </div>
        <div className="input-container color-picker">
          <legend> Color:</legend>
          {colors.map((color, index) => {
            return (
              <>
                 
                <div>
                <input
                  key={index}
                  type="radio"
                  name="color"
                  value={color.toLowerCase()}
                  required
                />
                <label className="radio-button-label" htmlFor={color.toLowerCase()}>{color}</label>
             </div>
              </>
            );
          })}
        </div></div>

        <div className="button-container"><input type="submit" value="Update Crewmate" className="edit-crewmate-button" />

        <button onClick={handleDelete} className="edit-crewmate-button">Delete Crewmate</button>

</div>
      </form>

      <div className="py-5 flex justify-center">
      <Link
    to="/gallery">
<button className="back-to-gallery-button">Back to Gallery</button>
        </Link>
        </div>
  </>;
};

export default EditCrewmate;
