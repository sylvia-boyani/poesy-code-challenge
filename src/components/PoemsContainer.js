import React, {useState, useEffect} from "react";
import Poem from "./Poem";

function PoemsContainer() {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8004/poems")
     .then(response => response.json())
     .then(poems => setPoems(poems));
  }, []);


  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {
        poems.map((poem) => {
          return(
            <Poem key={poem.id} poem ={poem} />
          )
        })
      }
    
    </div>
  );
}

export default PoemsContainer;
