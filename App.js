// const heading = React.createElement(
//         "h1", 
//         {id:"heading"}, 
//         "Hello Worl From React!"
//     );

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [   
        React.createElement("h1",{},"this is Heading 1"),
        React.createElement("h1",{},"this is Heading 2")
    ])
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);