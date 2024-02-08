import React from 'react'
import ReactDOM from 'react-dom/client'

var heading=React.createElement("div",{"id":"div1"},
[React.createElement("h1",{"id":"heading1"},"Hello World From React!"),
React.createElement("h2",{"id":"heading2"},"Hello World From React!")
]);
var root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);