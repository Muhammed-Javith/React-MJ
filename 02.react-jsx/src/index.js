import React from 'react';
import ReactDOM  from 'react-dom';


//list using  react elemements with jsx:

// const element = <ol>
//   <li>Hello World!</li>
//   <li>Hello World!</li>
//   <li>Hello World!</li>
//   </ol>

//list using React elemements with jsx with array:
// const task =['go straight', 'Turn the list', 'Start the list'];
// const element = <ol>
//   <li>{task[0]}</li>
//   <li>{task[1]}</li>
//   <li>{task[2]}</li>
//   </ol>

//list using React elemements with jsx with array using javascript:
// const task =['go straight', 'Turn the left', 'Start the list'];
// const element = <ol>
//   { task.map((t) => <li> {t} </li>)}
//   </ol>

//list using React elemements with jsx with array using javascript:
// const task =['go straight', 'Turn the left', 'Start the list'];
// const element = <ol>
//   { task.map((t) => <li> {t} </li>)}
//   </ol>

  
//list with index using React elemements with jsx with array using javascript:
// const tasks =['go straight', 'Turn the left', 'Start the list'];
// const element = <ol>
//   { tasks.map((task,index) => <li key = {index}> {task} </li>)}
//   </ol>

//list with index using React elemements with jsx with array using javascript:
const tasks =['go straight', 'Turn the left', 'Start the list'];
const element = 
      <div>
        <h1> Task List</h1>
        <ol>
          { tasks.map((task,index) => <li key = {index}> {task} </li>)}
        </ol>
      </div>



ReactDOM.render(element,document.getElementById('root'));