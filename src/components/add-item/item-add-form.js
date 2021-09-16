import React from "react"
import "./add-item.css"


export default class ItemAddForm extends React.Component {
    
    
   
  

    render() {

        return(
            <div className = "item-add-form">
                <button onClick = { () => this.props.onItemAdded('helly')}>
                    Add Item
                </button>
            </div>
        )
    }
}