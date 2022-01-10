import React from 'react';

import Whore from '../Whore';
import WhoreForm from "../WhoreForm";

class Whores extends React.Component {
    state = {
        showAddForm: false,
        selectedWhoreId: null,
        whores: []
    };

    setWhoresToStorage = (whores) => {
        localStorage.setItem('whores', JSON.stringify(whores));
    };

    componentDidMount() {
        let whores = JSON.parse(localStorage.getItem('whores')) || [];
        this.setState({
            whores: whores
        });
        this.setWhoresToStorage(whores);
    }

    showAddForm = () => {
        this.setState({
            showAddForm: true,
            selectedWhoreId: null
        });
    };

    onSave = (whore) => {
        this.setState((state) => {
            const whores = [
                ...state.whores,
                whore
            ];

            this.setWhoresToStorage(whores);

            return {
                showAddForm: false,
                whores
            }
        });
    };

    onRemove = (id) => {
        this.setState((state) => {
            const whores = state.whores.filter((whore) => whore.id !== id);

            this.setWhoresToStorage(whores);

            return {
                whores,
                selectedWhoreId: null
            };
        });
    };

    onUpdate = (updatedWhore) => {
        this.setState((state) => {
            const whores = state.whores.map((whore) => whore.id === updatedWhore.id ? updatedWhore : whore);

            this.setWhoresToStorage(whores);

            return {
                whores,
                selectedWhoreId: null
            };
        });
    };

    onChoose = (id) => {
        this.setState((state) => ({
            showAddForm: false,
            selectedWhoreId: id
        }));
    };

    getWhoreById = (id) => {
        return this.state.whores.find(whore => whore.id === id);
    };

    render() {
        const {whores, selectedWhoreId} = this.state;
        const {onChoose, onSave, onRemove, onUpdate} = this;
        const selectedWhore = this.getWhoreById(selectedWhoreId);

        return (
            <div className="whore-manager-module">
                <div id="display-whores">
                    <button id="add-whore-btn" onClick={this.showAddForm}>Добавить</button>
                    <div id="whore-list">
                        {
                            whores.length > 0 ?
                                whores.map((whore, idx) => (
                                    <Whore {...whore} key={idx} onChoose={onChoose} />
                                )) :
                                <p>Шлюх пока нет</p>
                        }
                    </div>
                </div>
                <div id="whore-form-container">
                    {
                        this.state.showAddForm ?
                            <WhoreForm onSave={onSave} /> :
                            selectedWhoreId ?
                                <WhoreForm onRemove={onRemove} onUpdate={onUpdate} whore={selectedWhore} /> :
                                null
                    }
                </div>
            </div>
        );
    }
}

export default Whores;
