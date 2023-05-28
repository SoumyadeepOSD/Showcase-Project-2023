import Home from './Home';
import Jobs from './Jobs';
import Mentorship from './Mentorship';
import Header from './Header';
import Shows from './Shows';
import { Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='mentorship' element={<Mentorship />} />
        <Route path='shows' element={<Shows />} />
      </Routes>
    </div>
  )
}




export default App;






