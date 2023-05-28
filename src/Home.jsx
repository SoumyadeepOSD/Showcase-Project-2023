import '../src/App.css';
import { Card, ShowcaseCard } from './Components';
import { ContentLogo, HelpLogo, JobLogo } from './Images';

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
        <Card text="Find your dream job easily"imgPath={JobLogo} position={1}/>
        <Card text="Get mentorship support" imgPath={HelpLogo} position={2}/>
        <Card text="Get Shows"imgPath={ContentLogo} position={3}/>
      </section>
    </div>
  )
}

export default Home;