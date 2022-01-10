import React from 'react';
import $ from 'jquery';

class WhoreForm extends React.Component {
    constructor(props) {
        super(props);

        const {whore} = this.props;

        this.state = whore ? whore : this.getDefaultState();
    }

    getDefaultState() {
        return {
            id: null,
            name: '',
            lastName: '',
            nickname: '',
            age: '',
            price: ''
        };
    }

    componentDidUpdate(prevProps) {
        const {whore} = this.props;

        if (this.props.whore !== prevProps.whore) {
            this.setState(whore ? whore : this.getDefaultState());
        }
    }

    onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    };

    onSave = () => {
        if (this.isFormDataValid()) {
            this.props.onSave({
                ...this.state,
                id: '_' + Math.random().toString().substr(2, 9)
            });
        } else {
            this.highlightFields();
        }
    };

    onRemove = () => {
        this.props.onRemove(this.state.id);
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
    };

    onUpdate = () => {
        this.props.onUpdate(this.state);
    };

    render() {
        const {whore} = this.props;
        const {name, lastName, nickname, age, price} = this.state;
        const {onSave, onUpdate, onRemove, onChange} = this;

        return (
            <div className="whore-form">
                <form>
                    <input onChange={onChange} value={name} type="text" name="name" placeholder='Имя' />
                    <input onChange={onChange} value={lastName} type="text" name="lastName" placeholder="Фамилия" />
                    <input onChange={onChange} value={nickname} type="text" name="nickname" placeholder="Псевдоним" />
                    <input onChange={onChange} value={age} type="number" name="age" placeholder="Возраст" />
                    <input onChange={onChange} value={price} type="number" name="price" placeholder="Цена" />
                    {
                        whore ?
                            <>
                                <button onClick={onRemove} type="button" className="remove">Удалить</button>
                                <button onClick={onUpdate} type="button" className="update">Обновить</button>
                            </> :
                            <button onClick={onSave} type="button" className="save">Сохранить</button>
                    }
                </form>
            </div>
        );
    }
}

export default WhoreForm;
