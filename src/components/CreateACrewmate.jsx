import { supabase } from '../client';

import React, { useState } from "react";

const CreateACrewmate = () => {
  // Array of colors to choose from
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

  const createCrewmate = async (event) => {

    event.preventDefault();

    const name = event.target.name.value;
    const speed = event.target.speed.value;
    const color = event.target.color.value;

    const crewmate = {name: name, speed: speed, color: color};

    await supabase
    .from('Crewmates')
    .insert({name: crewmate.name, speed: crewmate.speed, color: crewmate.color})
    .select();

    window.location = '/create';

    alert("Crewmate Created!");
 
  }

  return (
    <>
     
    <header className="create-a-crewmate-header">
    <h1 className="py-5 text-5xl font-bold">Create a New Crewmate</h1>
    <p className="py-5 text-xl">Fill out the form below to create a new crewmate!</p>
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4da35b00-9686-4c96-826d-6ee7550a5539/de5o9qp-4dae339c-a537-4cc4-bc40-3dc87c03bd31.png/v1/fill/w_1282,h_623/walfas_custom_prop_crewmate_among_us_by_cgtvyt29_by_cgtvyt29_de5o9qp-pre.png" />
    </header>

      <main>
      <form className="crewmate-creation-form" onSubmit={createCrewmate}>
      <div className="inputs">
        <div className="input-container">
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
        </div>

</div>         <div className="button-container"><input type="submit" value="Create Crewmate" className="edit-crewmate-button" /> </div>

      </form>
        </main>
    </>
  );
};
export default CreateACrewmate;
