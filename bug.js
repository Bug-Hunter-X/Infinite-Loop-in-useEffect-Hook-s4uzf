```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the component re-renders
    // every time count changes, triggering another setCount call.
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```