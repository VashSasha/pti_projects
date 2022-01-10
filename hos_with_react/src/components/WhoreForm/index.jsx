import React from 'react';

// import Whore from '../Whore'
import $ from 'jquery';

class WhoreForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(this.state);
        this.setState(this.props.whore);
    }

    componentDidUpdate(prevProps) {
        if (this.props.whore !== prevProps.whore) {
            console.log('3333333333333333', this.props.whore, prevProps.whore);
            this.setState(this.props.whore);
        }
    }

    handleInputChange = (e) => {
        this.isFormDataValid(e.target)
        const value = e.target.value;
        const name = e.target.name;

        this.setState({[name]: value});
    };

    onSave = () => {
        if (this.isFormDataValid()) {
            this.props.handleAdd({
                ...this.state,
                id: '_' + Math.random().toString().substr(2, 9),
                showAddForm: false
            });
        } else {
            console.log('form is invalid')
            this.highlightFields();
        }
    };

    onRemove = () => {
        console.log('state on remove ', this.state);
        console.log(this.state.id);
        this.props.handleRemove(this.state.id);
    };

    isFormDataValid = () => {
        return $('.whore-form input').toArray().every(function (input) {
            return input.value !== '';
        });
    };

    highlightFields = () => {
        $('.whore-form input').each(function (index, input) {
            if (input.value === '') {
                input.style.border = '3px solid red';
            } else {
                input.style.border = '1px solid #000';
            }
        });
    }

    onUpdate = () => {
        this.props.handleUpdate(this.state);
    };

    render() {
        console.log('+++++++++++++++');
        const {showAddForm, showEditForm} = this.props;
        const {name, lastName, nickname, age, price} = this.state;
        const {onSave, onUpdate, handleInputChange, onRemove} = this;
        console.log('state on load form', this.state)
        return (<>
                {
                    showAddForm ?
                        <div className="whore-form">
                            <form>
                                <input onChange={handleInputChange} value={name} type="text" name="name"
                                       placeholder='Имя'/>
                                <input onChange={handleInputChange} value={lastName} type="text" name="lastName"
                                       placeholder="Фамилия"/>
                                <input onChange={handleInputChange} value={nickname} type="text" name="nickname"
                                       placeholder="Псевдоним"/>
                                <input onChange={handleInputChange} value={age} type="number" name="age"
                                       placeholder="Возраст"/>
                                <input onChange={handleInputChange} value={price} type="number" name="price"
                                       placeholder="Цена"/>
                                <button onClick={onSave} type="button" className="save">Сохранить</button>
                            </form>
                        </div> :
                        null
                }
                {
                    showEditForm ?
                        <div className="whore-form">
                            <form>
                                <input onChange={handleInputChange} value={name} type="text" name="name"
                                       placeholder='Имя'/>
                                <input onChange={handleInputChange} value={lastName} type="text" name="lastName"
                                       placeholder="Фамилия"/>
                                <input onChange={handleInputChange} value={nickname} type="text" name="nickname"
                                       placeholder="Псевдоним"/>
                                <input onChange={handleInputChange} value={age} type="number" name="age"
                                       placeholder="Возраст"/>
                                <input onChange={handleInputChange} value={price} type="number" name="price"
                                       placeholder="Цена"/>
                            </form>
                            <button onClick={onRemove} type="button" className="remove">Удалить</button>
                            <button onClick={onUpdate} type="button" className="update">Оновить</button>
                        </div> :
                        null
                }
            </>
        );
    }
}

export default WhoreForm

/*
    isFormDataValid: function() {
        return $('.whore-form input').toArray().every(function(input) {
            return input.value !== '';
        });
    }
* * */