import {useState} from 'react';


import REACT_APP_API_KEY from "../env";
const App = () => {
  const init = [];
  const[username, setUsername] = useState(init);
  const[userdata, setUserdata]=useState([]);
  const URL = `https://cache.showwcase.com/user/${username}/stacks`;
const FetchData = async() => {
  fetch(URL,
    {
      headers: {
        'x-api-key': REACT_APP_API_KEY,
      },
    })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
  //  console.log(data[0].stack.description);
  //  setData(data)
  // console.log(data);
    setUserdata(data);
    console.log(userdata[0]);
  })
  .catch((error) => console.error("FETCH ERROR:", error));
}

  return (
    <div>
      <form>
        <input 
        placeholder='Enter your username'
        onChange={e => setUsername(e.target.value)}/>
      </form>
      <h1>{username}</h1>
      <button onClick={FetchData}>Press</button>
      {
       userdata.map((value, index)=>{
        return(
          <div key={index} style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <h2>{value.stack.name}</h2>
            <img src={value.stack.iconUrl} style={{height:20, width:20}} alt={value.stack.name}/>
          </div>
        );
       })
      }
    </div>
  )
}

export default App;