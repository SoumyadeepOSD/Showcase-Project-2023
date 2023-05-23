import Home from './Home';
import Jobs from './Jobs';
import Mentorship from './Mentorship';
import Hackathon from './Hackathon';
import Content from './Content';
import Header from './Header';
import { Routes, Route } from "react-router-dom"
// import {CardData, CircularProgressIndicator} from './Components';


// import REACT_APP_API_KEY from "../env";
const App = () => {
//   const init = [];
//   const[username, setUsername] = useState(init);
//   const[userdata, setUserdata]=useState([]);
//   const[isloading, setIsLoading]=useState(true);
//   const URL = `https://cache.showwcase.com/user/${username}/stacks`;
// const FetchData = async() => {
//   setIsLoading(false)
//   fetch(URL,
//     {
//       headers: {
//         'x-api-key': REACT_APP_API_KEY,
//       },
//     })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("NETWORK RESPONSE ERROR");
//     }
//   })
//   .then(data => {
//     setTimeout(() => {
//       setIsLoading(true)
//     }, 2000)
//     setUserdata(data);
//     console.log(userdata[0]);
//   })
//   .catch((error) => console.error("FETCH ERROR:", error));
// }

  return (
    <div>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='jobs' element={<Jobs/>}/>
            <Route path='hackathon' element={<Hackathon/>}/>
            <Route path='mentorship' element={<Mentorship/>}/>
            <Route path='content' element={<Content/>}/>
          </Routes>
    </div>
  )
}

export default App;






