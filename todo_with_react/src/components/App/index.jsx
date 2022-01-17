import React from 'react';

import Task from '../Task';
import TaskInput from '../TaskInput';

class App extends React.Component {
    state = {
        tasks: [],
        titleFilter: '',
        filter: 'all'
    };

    filterButtons = [
        {
        title: 'Все',
        filter: 'all',
        className: 'active'
    }, {
        title: 'Незавершенные',
        filter: 'incompleted',
        className: ''
    }, {
        title: 'Завершенные',
        filter: 'completed',
        className: ''
    }];

    setTasksToStorage = tasks => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    onSave = task => {
        this.setState(state => {
            const tasks = [...state.tasks, task];
            this.setTasksToStorage(tasks);
            return {
                tasks
            };
        });
    };

    onRemove = id => {
        this.setState(state => {
            const tasks = state.tasks.filter(task => task.id !== id);
            this.setTasksToStorage(tasks);
            return {
                tasks
            };
        });
    };

    onCompleted = id => {
        this.setState(state => {
            const tasks = state.tasks.map(task => task.id === id ? {
                ...task,
                completed: !task.completed
            } : task);
            this.setTasksToStorage(tasks);
            return {
                tasks
            };
        });
    };

    onImportant = id => {
        this.setState(state => {
            const tasks = state.tasks.map(task => task.id === id ? {
                ...task,
                important: !task.important
            } : task);
            this.setTasksToStorage(tasks);
            return {
                tasks
            };
        });
    };

    onChange = e => {
        const value = e.target.value;
        this.setState({
            tasks: {
                title: value
            }
        });
    };

    onInput = e => {
        const value = e.target.value;
        this.setState({
            titleFilter: value
        });
    };

    getCompleteTasksCount = () => {
        return this.state.tasks.filter(task => task.completed).length;
    };

    getIncompleteTasksCount = () => {
        return this.state.tasks.length - this.getCompleteTasksCount();
    };

    getSearchedTask = tasks => {
        const filter = this.state.titleFilter;
        return tasks.filter(function (task) {
            return task.title.toLowerCase().includes(filter.toLowerCase());
        });
    };

    getFilter = e => {
        this.setState({
            filter: e.target.dataset.filter
        });
    };

    getFilteredTasks = tasks => {
        const filter = this.state.filter;
        return tasks.filter(function (task) {
            if (filter === 'incompleted') {
                return task.completed === false;
            }

            if (filter === 'completed') {
                return task.completed === true;
            }

            if (filter === 'all') {
                return true;
            }
        });
    };

    componentDidMount() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.setState({
            tasks: tasks
        });
        this.setTasksToStorage(tasks);
    }

    render() {
        const {onSave, onRemove, onImportant, onCompleted, getCompleteTasksCount, onInput, getFilter, getIncompleteTasksCount, filterButtons} = this;
        const {tasks, filter} = this.state;

        const taskList = this.getFilteredTasks(this.getSearchedTask(tasks));

        return (
            <div className="app">
                <div className="heading">
                    <h1>Список дел</h1>
                    <h4 className="stats">Осталось <span className="item-incompleted">{getIncompleteTasksCount()}</span>,
                        готово <span className="item-completed">{getCompleteTasksCount()}</span></h4>
                </div>

                <div className="filters">
                    <input type="text" placeholder="Что будем искать?" id="needle" onChange={onInput}/>

                    <div className="actions">
                        {
                            filterButtons.map((button, idx) => {
                                const className = filter === button.filter ? 'active' : '';
                               return <button className={className} data-filter={button.filter} onClick={getFilter} key={idx}>{button.title}</button>
                            })
                        }
                    </div>
                </div>

                <div className="source">
                    <TaskInput onSave={onSave} />
                </div>

                <div className="items" id="tasks">
                    {
                        taskList.length > 0 ?
                            taskList.map((task, idx) => (
                                <Task {...task} key={idx}
                                      onRemove={onRemove}
                                      onImportant={onImportant}
                                      onCompleted={onCompleted}
                                />
                            )) :
                            <p>No tasks yet</p>
                    }
                </div>
            </div>
        );
    }

}

export default App;
