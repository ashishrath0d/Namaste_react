{/* <div id="parent">
<div id="child1"><h2>ashish</h2></div>
<div id="child2"><h2>rathod</h2></div>
</div> */}


const headingtwo = React.createElement('div', { id: "parent" },
    [React.createElement('div', { id: "child1" }, React.createElement('h1', {}, 'ashish')), React.createElement('div', { id: "child2" }, React.createElement('h1', {}, 'rathod'))])



const heading = React.createElement('h1', {
    id: "heading"
}, "hello Namaste react");




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingtwo)