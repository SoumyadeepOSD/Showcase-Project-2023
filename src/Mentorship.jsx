import {useState} from 'react';
import { MentorCard } from './Components';

const JOB_URL = "https://cache.showwcase.com/collaborators/discover";
function Jobs() {
  const[jobdata, setJobdata]=useState(localStorage.getItem('jobitems'))
  const[formValue, setFormValue] = useState('Enter your API key');
  const fetchMentorData = async() => {
    fetch(JOB_URL,
    {
        headers:{
            'x-api-key': formValue,
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
      localStorage.setItem('jobitems', JSON.stringify(data));
      var actualdata = JSON.parse(localStorage.getItem('jobitems'));
      setJobdata(actualdata);
    })
    .catch((error)=>console.error("Fetch error", error))
  }   

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <input
          style={{padding:10, borderRadius:10, marginTop:'3rem'}}  
          onChange={e => setFormValue(e.target.value)}
          placeholder='Please Enter your API key'
          value={formValue}/>
      <button onClick={fetchMentorData} style={STYLE.buttonStyle}>Find Collaborators & Mentors</button>
      <section className='job-section'>
          {
            localStorage.getItem('jobitems')!=null?
            (
              JSON.parse(localStorage.getItem('jobitems')).map((e, i)=>{
                return(
                  <MentorCard key={i} data={e} users={e.users}/>
                );
              })
            ):<h1 style={{alignSelf:'center', textAlign:'center'}}>Get Ready to collab🚀</h1>
          }
      </section>
    </div>
  )
}

export default Jobs;

const STYLE = {
  buttonStyle:{
    width:'20rem', 
    alignSelf:'center', 
    textAlign:'center', 
    background:'cyan',
    color:'black',
    fontWeight:'bolder',
    marginTop:'5rem'
  }
}