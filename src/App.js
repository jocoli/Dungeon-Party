import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadCharacters from './pages/ReadCharacters'
import CreateCharacter from './pages/CreateCharacter'
import EditCharacter from './pages/EditCharacter'
import CharacterPage from './pages/CharacterPage'
import { Link } from 'react-router-dom'


const App = () => {
  
  const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  const characters = [
      {'id':'1', 
      'name': 'Jerry',
      'age':'23', 
      'race': 'Elf',
      'class': 'Mage'},
      {'id':'2', 
      'name': 'Limo',
      'age':'42', 
      'race': 'Orc',
      'class': 'Knight'},
      {'id':'3', 
      'name': 'Phoenix',
      'age':'18', 
      'race': 'Human',
      'class': 'Rogue'},
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadCharacters data={characters}/>
    },
    {
      path:"/edit/:id",
      element: <EditCharacter data={characters} />
    },
    {
      path:"/new",
      element: <CreateCharacter />
    },
    {
      path: "/character/:id",
      element: <CharacterPage data={characters}/>
    }

  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Dungeon Party</h1>
        <Link to="/"><button className="headerBtn"> Party Members </button></Link>
        <Link to="/new"><button className="headerBtn"> Create Member </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
