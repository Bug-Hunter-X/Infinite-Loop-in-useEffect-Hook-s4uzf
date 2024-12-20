```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: either add a condition to stop the infinite loop or use a different approach.
    // Example: setCount only if it meets a specific condition 
    if (count < 5) {
      setCount(prevCount => prevCount + 1);
    }
  }, [count]); // Added count as a dependency so it updates count only once at start

  //Alternative Solution (if it doesn't need to be updated after render):
  // useEffect(() => {
  //   setCount(1); // Update count only once after render
  // }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```