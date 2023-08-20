import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';



ReactDOM.render(
    <>
      <App/>
       
    </>
  ,document.getElementById('root')
);




//we are using the render function to render the jsx
//here the document.getElementById('root') writing is bcaz of ReactDOM.

// import React from 'react';   // we are writing this is bcaz of babel ....in earlier we are writing var react = require('react'); like this
// import ReactDOM from 'react-dom';  //is to use of index.html's "root" in react file.
/* <>
    <App />  // we are writing the jsx format of file which is js and html we are using this with the help of bable.
  // </> */// here this is the fragment in react 

// reportWebVitals();




//in render function there are 2 parameters 1st "kya dikhana hai",2nd "kaha dikhana hai".

//we can render the multiple elemtnts at a time by using fragment which is <>....</>
//without fragment we cannor render the multiple elemenst at time.
//"root is the location which showing that the root is specified in index.html file."

//---------------------------------------------------------------------------------------------------------

// const name = "mahesh";

// ReactDOM.render(
//   <>  
   
//     <h1>Hello world {name}</h1>    // these are jsx expressions like we are using javascript in jsx.
//     <p>number is{5+5}</p>
//   </>
//   ,document.getElementById('root')
// );

//-------------------------------------------------------------------------------------------------------

//template literals
// console.log(`my name is ${name}`);  this is the template literals in es6.
//here we are using baktick.(``).
/* <>  
   
<h1>{`My name is ${name} ${last}`}</h1>
//template literals

</> */

//-------------------------------------------------------------------------
//template literals.
// ReactDOM.render(
//   <>  
   
//     <h1>Hello world {name} {last}</h1>
//     <h1>Hello world {name + last}</h1>
//     <h1>Hello world {name+" "+last}</h1>
//     <p>List of 5 web series.</p>
   
//   </>
//   ,document.getElementById('root')
// );

//-------------------------------------------------------------

//challenge 2

// const name = "mahesh";
// const last = "Bandewar";
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var greet = "AM";
// if(today.getHours() >= 12 & today.getMinutes() >= 0 & today.getSeconds() >= 0)
// {
//   greet="PM";
// }
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " "+ greet;

// ReactDOM.render(
//   <>  
//     <h1>{`My name is ${name} ${last}`}</h1>
//     <p>{`Today's Date is ${date}`}</p>
//     <p>{`Today's Date is ${time}`}</p>
   
//   </>
//   ,document.getElementById('root')
// );

//op ----My name is mahesh Bandewar
// Today's Date is 2022-2-5

// Today's Date is 12:47:32 PM

//======================================================

// const name = "mahesh";
// const last = "Bandewar";
// var date = new Date().toLocaleDateString();
// var time = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>  
//     <h1>{`My name is ${name} ${last}`}</h1>
//     <p>{`Today's Date is ${date}`}</p>
//     <p>{`Today's Date is ${time}`}</p>
   
//   </>
//   ,document.getElementById('root')
// );



//--------------------------------------------------------------------------------------------------

// jsx attributes

// const name = "Mahesh";
// const last = "Bandewar";
// const img1 = "https://picsum.photos/300/300";
// const img2 = "https://picsum.photos/240/300";
// const img3 = "https://picsum.photos/260/300";

// ReactDOM.render(
//   <>  
//     <h1>{`My name is ${name} ${last}`}</h1>
//     <img src={img1} alt="randomimage"/>  // here the self closing tags are there
//     <img src={img2} alt="randomimage"/>
//     <a href='https://maheshpb411.github.io/portfolio' target="_ddk">
//     <img src={img3} alt="randomimage"/>
//     </a>      // here the href,target,src,alt are the jsx attributes in img and anchor tag.
   
//   </>
//   ,document.getElementById('root')
// );

// -------------------------------------------------------------------------------------------------------
// class vs className

// import './index.css';

// const name = "Mahesh";
// const last = "Bandewar";
// const img1 = "https://picsum.photos/300/400";
// const img2 = "https://picsum.photos/297/400";
// const img3 = "https://picsum.photos/290/400";

// ReactDOM.render(
//   <>  
//     <h1 className="heading">{`My name is ${name} ${last}`}</h1>
//     <div className='img_div'>
//           <img src={img1} alt="randomimage"/>
//           <img src={img2} alt="randomimage"/>
//           <a href='https://maheshpb411.github.io/portfolio' target="_ddk">
//           <img src={img3} alt="randomimage"/>
//           </a>
//     </div>
   
//   </>
//   ,document.getElementById('root')
// );

// ----------------------------------------------------------------------------------------------------

//this is the kind of Inline CSS in react

// import './index.css';

// const name = "Mahesh";
// const last = "Bandewar";
// const img1 = "https://picsum.photos/300/400";
// const img2 = "https://picsum.photos/297/400";
// const img3 = "https://picsum.photos/290/400";

// const heading = {
//   color:" rgb(63, 66, 228)",
//   textAlign: "center",
//   textTransform: "capitalize",
//   fontWeight: "bold",
//   textShadow: "0px 2px 4px rgb(247, 88, 14)",
//   margin: "50px 0",
//   fontFamily: "'Josefin Sans', sans-serif"
// }

// ReactDOM.render(
//   <>  
//     <h1 style={heading}>{`My name is ${name} ${last}`}</h1>
//     <div className='img_div'>
//           <img src={img1} alt="randomimage"/>
//           <img src={img2} alt="randomimage"/>
//           <a href='https://maheshpb411.github.io/portfolio' target="_ddk">
//           <img src={img3} alt="randomimage"/>
//           </a>
//     </div>
   
//   </>
//   ,document.getElementById('root')
// );



//  indexed.css---
//  *{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// .heading{
//   color: rgb(63, 66, 228);
//   text-align: center;
//   text-transform: capitalize;
//   font-weight: bold;
//   text-shadow: 0px 2px 4px rgb(247, 88, 14);
//   margin: 50px 0;
//   font-family: 'Josefin Sans', sans-serif;
// font-family: 'Piazzolla', serif;
// }

// .img_div{
//   display: flex;
//   justify-content: center;
// }

// .img_div img{
//   width: 300px;
//   height: 400px;
  
// }
//=--------------------------------------------------------------------------------------------

//challenge 3-----greetings

// import './index.css';


// let timeDate = new Date(2021, 5, 5, 23);
// timeDate = timeDate.getHours();
// let message = "";
// const cssCol = {};


// if(0 <= timeDate && timeDate <= 11){
//   message = "Good Morning";
//   cssCol.color = "#009933";
// }
// else if(12 <= timeDate && timeDate <= 19){
//   message = "Good Afternoon";
//   cssCol.color = "#cc00cc";
// }
// else{
//   message = "Good Night";
//   cssCol.color = "Black";
// }



// ReactDOM.render(
//    <>
//     <div style={{ 
//   backgroundImage: `url("https://thumbs.dreamstime.com/z/colorful-restaurant-wall-typography-vector-food-bbq-background-motivational-cafe-menu-lettering-chalkboard-166187073.jpg")`}}>
//   <h1>Hello Mahesh, <span style={cssCol}>{message}</span> </h1>
// </div>
    
//    </>
//   ,document.getElementById('root')
// );

// index.css

// body{
//   background-color: #b4f2e1;
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0%;
//   /* font-family: 'Josefin Sans', sans-serif; */
//   font-family: 'Piazzolla', serif;
 
// }
// div{
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: -30px;
// }

// h1{
//   padding: 20px 20px;
//   background-color: #ffe9c5;
//   color: #fa9191;
//   border-radius: 20px;
// }

// span{
//   color:#eb6383;
// }

/////------------------------------------------------------------------------------------------




// ---------------------------------------------------------------------------------