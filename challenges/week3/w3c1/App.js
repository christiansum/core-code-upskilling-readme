import "./styles.css";
import { useState } from "react";

export default function App() {
    const listValues = [ "Banana", "Apple","Orange","Mango","Pineapple","Watermelon"];
    const [liveSearch,setLiveSearch] = useState(listValues);

    const onChange=(event)=>{
        let listElements = event.target.value === "" ? listValues : listValues.filter(txt=>txt.toLowerCase().includes(event.target.value.toLowerCase()));
        setLiveSearch(listElements);
    }

    return (
        <div className="App">
            <p><label>Search:</label>
                <input type="text" onChange={onChange}/>
            </p>
            {liveSearch.map(element => {
                return <p>{element}</p>
            })}
        </div>
    );
}