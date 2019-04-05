import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

import checkAllImage from './img/check-all.svg';

class App extends Component {
  constructor(){
    super();
  
    this.state = {
      newItem: '',
      todoItems: [
        {title : 'DoDox', isComplete : true},
        {title : 'AramLee'},
        {title : 'KillLove'}
      ]
    };
    
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  };
  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      // const index = this.state.todoItems.indexOf(item);
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete : !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  onKeyUp(event){
    if(event.keyCode === 13){ //Enter key
      let text = event.target.value;
      if(!text){
        return;
      }

      text = text.trim(); //hàm xóa tất cả dấu cách đầu và cuối
      if(!text){
        return;
      }
      const {todoItems} = this.state;
      this.setState({
        newItem: '',
        todoItems: [
          {title : text, isComplete: false},
          ...todoItems
        ]
      });
    }
  }
  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }
  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={checkAllImage} />
          <input 
            type="text"  
            placeholder="Gõ vào đây" 
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        {
          todoItems.length > 0 &&
          todoItems.map((item,index) =>
            <TodoItem 
              key={index} 
              item={item} 
              onClick={this.onItemClicked(item)} 
            />
          )
        }
        {
          todoItems.length === 0 &&
            'Nothing here.....'
        }
        {/* Toán tử &&, Kiểm tra tồn tại phần tử nào trong mảng k? */}
      </div>
    );
  }
}

export default App;
