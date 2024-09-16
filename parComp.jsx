import React, {useState} from "react"; 
import Production from './Production';  
const parComp = () =>  { 
    const [countSelected, setCountSelected] = useState(0); 
    const handleSelectChanges = (countNew)=> 
    { 
        setCountSelected(countNew);
    } 
    return ( 
        <div> 
            <header style={{ position: 'relative', padding: '5px', backgroundColor: 'blue' }}>
            <div style={{ position: 'centre', top: '5px', right: '5px' }}>
                <span>Was selected: {countSelected}</span> 
                </div>
            </header> 
            <Production onSelectChanges = {handleSelectChanges}/>
        </div>
    );
}; 
export default parComp;