import React from 'react';
import './Search.css';

function Search() {

  const emojis = [
  { name:'happy',emoji:  '😊' },
  { name:'love',emoji:  '😍' },
  { name:'angry',emoji:  '😡' },
  { name:'hello',emoji:  '👋' },
  { name:'tick',emoji:  '✅' },
  { name:'sad',emoji:  '☹️' },
  { name:'run',emoji:  '🏃‍♂️' },
  { name:'heart',emoji:  '💖' },
  { name:'laugh',emoji:  '😂' },
  ] 


function handleChange(e) {
    //console.log(e.target.value);
    let val = e.target.value.toLowerCase();
    let matches = emojis.filter(v =>  v.name.toLowerCase().includes(val));
    //console.log(matches);
    //console.log(matches[0].name);
    if(matches.length!==0){
      document.getElementById("text").textContent=matches[0].name;
      document.getElementById("emoji").textContent=matches[0].emoji; 
    }
  }


  return (
    <div className="search">
      <input className="input" id="ip" onChange={handleChange} placeholder="Type Here.."/>
      
      <h2>
      <span id="text">Happy</span> : <span role="img" aria-label="emoji" id="emoji">😊</span>
      </h2>
    </div>
  );
}

export default Search;
