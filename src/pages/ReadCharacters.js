import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../client";

const ReadCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // READ all post from table

    async function fetchCharacter() {
      const { data } = await supabase
        .from("Characters")
        .select()
        .order("created_at", { ascending: true });

      // set state of posts
      setCharacters(data);
    }
    fetchCharacter();
  }, []);

  return (
    <div className="ReadCharacters">
      {characters && characters.length > 0 ? (
        characters.map((character, index) => (
          <Card
            id={character.id}
            name={character.name}
            age={character.age}
            race={character.race}
            class={character.class}
          />
        ))
      ) : (
        <h2>{"No Challenges Yet 😞"}</h2>
      )}
    </div>
  );
};

export default ReadCharacters;