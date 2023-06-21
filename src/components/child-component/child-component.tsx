import React, { useState } from 'react';


interface MyProps {
    demoFunctionFromParent: Function;
    todoFunctionFromParent: Function;
}


const ChildComponent: React.FC<MyProps> = (props: MyProps) => {

    const [demoNumberState, setDemoNumberState] = useState(0);
    const [todoNumberState, setTodoNumberState] = useState(0);

    const childDemoFunction = ()=>{
            const newDemoNumberState = demoNumberState+1;
    
            setDemoNumberState(newDemoNumberState);
    
            props.demoFunctionFromParent(newDemoNumberState);
    };

    //TODO: you will need a new function here called "childTodoFunction". Write the logic necessary to increment todoNumberState by 5 each time.
    //CODE HERE



    return (
        <React.Fragment>
            <h3>Child Component</h3>
            <p>Here let's take a look at how you can send data back to the parent.</p>

            {/* Here is an example of how you would setup lifting state from a child to a parent. This button will cause the demoStringState variable
            in the parent component to increment its number by 1. */}
            <button onClick={childDemoFunction}>Demo Button</button>


            {/* TODO: your task to set up this button to increment the parent's todoStringState by 5s (5, 10, 15, 20, etc). This will require you to look at functions
            in both the parent and child components. */}
            <button >Todo Button</button>


        </React.Fragment>
    );
}

export default ChildComponent;