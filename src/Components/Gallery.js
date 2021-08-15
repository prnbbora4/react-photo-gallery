import React, {useState} from 'react'
import './tab.css'
import Menu from "./menu";
import MenuItems from './MenuItems';
import Category from './Category';

// find unique category 
// first step map() method
// second step new Set()
// third step make an Array
// fourth step spread operator
// create for all category

const allCatValues = [...new Set(Menu.map((curElem) => { return curElem.category})), "all"]

console.log(allCatValues);

const Gallery = () => {

    const [items, setItems] = useState(Menu)

    const [catItems, setCatItems] = useState(allCatValues)

    const filterItem = (categItem) => {

        if(categItem === "all"){
            setItems(Menu)
            return
        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    // disable
    const disableSetCatItems = () => {
        setCatItems()
    }
    console.log(disableSetCatItems);

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order your fav food</h1>
            {/* <button disabled onClick={disableSetCatItems}>Home</button> */}
            <hr />

            {/* Category Menu */}
            <Category filterItem={filterItem} catItems={catItems}/>

            {/* All items */}
            <MenuItems items={items}/>
        </>
    )
}

export default Gallery
