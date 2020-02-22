---
title: 'Simple React Hooks Concept'
date: '2019-10-29'
description: 'Just playing some piano'
---

## Why Hooks?

>We use Class Components if we want to leverage internal state in our components, but Class and lifecycle are confusing, due to the following:

* Order of how life cycles have to fire
* Keep track of state and how it re-renders
* Where and how should we implement different functionalities in which life cycle methods

_Does this bring back *good* memories?_

>Team React built hooks to simplifies this. Hooks is a way to write functional component but gain access to new functionality that previous only available to us if we wrote class components.  Hooks cannot be used inside of class component, matter of fact, it can only be used in function components. (React 16 is required).  Now let's look at a simple example

## Before we begin, let's review *Array Destructuring*

```
const arr = [1,2,3]

const [a,b,c] = arr

//a = 1, b = 2, c = 3

//Please make sure you are familiar with this
```

## First Hook: UseStateHook

>This allow functional components to access to internal state features that we can only do using class components previously. It is function that gets a parameter. UseState gives us back an array with two value in it. Let's say we are building a component that has a button, upon click it changes the name displayed in the component. Here is how to do it with hooks instead of class. If we want to add another button that changes the address upon click, we can create another (see highlighted)

```
/* The first array element is the variable that holds the state, 
 the second is functional that allows us to set the property 
you pass the initial value of the state into useState() */

const UseStateExample = () => {
	const [name, setName] = useState("Dylan")
	const [address, setAddress] = useState('Amsterdam')
	
	return (
		<component>
			<h1> {name} </h1>
			<button onClick = {() => setName('Jiaqi')}> Set Name of Jiaqi</button>
			<button onClick = {() => setAdress('Canada')}> Set Address</button>
		<component>
		)
	}
  ```

  >It is preferred to use more setStates to break apart our states on our component, rather than storing deeply nested objects. We use **useState** when we are building a feature or a component that needed local state inside component (Doesn't need lifecycle methods).  Here is the [article](https://reactjs.org/docs/hooks-intro.html#motivation) if you want more information on why the React team decided to add Hooks to the library.

## UseEffectHook

>It provides the ability to fire side effects inside of the functional components. What does that mean? What is firing side effects inside of the functional components??? 

>unlike useState, useEffect does not get back any value! Rather, it gets a fun-function that gets called *when ever the component changes or whenever the components updates, renders*. Here, everytime we delete or type a letter, it is firing useEffect, because our component re-renders is because we are calling setSearchQuery method, which is same as setState method.  Whenever the set parameter from useState gets called, it does re-render and update the component, as the result, the userEffect will always fire upon each rendering? IT REPLACES componentDidMount, and also any of the update lifecyle methods.

```
/*the secondary parameter, empty array takes properties that this affects has access 
to that will not trigger a re-render, it will fire just once the first time it amount*/

//for example, if we use searchQuery property there, it would fire everytime these properties change

useEffect(() => {
const fetchFunc = async () => {
	const response = await fetch('link')
	const resJson = await response.json() //this will return an array
	setUser(resJson[0])
}
	fetchFunc() 
	console.log('hello')
}, [searchQuery])

return
```

## In summary, here are the steps

1. Firing **useEffect** whenever it re-renders or component updates
2. Component updates whenever we set the state
3. We set the userState whenever the user comes in → render again (infinite loop)
4. [  ] at the end is Import =  minmic a componentDidMount
5. [searchQuery] = second parameter with a variable that is checked by hooks and it re-run the hooks (re-render) if it changes. for example, + or - in search field