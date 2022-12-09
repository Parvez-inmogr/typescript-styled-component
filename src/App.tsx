import React from 'react';
import './App.css';
import { Animation } from './component/Animation';
import { Header } from './component/Header';
import { Hero } from './component/Hero';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';

function App() {
  const PersonName={
   
      first:'Parvez',
      last:'Hossain',
  
  }
  const PersonNameList=[
    {
   
      first:'Parvez',
      last:'Hossain',
  
  },
  {
   
    first:'Rakib',
    last:'Hossain',

},
{
   
  first:'Mahin',
  last:'Hossain',

}

  ]
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Animation name='Parvez' isLoggedIn={false} messageCount={10}></Animation>
      <Person name={PersonName}></Person>
      <PersonList names={PersonNameList}></PersonList>
     
    </div>
  );
}

export default App;
