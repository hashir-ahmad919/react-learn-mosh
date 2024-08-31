import { useState } from "react";

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;

  //(item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hooks
  const [selectIndex, setSelectedIndex] = useState(-1);

  //e.g: const [name, setName] = useState("");
  // arr[0]; // variable (selectIndex);
  // arr[1]; // updater function;
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

//Notes

/**
 * useState()
 * So here we had a list item and we wanted a list item to be highlighted when its selected basically.
 * So first we created a local variable it wont update if select a differe item means it state wont change.
 * So in react we have useStates where react helps us in a way that it checks for any chnages in th UI and updates the state.
 *
 *
 * props
 *
 * passing data ***
 * We used here a typescript fucntionality called interfaces, Using so we can define or shape the interface of an object.
 * Inside of the Props interface we define the properties i-e items, heading using type annotation
 * Next we can now give a parameter to our component called props of type Props.
 * Now we take our items array to AppJsx file and use it there as props.
 * Now we have two option either in the component file we use the items array like "props.items" or we can use instead of props as  parameter "{items, heading}" and remove the props we dont need to use it and code is more cleaner.
 * So using props we can pass data to our components.
 *
 * passing functions via props ***
 * So firstly we create a rough structure how our fucntion "onSelectItem" will look and thn create one inside the interface, and thn pass it as a paramter too.
 * After that we will use it a prop in AppJsx file and pass on a function by creating one handleSelectItem and pass it inside onSelectItem.
 * And in the component file we need to call the fucntion inside onClick function   "onSelectItem(item)"
 *
 * Diff b/w Props n State ***
 * Props are input/ arguements passed to a component.
 * similar to ftn arguements.
 * immutable in nature means unchangeable(readOnly).
 * Cause re-render
 *
 * States are Internal Data Managed by a component that can change overtime.
 * similar to local variables inside a ftn.
 * Mutable and canbe changed
 * cause re-render
 *
 *
 * Passing Children ***
 * so we create a new component called Alert inside thst we created an interface by children prop of property ReactNode
 * Why ReactNode? we had previously used string so when we passed an html tag it wont work so by doing so we can pass html tags too
 * Using Children prop we can ask children toa component
 *
 * */
