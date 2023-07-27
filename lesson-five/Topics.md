# Introduction

Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called a reducer.

## To convert from useState to useReducer:

1. Dispatch actions from event handlers.
2. Write a reducer function that returns the next state for a given state and action.
3. Replace useState with useReducer.
