```javascript
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way to access count within useEffect
    console.log('Initial count (after initialization):', count); 
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Functional update
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Text>Count: {count}</Text>
  );
}

export default MyComponent;
```