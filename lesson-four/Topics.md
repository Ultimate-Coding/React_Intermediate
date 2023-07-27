# Introduction

State is isolated between components. React keeps track of which state belongs to which component based on their place in the UI tree. You can control when to preserve state and when to reset it between re-renders.

## The golden rule:

React will keep the state around for as long as you render the same component at the same position

**Note:**
State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.
You can force a subtree to reset its state by giving it a different key
