import React, {useState, useEffect} from 'react';
import img1 from "./frames/001.jpg";
import img2 from "./frames/002.jpg";
import img3 from "./frames/003.jpg";
import img4 from "./frames/004.jpg";
import img5 from "./frames/005.jpg";
import img6 from "./frames/006.jpg";
import img7 from "./frames/007.jpg";
import img8 from "./frames/008.jpg";
import img9 from "./frames/009.jpg";
import img10 from "./frames/010.jpg";
import img11 from "./frames/011.jpg";
import img12 from "./frames/012.jpg";
import img13 from "./frames/013.jpg";
import img14 from "./frames/014.jpg";
import img15 from "./frames/015.jpg";
import img16 from "./frames/016.jpg";
import img17 from "./frames/017.jpg";
import img18 from "./frames/018.jpg";
import img19 from "./frames/019.jpg";
import img20 from "./frames/020.jpg";
import img21 from "./frames/021.jpg";
import img22 from "./frames/022.jpg";
import img23 from "./frames/023.jpg";
import img24 from "./frames/024.jpg";
import './App.css';

import Window from "./components/Window";

function App() {
  
  const [data, setData] = useState([
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,
  ])
  const [active, setActive] = useState(img1)

  useEffect(()=>{
    window.addEventListener("scroll",(e)=>{
      let number = Math.round(window.scrollY / 100);
      setTimeout(setActive(data[number]),500)
      
    })

    return ()=>{
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div className="App">
      
      <div className={"windows-container"} style={{backgroundImage:'url(' + active + ")"}}></div>
        <Window />
        <Window />
        <Window />
        <Window />
      

    </div>
  );
}

export default App;
