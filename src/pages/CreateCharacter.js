import React, { useState } from 'react';
import './CreateCharacter.css'
import { supabase } from '../client'

const CreateCharacter = () => {

    const [character, setCharacter] = useState({name: "", age: "", race: "", class: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCharacter( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCharacter = async (event) => {
        event.preventDefault();

       const { error } = await supabase
        .from('Characters')
        .insert({name: character.name, age: character.age, race: character.race, class: character.class})
        .select()

        if (error) {
            console.log(error);
        }

        window.location = "/";

    }

    
    const [selectedRace, setSelectedRace] = useState("");

    const handleRaceChange = (event) => {
        setSelectedRace(character.race = event.target.value);
    };
    

   
    const [selectedClass, setSelectedClass] = useState("");

    const handleClassChange = (event) => {
        setSelectedClass(character.class = event.target.value);
    };
    

    return (
        <div>
            <form>
                <label >Name</label> <br />
                <input type="text" id="name" name="name" value ={character.name} onChange={handleChange}/><br />
                <br/>

                <label >Age</label><br />
                <input type="number" id="age" name="age" value ={character.age} onChange={handleChange}/><br />
                <br/>

                <label >Race</label><br />
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
                <br/>

                <label>Class</label><br />
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



                <input type="submit" value="Submit" onClick={createCharacter} />
            </form>
        </div>
    )
}

export default CreateCharacter