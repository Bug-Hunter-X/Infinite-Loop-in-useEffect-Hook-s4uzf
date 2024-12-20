# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications where an infinite loop is created within the `useEffect` hook. The bug arises from incorrectly specifying the dependency array in `useEffect`, leading to continuous re-renders and state updates. 

## Bug Description
The `MyComponent` uses the `useEffect` hook to update the `count` state. However, an empty dependency array `[]` implies that the effect should run only once after the initial render.  Inside the effect, it attempts to update the count, triggering a re-render, which triggers the effect again, resulting in an infinite loop. 

## Solution
The solution involves correctly managing the dependencies. In this case, you should avoid updating the state based on the current state value within `useEffect` if it intends to run only once after initial render. Instead, you might want to use a different approach to perform state updates or include relevant dependencies in the dependency array to control the update timing.