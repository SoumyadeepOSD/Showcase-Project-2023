// import {useState} from 'react';


const App = () => {
  // const[data, setData] = useState('');
  const URL = "https://cache.showwcase.com/urlmeta?url=https://www.showwcase.com/thread/98763"
const FetchData = async() => {
  fetch(URL,
    {
      headers: {
        'x-api-key': '858ee679f0c978c9497d849710127ec2ac50b9656842d994f5',
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
    console.log(data);
    // setData(data.available);
  })
  .catch((error) => console.error("FETCH ERROR:", error));
}

  return (
    <div>
      <button onClick={FetchData}>Press</button>
      {/* <div style={{color:'white'}}>{data.available}</div> */}
    </div>
  )
}

export default App;