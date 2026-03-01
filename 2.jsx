import React, { useState, useCallback, memo } from 'react';

const Child = memo(({ onClick }) => {
  console.log("Child Re-render ho raha hai! 🔴");
  return <button onClick={onClick}>Child Button</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // useCallback function ko "yaad" kar leta hai
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Empty array matlab ye hamesha vahi purana reference rakhega

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      {/* Ab Child re-render NAHI hoga jab count badlega */}
      <Child onClick={handleClick} />
    </div>
  );
}