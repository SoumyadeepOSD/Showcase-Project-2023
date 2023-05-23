/* eslint-disable react/prop-types */
import CircularProgress from "@mui/material/CircularProgress";
import '../src/App.css';
import { CollabLogo, ContributeLogo, PlanLogo } from "./Images";


const CardData = ({value, key}) => {
  return (
    <div key={key} style={{display:'flex',flexDirection:'row', gap:'10', alignItems:'center'}}>
        <h2>{value.stack.name}</h2>
        <img src={value.stack.iconUrl} style={{height:20, width:20}} alt={value.stack.name}/>
    </div>
  )
}

const CircularProgressIndicator = () => {
  return(
    <div style = {{ width: "300px", marginLeft: 30 }}>
        <CircularProgress />
    </div>
  );
}

const Card = ({text, imgPath, position}) => {
  return(
  <div style={position==1 ? STYLE.CARDSTYLE_FIRST : position==2 ? STYLE.CARDSTYLE_SECOND : position==3 ? STYLE.CARDSTYLE_THIRD : STYLE.CARDSTYLE_FOURTH}>
    <img height={100} width={100} src={imgPath} alt="" />
    <p className="card-text">{text}</p>
  </div>
  );
}

const ShowcaseCard = () => {
  return(
    <div className="showcase-card">
      <img src={CollabLogo} height={150} width={150} alt="" />
      <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
        <img src={ContributeLogo} alt="contribute" height={150} width={150}/>
        <img src={PlanLogo} alt="plan" height={150} width={150}/>
      </div>
    </div>
  );
}


export {CardData, CircularProgressIndicator, Card, ShowcaseCard};

const STYLE = {
  CARDSTYLE_FIRST:{
    marginTop:'5rem',
    position: 'absolute',
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center',
    height: '1rem',
  },
  CARDSTYLE_SECOND:{
    position: 'absolute',
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center',
    height: '1rem',
    right: '0',
    marginTop: '20rem'
  },
  CARDSTYLE_THIRD:{
    marginTop:'10rem',
    position: 'absolute',
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center',
    height: '1rem',
    top: '20rem'
  },
  CARDSTYLE_FOURTH:{
    marginTop:'10rem',
    position: 'absolute',
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center',
    height: '1rem',
    right: '0',
    top: '30rem'
  },
};