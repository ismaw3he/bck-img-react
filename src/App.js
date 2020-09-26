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
import img25 from "./frames/025.jpg";
import img26 from "./frames/026.jpg";
import img27 from "./frames/027.jpg";
import img28 from "./frames/028.jpg";
import img29 from "./frames/029.jpg";
import img30 from "./frames/030.jpg";
import img31 from "./frames/031.jpg";
import img32 from "./frames/032.jpg";
import img33 from "./frames/033.jpg";
import img34 from "./frames/034.jpg";
import img35 from "./frames/035.jpg";
import img36 from "./frames/036.jpg";
import img37 from "./frames/037.jpg";
import img38 from "./frames/038.jpg";
import img39 from "./frames/039.jpg";
import img40 from "./frames/040.jpg";
import img41 from "./frames/041.jpg";
import img42 from "./frames/042.jpg";
import img43 from "./frames/043.jpg";
import img44 from "./frames/044.jpg";
import img45 from "./frames/045.jpg";
import img46 from "./frames/046.jpg";
import img47 from "./frames/047.jpg";
import img48 from "./frames/048.jpg";
import img49 from "./frames/049.jpg";
import img50 from "./frames/050.jpg";
import img51 from "./frames/051.jpg";
import img52 from "./frames/052.jpg";
import img53 from "./frames/053.jpg";
import img54 from "./frames/054.jpg";
import img55 from "./frames/055.jpg";
import img56 from "./frames/056.jpg";
import img57 from "./frames/057.jpg";
import img58 from "./frames/058.jpg";
import img59 from "./frames/059.jpg";
import img60 from "./frames/060.jpg";
import img61 from "./frames/061.jpg";
import img62 from "./frames/062.jpg";
import img63 from "./frames/063.jpg";
import img64 from "./frames/064.jpg";
import img65 from "./frames/065.jpg";
import img66 from "./frames/066.jpg";
import img67 from "./frames/067.jpg";
import img68 from "./frames/068.jpg";
import img69 from "./frames/069.jpg";
import img70 from "./frames/070.jpg";
import img71 from "./frames/071.jpg";
import img72 from "./frames/072.jpg";
import img73 from "./frames/073.jpg";
import img74 from "./frames/074.jpg";
import img75 from "./frames/075.jpg";
import img76 from "./frames/076.jpg";
import img77 from "./frames/077.jpg";
import img78 from "./frames/078.jpg";
import img79 from "./frames/079.jpg";
import img80 from "./frames/080.jpg";
import img81 from "./frames/081.jpg";
import img82 from "./frames/082.jpg";
import './App.css';

import Window from "./components/Window";

function App() {
  
  const [data, setData] = useState([
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,
    img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41,img42,img43,img44,img45,img46,img47,img48,
    img49,img50,img51,img52,img53,img54,img55,img56,img57,img58,img59,img60,img61,img62,img63,img64,img65,img66,img67,img68,img69,img70,img71,img72,
    img73,img74,img75,img76,img77,img78,img79,img80,img81,img82
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
        <Window />
        <Window />
        <Window />
        <Window />
        <Window />
        <Window />
        <Window />
        <Window />
        <Window />
        <Window />
    </div>
  );
}

export default App;
