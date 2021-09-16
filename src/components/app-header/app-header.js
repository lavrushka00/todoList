import React from "react"
import "./app-header.css"


const Appheader = ({toDo}) => {

    return (
        <div >
            <h1 > Todo List</h1>
            <h3 className = "appHeaderDone" > {toDo} more to do </h3>
        </div>
    )
}


export default Appheader;