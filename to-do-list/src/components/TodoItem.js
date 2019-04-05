import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';

//import img
import checkImage from '../img/check.svg';
import checkCompleteImage from '../img/check-complete.svg';

class TodoItem extends Component {
    render() {
        const { item , onClick } = this.props;
        let url = checkImage;
        if (item.isComplete){
            url = checkCompleteImage;
        }

        // let className = 'TodoItem';
        // if(item.isComplete){
        //     className += ' TodoItem-complete';
        // }
        return(
            // <div className={className}>
            <div 
                
                className={classNames(
                    'TodoItem',
                    {
                        'TodoItem-complete' : item.isComplete
                    }
                )}
            >
                <img src={url} onClick={onClick} />
                <p>{this.props.item.title}</p>
            </div>
        );
    };
};

export default TodoItem;