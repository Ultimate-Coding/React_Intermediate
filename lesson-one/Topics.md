# Why was React built?

- Imagine riding next to someone in a car and telling them turn by turn where to go. They don’t know where you want to go, they just follow your commands. (And if you get the directions wrong, you end up in the wrong place!) It’s called imperative. In imperative programming, you have to write the exact instructions to manipulate the UI depending on what just happened.

Manipulating the UI imperatively works well enough for isolated examples, but it gets exponentially more difficult to manage in more complex systems. Imagine updating a page full of different forms. Adding a new UI element or a new interaction would require carefully checking all existing code to make sure you haven’t introduced a bug (for example, forgetting to show or hide something).

React was built to solve this problem.

In React, you don’t directly manipulate the UI—meaning you don’t enable, disable, show, or hide components directly. Instead, you declare what you want to show, and React figures out how to update the UI. Think of getting into a taxi and telling the driver where you want to go instead of telling them exactly where to turn. It’s the driver’s job to get you there, and they might even know some shortcuts you haven’t considered!

# Thinking about UI declaratively:

1. Identify your component’s different visual states.
2. Determine what triggers those state changes.
3. Represent the state in memory using useState.
4. Remove any non-essential state variables.
5. Connect the event handlers to set the state.
