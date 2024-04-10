import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { supabase } from '../client';

const CrewmateDetail = () => {

   
    let { id } = useParams();

    const [crewmateDetail, setCrewmateDetail] = useState({  id: null,
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

            setCrewmateDetail(
                { id: data[0].id,
                    name: data[0].name,
                    speed: data[0].speed,
                    color: data[0].color
                }
            );
        }

        fetchCrewmateDetail();


    }, [])
    

    return (
<>

<div className="details-container">



<img src={`/public/crewmate-images/${crewmateDetail.color}-crewmate.png`} className="details-page-img" alt="Crewmate" />

<div className="details-text">
<h1 className="py-5 text-5xl font-bold">{crewmateDetail.name}</h1>
<p className="text-2xl"><b>Speed:</b> {crewmateDetail.speed} mph</p>
<p className="text-2xl"><b>Color:</b> <span className="capitalize">{crewmateDetail.color}</span></p>

    </div>
    <Link
    to="/gallery">
<button className="back-to-gallery-button">Back to Gallery</button>
        </Link>
    </div>

    <div className="flex align-center flex-col place-items-center">

    {crewmateDetail.speed > 500 ? <>
        <p className="text-2xl pb-5">This crewmate is super fast!</p>
    <img src="https://gifdb.com/images/high/anime-sonic-x-adventure-sonic-running-6z7txlvr2z1j29dh.gif" alt="Sonic Running" style={{width: "500px"}} />
    </>
     : <>
     <p className="text-2xl pb-5">This crewmate is pretty slow!</p>
 <img src="https://media1.giphy.com/media/l2JHVUriDGEtWOx0c/giphy.gif?cid=6c09b9521cp12ppkmakmgxkuhmtq0ds15bdpvkvzyxc6wbxi&ep=v1_gifs_search&rid=giphy.gif" alt="Sloth moving slowly" style={{width: "500px"}} />
 </>}
</div>


</>
    )
}

export default CrewmateDetail;