import React from 'react';

import Whore from '../Whore';
import WhoreForm from "../WhoreForm";

class Whores extends React.Component {
    state = {
        showAddForm: false,
        showEditForm: false,
        selectedWhoreId: null,
        whores: []
    };

    setWhoresToStorage = () => {
        localStorage.setItem('whores', JSON.stringify(this.state.whores))
    };

    componentWillMount() {
        let whores = JSON.parse(localStorage.getItem('whores')) || [];
        this.setState({whores: whores});
        localStorage.setItem('whores', JSON.stringify(this.state.whores))
    }

    clickOnAdd = () => {
        this.setState((state) => ({
            showAddForm: true,
            showEditForm: false,
            selectedWhore: {}
        }))
    };

    handleAdd = (whore) => {
        this.setState((state) => ({
            showAddForm: false,
            whores: [
                ...state.whores,
                whore
            ]
        }))
        this.setWhoresToStorage();
    };

    handleRemove = (id) => {
        this.setState((state) => ({
            whores: state.whores.filter((whore) => whore.id !== id),
            showEditForm: false
        }))
    };

    handleUpdate = (updatedWhore) => {
        console.log('updated whore ', updatedWhore);
        this.setState((state) => ({
            showEditForm: false,
            whores: state.whores.map((whore) => whore.id === updatedWhore.id ? {
                ...updatedWhore
            } : whore)
        }));
        console.log('updated Whore State', this.state)
    };

    handleClickOnWhore = (id) => {
        this.setState((state) => ({
            showEditForm: true,
            showAddForm: false,
            selectedWhoreId: id,
            selectedWhore: this.getWhoreById(id)
        }));
    };

    getWhoreById = (id) => {
        return this.state.whores.find(whore => whore.id === id);
    };


    render() {
        const {whores, showEditForm, showAddForm, selectedWhore} = this.state;
        const {clickOnAdd, handleClickOnWhore, handleAdd, setWhoresToStorage, handleRemove, handleUpdate} = this;

        setWhoresToStorage();
        return (
            <div className="whore-manager-module">
                <div id="display-whores">
                    <button id="add-whore-btn" onClick={this.clickOnAdd}>Добавить</button>
                    <div id="whore-list">
                        {
                            whores.length > 0 ?
                            whores.map((whore, idx) => (
                                <Whore
                                    {...whore} idx={idx} key={idx}
                                    handleClickOnWhore={handleClickOnWhore}/>
                            )) :
                                <p>Шлюх пока нет</p>
                        }
                    </div>
                </div>
                <div id="whore-form-container">

                    {
                        <WhoreForm
                            clickOnAdd={clickOnAdd}
                            handleAdd={handleAdd}
                            handleRemove={handleRemove}
                            handleUpdate={handleUpdate}
                            whore={selectedWhore}
                            showEditForm={showEditForm}
                            showAddForm={showAddForm}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default Whores