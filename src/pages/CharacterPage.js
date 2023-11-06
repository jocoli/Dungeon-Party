import React, { useEffect, useState } from "react";
import './CharacterPage.css'
import { supabase } from '../client'
import { useParams } from "react-router-dom";

const CharacterPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        async function fetchCharacter() {
          const { data } = await supabase
            .from("Characters")
            .select()
            .eq("id", id)
            .single();
    
          // set state of posts
          setCharacter(data);
        }
    
        fetchCharacter();
      }, [id]);

    
    return (
        <div>
            <h1>Meet {character.name}!</h1>
            <h3>They are {character.age} years old.</h3>
            <h3>They are a {character.race}. </h3>
            <h3>Their class is {character.class}!</h3>
            <br></br>
            <br></br>
            <h3>Welcome to the party {character.name}!</h3>
        </div>
    )
}

export default CharacterPage