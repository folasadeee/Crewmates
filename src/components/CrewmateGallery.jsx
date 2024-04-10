import { supabase } from '../client';
import { useEffect, useState } from "react";

import CrewmateCard from './CrewmateCard';


const CrewmateGallery = () => {

    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {

        const fetchCrewmates = async () => {
            const { data, error } = await supabase
            .from('Crewmates')
            .select()
            .order('id', {ascending: false});

            if (error) {
                console.log('Error fetching crewmates:', error.message);
                return;
            }

        setCrewmates(data);
        }

        fetchCrewmates();


    }, []);

    return (
        <>
            <header>
            <h1 className="py-5 text-5xl font-bold">Your Crewmate Gallery!</h1>
                </header>

                <main className='crewmate-gallery'>

{ crewmates ? crewmates && crewmates.map((crewmate) => (

<CrewmateCard key={crewmate.id} crewmate={crewmate} />

) ) : <p>Loading...</p>
}
                    </main>

             

        </>
    )
}
export default CrewmateGallery;