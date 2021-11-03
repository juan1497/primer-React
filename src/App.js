import React, {useState}  from 'react';
import './App.css';
import Form from"./components/Form" 
import Profile from"./components/Profile" 
// function handleClick(e){
//   e.preventDefault();
//   console.log("has echo click")
// }
function App(){
  // const [count,setCount]=useState(0)
  const [profiles, setProfiles] = useState([]);
  const addProfile = (profile) => {
    const newProfiles = [ ...profiles, profile ];
    setProfiles(newProfiles);
    console.log(profiles)
  };
  return(
   <div className="App">
      <h1>Listado de perfiles</h1>
      <Form addProfile={addProfile} />
      <Profile profiles={profiles}/>
    {/* <p>has clickado {count} veces</p>
    <button onClick={()=>setCount(count-1)}>click</button>
    <button onClick={()=>setCount(count+1)}>click</button> */}

  </div>
  )
}
export default App;
