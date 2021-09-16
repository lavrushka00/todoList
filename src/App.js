import React from "react"
import "./App.css"

import Appheader from "./components/app-header/app-header"
import Searchholder from "./components/search-panel/input-holder"
import TodoList from "./components/todo-list/todo-list"
import ItemStatusFilter from "./components/item-status-filter/item-status-filter"
import ItemAddForm from "./components/add-item/item-add-form"

export default class App extends React.Component {

  maxId = 100;

  state = { 
    todoData : [
    {label : "сходить в магазин", importent : false, id : 1},
    {label : "доделать курсовик", importent : true, id : 2},
    {label : "тз по simulink", importent : false, id : 3},
  ]
}


deleteItem = (id) => {
  this.setState(({ todoData }) =>{

    const idx = todoData.findIndex((el) => el.id === id)
  
    const newArray  = [
      ...todoData.slice(0, idx),
      ...todoData.slice(idx +1)
    ];

    return {
      todoData: newArray
    }
  })
}


addItem = (text) => {
  const newItem = {
    label: text,
    importent : false,
    id: this.maxId ++
  }

  this.setState(({todoData}) => {
    const newArr = [
      ...todoData,
      newItem,
    ]
    return {
      todoData: newArr
    }
  })

}


render () {
  return(
    <div>
      <Appheader toDo = {this.state.todoData.length} />
      <Searchholder />
      <ItemStatusFilter />
      <TodoList
       todos = {this.state.todoData}
       onDelete = {this.deleteItem } />
       <ItemAddForm
       onItemAdded = {this.addItem}/>
    </div>
  )

}
  
}


