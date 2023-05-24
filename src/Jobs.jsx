import {useState} from 'react';
import { JobCard } from './Components';

import REACT_APP_API_KEY from "../env";
const JOB_URL = "https://cache.showwcase.com/jobs/recommended";
function Jobs() {
  const[jobdata, setJobdata]=useState(localStorage.getItem('items'))
  const fetchData = async() => {
    fetch(JOB_URL,
    {
        headers:{
            'x-api-key': REACT_APP_API_KEY,
        },
    })
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Network response error");
        }
    })
    .then(data=>{
      // console.log(data);
      localStorage.setItem('items', JSON.stringify(data));
      var actualdata = JSON.parse(localStorage.getItem('items'));
      setJobdata(actualdata);
    })
    .catch((error)=>console.error("Fetch error", error))
  }   
  
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <button onClick={fetchData} style={STYLE.buttonStyle}>Get Jobs</button>
      <section className='job-section'>
          {
            JSON.parse(localStorage.getItem('items')).map((e, i)=>{
              return(
                <JobCard key={i} name={e.company.name} type={e.type} title={e.title} stack={e.stacks} url={e.applyUrl}/>
              );
            })
          }
      </section>
    </div>
  )
}

export default Jobs;

const STYLE = {
  buttonStyle:{
    width:'10rem', 
    alignSelf:'center', 
    textAlign:'center', 
    background:'cyan',
    color:'black',
    fontWeight:'bolder',
    marginTop:'5rem'
  }
}