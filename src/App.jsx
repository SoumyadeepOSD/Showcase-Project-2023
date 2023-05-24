import Home from './Home';
import Jobs from './Jobs';
import Mentorship from './Mentorship';
import Hackathon from './Hackathon';
import Content from './Content';
import Header from './Header';
import { Routes, Route } from "react-router-dom"


const App = () => {
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






