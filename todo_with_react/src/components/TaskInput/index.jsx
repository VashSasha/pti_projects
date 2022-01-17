import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            completed: false,
            important: false
        };
    }

    onChange = e => {
        const value = e.target.value;
        this.setState({
            title: value
        });
    };

    handleAdd = e => {
        if (e.keyCode === 13) {
            if (e.target.value !== '') {
                this.props.onSave({ ...this.state,
                    id: '_' + Math.random().toString().substr(2, 9)
                });
                this.setState({
                    id: null,
                    title: ''
                });
            }
        }
    };

    render() {
        const {title} = this.state;
        const {handleAdd, onChange} = this;

        return <input type="text" onChange={onChange} onKeyUp={handleAdd} value={title} placeholder="Что нужно сделать?"/>
    }

}

export default TaskInput;
