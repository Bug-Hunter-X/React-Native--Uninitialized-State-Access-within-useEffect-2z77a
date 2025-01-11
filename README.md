# React Native: Uninitialized State Access within useEffect

This repository demonstrates a common error in React Native: accessing a state variable before it has been initialized within the useEffect hook.  This often results in `undefined` values being used, leading to unexpected behavior or crashes.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file provides a corrected version using functional updates and a conditional check to handle the uninitialized state.

## Problem

When the component mounts, the `useEffect` hook is called before the state variable (`count`) is initialized by `useState`.  Attempting to immediately access `count` will result in an `undefined` value.

## Solution

The solution uses two strategies:

1. **Conditional Check:**  A simple `if` statement ensures that the state is initialized before accessing it.
2. **Functional Updates:** When updating state based on the previous state value, use a functional update, as this is more efficient than using the current state.