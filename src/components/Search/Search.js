import React from 'react';
import './Search.css';

function Search() {

  const emojis = [
    
  { name:'happy',emoji:  'đ' },
  { name:'love',emoji:  'đ' },
  { name:'angry',emoji:  'đĄ' },
  { name:'hello',emoji:  'đ' },
  { name:'tick',emoji:  'â' },
  { name:'sad',emoji:  'âšī¸' },
  { name:'run',emoji:  'đââī¸' },
  { name:'heart',emoji:  'đ' },
  { name:'laugh',emoji:  'đ' },

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
      <span id="text">Happy</span> : <span role="img" aria-label="emoji" id="emoji">đ</span>
      </h2>
    </div>
  );
}

export default Search;
