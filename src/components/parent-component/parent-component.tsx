import React, { useState } from 'react';
import ChildComponent from '../child-component/child-component';


interface MyProps {
}


const ParentComponent: React.FC<MyProps> = (props: MyProps) => {

    //Parent's State
    const [demoStringState, setDemoStringState] = useState("Demo triggered 0 times");
    const [todoStringState, setTodoStringState] = useState("Todo is counting by 5s, currently at: 0");


    const parentDemoFunction = (dataFromChild: number) => {
        //you can put whatever complex logic you want in here.
        setDemoStringState("Demo triggered " + dataFromChild + " times");
    }


    const parentTodoFunction = (dataFromChild: number) => {
        //TODO: you'll need to add logic to this function so correctly complete this lab. The child component should give you the you need, this function will add the necessary words to the todoStringState.
        //CODE HERE

    }




    return (
        <React.Fragment>
            <h3>Parent Component</h3>

            <p>The following header is an example of text in the parent component, that can be altered by events inside of the child component:</p>
            <h5>{demoStringState}</h5>



            <div className="todo-container">
                <h6>Still Parent Component</h6>
                <p>TODO: Update the value of the following header using the concept of lifting state. Increment the number in the string by 5s.
                    So it should say "Todo is counting by 5s, currently at: 0", then "Todo is counting by 5s, currently at: 5", then "Todo is counting by 5s, currently at: 10", and so on.</p>

                <h5>{todoStringState}</h5>

                {/* Props can be any datatype, including functions. */}
                <ChildComponent demoFunctionFromParent={parentDemoFunction} todoFunctionFromParent={parentTodoFunction}></ChildComponent>

            </div>

        </React.Fragment>
    );
}

export default ParentComponent;