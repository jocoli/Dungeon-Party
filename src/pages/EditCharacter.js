import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditCharacter.css";
import { supabase } from "../client";

const EditCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  async function deletePost(event) {
    event.preventDefault();

    await supabase.from("Characters").delete().eq("id", id);

    window.location = "/";
  }

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  
  const [selectedRace, setSelectedRace] = useState("");

    const handleRaceChange = (event) => {
        setSelectedRace(character.race = event.target.value);
    };
    

   
    const [selectedClass, setSelectedClass] = useState("");

    const handleClassChange = (event) => {
        setSelectedClass(character.class = event.target.value);
    };

  const updateCharacter = async (event) => {
    event.preventDefault();

    await supabase
      .from("Characters")
      .update({
        name: character.name,
        age: character.age,
        race: character.race,
        class: character.class,
      })
      .eq("id", id);

    window.location = "/";
  };

  return (
    <div>
      <form onSubmit={updateCharacter}>
        <label for="name">Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="age">Age</label>
        <br />
        <input
          type="number"
          id="age"
          name="age"
          value={character.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="race">Race</label>
        <br />
          <label>
            <input 
              type="radio"
              value="Human"
              checked={selectedRace === "Human"}
          
              onChange={handleRaceChange}
            />
            Human
          </label>
          <label>
              <input 
                type="radio"
                value="Elf"
                checked={selectedRace === "Elf"}
                onChange={handleRaceChange}
              />
              Elf
          </label>
          <label>
            <input 
              type="radio"
              value="Orc"
              checked={selectedRace === "Orc"}
              onChange={handleRaceChange}
            />
            Orc
          </label>
          <label>
            <input 
              type="radio"
              value="Lizardkin"
              checked={selectedRace === "Lizardkin"}
              onChange={handleRaceChange}
            />
            Lizardkin
          </label>
        <br />
        <br />
        <label for="class">Class</label>
        <br />      
          <label>
            <input 
              type="radio"
              value="Knight"
              checked={selectedClass === "Knight"}
              onChange={handleClassChange}
            />
            Knight
          </label>
          <label>
            <input 
              type="radio"
              value="Rogue"
              checked={selectedClass === "Rogue"}
              onChange={handleClassChange}
            />
            Rogue
          </label>
          <label>
            <input 
              type="radio"
              value="Mage"
              checked={selectedClass === "Mage"}
              onChange={handleClassChange}
            />
            Mage
          </label>
          <label>
            <input 
              type="radio"
              value="Healer"
              checked={selectedClass === "Healer"}
              onChange={handleClassChange}
            />
            Healer
          </label>
        <br />
        <input type="submit" value="Submit" />
        <button className="deleteButton" onClick={deletePost}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditCharacter;