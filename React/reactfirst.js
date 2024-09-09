import React from "react";
import ReactDOM from "react-dom";
//this code covers namaste react episode 1,2,3.
/*
episode 1: creating core react element with CDN links in HTML
episode 2: using parcel to build(npx install -D parcel), execute (npx parcel index.html), npm install react, npm install react-dom to avoid CDN links.
episode 3: using start/build in package.json (npm run start, npm run build), JSX, React component(which returns JSX). 
*/

//creating dom elements with core react nested structure div -> c1,c2
const child1 = React.createElement("h2",{id:'child'},"this the child1 - core");
const child2 = React.createElement("h2",{id:'child'},"this the child2 - core");
const parent = React.createElement("div",{id:"heading"},[child1,child2]);
//same structure using JSX - HTML like syntax developer friendly
const jsxele = (<div>
    <h2>this is child1 - JSX</h2>
    <h2>this is child1 - JSX</h2>
    //java script code can be written inside JSX
    {console.log("Hello, this is java script code in JSX")
    }
</div>);

const Re_component1 = ()=>(<h2>this is from react component 1</h2>); //first letter capital
const Re_component2 = ()=>(<h2>this is from react component 2</h2>);//first letter capital
//using multiple react component and JSX also
const Re_component3 = ()=>{return (<div>
<Re_component1/>
    <Re_component2/>
    {jsxele}
    </div>

)};

const root = ReactDOM.createRoot(document.getElementById("parent"));
//RENDERING
//root.render(parent); //rendering react core component
//root.render(jsxele); //rendering react JSX element
root.render(<Re_component3/>); //rendering React component
