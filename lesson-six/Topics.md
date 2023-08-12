# Introduction:

Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

## To pass context:

1. Create and export it with export const MyContext = createContext(defaultValue).
2. Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
3. Wrap children into <MyContext.Provider value={...}> to provide it from a parent

## Here’s a few alternatives you should consider before using context:

1. Start by passing props.
2. Extract components and pass JSX as children to them.

*** Reducers let you consolidate a component’s state update logic. Context lets you pass information deep down to other components. You can combine reducers and context together to manage state of a complex screen***

## To provide state and the dispatch function to components below:

1. Create two contexts (for state and for dispatch functions).
2. Provide both contexts from the component that uses the reducer.
3. Use either context from components that need to read them.
