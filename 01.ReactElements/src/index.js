import React from 'react';
import ReactDOM  from 'react-dom';
//const element = React.createElement('h1',null,'Welcome to HelloWorld!');

//const element = React.createElement('p',null,'Welcome to HelloWorld!');
//const element = React.createElement('strong',null,'Welcome to HelloWorld!');

// list using reactelement:
//     const element = React.createElement('ol',null,
//     React.createElement('li',null,"Take out the earth"),
//     React.createElement('li',null,"Go start"),
//     React.createElement('li',null,"Welcome to the list")
//     );

//list using array with react elemements:
const tasks =['go straight', 'Turn the list', 'Start the list'];
const element = React.createElement('ol',null,
//tasks.map((task) => React.createElement('li',null,task)) or
tasks.map((task) => React.createElement('li',{key:task},task))
);

ReactDOM.render(element,document.getElementById('root'));