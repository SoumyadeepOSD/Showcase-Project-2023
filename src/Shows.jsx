import { useState } from 'react';

const SHOW_URL = "https://cache.showwcase.com/projects";
function Shows() {
  // eslint-disable-next-line no-unused-vars
  const [showdata, setShowdata] = useState(localStorage.getItem('shows'));
  const fetchShowData = async () => {
    fetch(SHOW_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response error");
        }
      })
      .then(data => {
        localStorage.setItem('shows', JSON.stringify(data));
        var actualdata = JSON.parse(localStorage.getItem('shows'));
        setShowdata(actualdata);
      })
      .catch((error) => console.error("Fetch error", error))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={fetchShowData} style={STYLE.buttonStyle}>Get shows</button>
      <section className='job-section'>
        {
          localStorage.getItem('shows') != null ?
            (
              JSON.parse(localStorage.getItem('shows')).map((e, i) => {
                var url = e._self
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'gray', padding: 10, borderRadius: 10, marginTop: 10 }}>
                    <img src={e.coverImageUrl} style={{ height: 50, width: 50 }} />
                    {e.title}
                    <a href={url} style={{ color: 'white' }}>Visit</a>
                  </div>
                );
              })
            ) : <h1 style={{ alignSelf: 'center', textAlign: 'center' }}>Get Shows🚀</h1>
        }
      </section>
    </div>
  )
}

export default Shows;

const STYLE = {
  buttonStyle: {
    width: '20rem',
    alignSelf: 'center',
    textAlign: 'center',
    background: 'cyan',
    color: 'black',
    fontWeight: 'bolder',
    marginTop: '5rem'
  }
}