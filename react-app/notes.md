# Notes

- useState()
- So here we had a list item and we wanted a list item to be highlighted when its selected basically.
- So first we created a local variable it wont update if select a differe item means it state wont change.
- So in react we have useStates where react helps us in a way that it checks for any chnages in th UI and updates the state.

# props

- passing data
- We used here a typescript fucntionality called interfaces, Using so we can define or shape the interface of an object.
- Inside of the Props interface we define the properties i-e items, heading using type annotation
- Next we can now give a parameter to our component called props of type Props.
- Now we take our items array to AppJsx file and use it there as props.
- Now we have two option either in the component file we use the items array like "props.items" or we can use instead of props as parameter "{items, heading}" and remove the props we dont need to use it and code is more cleaner.
- So using props we can pass data to our components.

# Passing functions via props

- So firstly we create a rough structure how our fucntion "onSelectItem" will look and thn create one inside the interface, and thn pass it as a paramter too.
- After that we will use it a prop in AppJsx file and pass on a function by creating one handleSelectItem and pass it inside onSelectItem.
- And in the component file we need to call the fucntion inside onClick function "onSelectItem(item)"

# Diff b/w Props n State

- Props are input/ arguements passed to a component.
- similar to ftn arguements.
- immutable in nature means unchangeable(readOnly).
- Cause re-render

- States are Internal Data Managed by a component that can change overtime.
- similar to local variables inside a ftn.
- Mutable and canbe changed
- cause re-render

# Passing Children

- so we create a new component called Alert inside thst we created an interface by children prop of property ReactNode
- Why ReactNode? we had previously used string so when we passed an html tag it wont work so by doing so we can pass html tags too
- Using Children prop we can ask children toa component

# Assignment Button Component:

So we have to make a dynamic button component meaning if we click it, it should show a msg in console. While calling the component we should pass the value dynamically. Also add the color dynamically.

- First always try to do the minimal thing first like just creating a static component and use it in the AppTsx.
- Next we do is create an interface and give strcuture to our Props, Like we need a text, a color and onClickBtn function.
- Inisde the component classname we pass the color prop so it dynamically changes and inisde onClick event we pass onClickBtn function.
- Now if we want to add by default color so we speicfy it inside the interface, "color?: string" and inside the component parameter we pass the default value if dont do so it would give us an error.
- Now what if we pass invalid color in the App.tsx like "color="react"". For managing such error we can give strcuture to the prop like:
  " color?: "primary" | "secondary" | "danger" "

# Assignment Showing a dynamic alert:
