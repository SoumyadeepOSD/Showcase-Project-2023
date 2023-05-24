import REACT_APP_API_KEY from "../env";
import {useState} from 'react';
const JOB_URL = "https://cache.showwcase.com/jobs/recommended";

const DataHook = () => {
    const init = 0;
    const[jobdata, setjobData] = useState(init);
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
            setjobData(data);
            console.log(jobdata);
        })
        .catch((error)=>console.error("Fetch error", error))
    }    
    return{jobdata, fetchData};
}


export default DataHook;