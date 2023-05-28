/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { JobCard } from './Components';

const JOB_URL = "https://cache.showwcase.com/jobs/recommended";
function Jobs() {
  const [jobdata, setJobdata] = useState(localStorage.getItem('items'))
  const [formValue, setFormValue] = useState('Enter your API key');
  const fetchData = async () => {
    fetch(JOB_URL,
      {
        headers: {
          'x-api-key': formValue,
        },
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response error");
        }
      })
      .then(data => {
        // console.log(data);
        localStorage.setItem('items', JSON.stringify(data));
        var actualdata = JSON.parse(localStorage.getItem('items'));
        setJobdata(actualdata);
      })
      .catch((error) => console.error("Fetch error", error))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <input
        style={{ padding: 10, borderRadius: 10, marginTop: '3rem' }}
        onChange={e => setFormValue(e.target.value)}
        placeholder='Please Enter your API key'
        value={formValue} />
      <button onClick={fetchData} style={STYLE.buttonStyle}>Get Jobs</button>
      <section className='job-section'>
        {
          localStorage.getItem('items') != null ?
            (JSON.parse(localStorage.getItem('items')).map((e, i) => {
              return (
                <JobCard key={i} name={e.company.name} type={e.type} title={e.title} stack={e.stacks} url={e.applyUrl} />
              );
            })) :
            <h1>Work at your dream company💻</h1>
        }
      </section>
    </div>
  )
}

export default Jobs;

const STYLE = {
  buttonStyle: {
    width: '10rem',
    alignSelf: 'center',
    textAlign: 'center',
    background: 'cyan',
    color: 'black',
    fontWeight: 'bolder',
    marginTop: '5rem'
  }
}