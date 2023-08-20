import React from 'react';
// import Sum,{Sub, Mul, Div} from './Sum';

// import {got_img,fm_img,ie_img,mh_img,st_img,st_link,mh_link,ie_link,fm_link,got_link} from './link';
import Card from './Card';
import "./index.css";
import data from "./data";


// var value1 = document.getElementById('val1');
// var value2 = document.getElementById('val2');

// function ncard(val){
//     return(
//       <Card 
//       imgsrc={val.imgsrc}
//       sname={val.sname}
//       title={val.title}
//       link={val.link}
//     />
//     );
// }

function App(){
 
 return (
   
  <>
      <h1 className="heading_style"> List of Top 5 Webseries 2022</h1>
       

       {/* <Card 
         imgsrc={data[0].imgsrc}
         sname={data[0].sname}
         title={data[0].title}
         link={data[0].link}
       /> */}
       {/* <Card 
         imgsrc={data[1].imgsrc}
         sname={data[1].sname}
         title={data[1].title}
         link={data[1].link}
       />
        <Card 
         imgsrc={data[2].imgsrc}
         sname={data[2].sname}
         title={data[2].title}
         link={data[2].link}
       />
        <Card 
         imgsrc={data[3].imgsrc}
         sname={data[3].sname}
         title={data[3].title}
         link={data[3].link}
       />
        <Card 
         imgsrc={data[4].imgsrc}
         sname={data[4].sname}
         title={data[4].title}
         link={data[4].link1}
       /> */}

       {/* {data.map(ncard)}; */}

       {data.map((val)=>{   // fat arrow function.
        return(
              <Card 
              imgsrc={val.imgsrc}
              sname={val.sname}
              title={val.title}
              link={val.link}
            />
            );

       })}
  </>
 
 )
};

export default App;


//----------------------------------------------------------------------------------------------

// calculator   

// import Sum,{Sub, Mul, Div} from './Sum';


// // var value1 = document.getElementById('val1');
// // var value2 = document.getElementById('val2');

// function App(){
 
//  return (
   
//    <div>
//    {/* <input id="val1"placeholder='enter num 1'/>
//    <input id="val2"placeholder='enter num 2'/> */}
   
//      {/* <button >sum</button> */}
//         <ol>
//           <li> sum of two numbers is{Sum(5,6)}</li>
//           <li>sub of two numbers is {Sub(6,4)}</li>
//           <li>Mul od two numbers is {Mul(4,5)}</li>
//           <li>Division of two numbers is {Div(20,5)}</li>
//         </ol>
//    </div>
 
//  )
// };

// export default App;

// --------------------------------------------------------------------------------------
