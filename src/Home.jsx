import '../src/App.css';
import { Card, ShowcaseCard } from './Components';
import { HackathonLogo, ContentLogo, HelpLogo, JobLogo } from './Images';

const Home = () => {
  return (
    <div className='home'>
      <section>
        <span className='title-blue'>Collaborate</span>
        <span className='title-black'>&</span>
        <span className='title-blue'>Create</span>
        <span className='title-black'>Together🤝</span>
      </section>
      <section>
        <ShowcaseCard/>
      </section>
      <section className='main-content'>
        <Card text="Find and explore hackathon" imgPath={HackathonLogo} position={1}/>
        <Card text="Find your dream job easily"imgPath={JobLogo} position={2}/>
        <Card text="Get mentorship support" imgPath={HelpLogo} position={3}/>
        <Card text="Manage content at a single click"imgPath={ContentLogo} position={4}/>
      </section>
    </div>
  )
}

export default Home;