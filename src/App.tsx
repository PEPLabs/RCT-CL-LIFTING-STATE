import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/parent-component/parent-component';




function App() {
  return (
    <div className="App">
    <h2>Lifting State</h2>
      <p>When managing state in a fully feature front-end applications you often need to send data from a parent component to a child component; you acheive this with the concept
        of "props", which at this point in time you've already seen.</p>
        <p>You ALSO often need to send data from a child component back to the parent component. This concept is known as "lifting state". Lifting  State is also a great strategy that
          assists with sharing data between sibling components, because you can pass data to a common parent.</p>
      <p>In this lab, let's explore how to lift state from a child to a parent.</p>


      <div className="section-container">

          <ParentComponent></ParentComponent>

      </div>

      <div>
        <a href="https://react.dev/learn/sharing-state-between-components">https://react.dev/learn/sharing-state-between-components</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try using the concept of lifting state to share data between sibling components.*/}
    </div>
  );
}

export default App;
