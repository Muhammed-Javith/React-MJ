import  { useState } from 'react';
//using use-state hook here

const initialCount = 0;
function Counter() {
    const [count, setCount] = useState(initialCount);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button
                onClick={() => setCount((c) => c + 1)}
            >
                Click me
            </button>
        </div>
    );
}
export default Counter