import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    importent: false,
  };

  onLabelClicl = () => {
    this.setState(({done}) => {
        return {
            done: !done
        }
    });
  };

  onMarkClick = () => {
    this.setState(({importent}) => {
        return{
            importent: !importent
        }
    });
  };

  render() {
    const { label, onDelete } = this.props;
    const { done, importent } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    const style = {
      fontWeight: importent ? "bold" : "normal",
      color: importent ? "steelblue" : "black",
    };

    return (
      <span className={classNames}>
        <span style={style} onClick={this.onLabelClicl}>
          {label}
        </span>

        <button onClick={this.onMarkClick} className="markButton">
          Mark
        </button>
        <button 
        className="deleteButton"
        onClick = {onDelete}>Delete</button>
      </span>
    );
  }
}
