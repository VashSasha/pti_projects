import React from 'react';

export default ({id, important, completed, title, onImportant, onCompleted, onRemove}) => {
    const classCompleted = completed ? 'completed' : '';
    const classImportant = important ? 'important' : '';

    return (
        <div className={`item ${classCompleted} ${classImportant}`}>
            <span className="title" onDoubleClick={() => onCompleted(id)}>{title}</span>
            <button className="delete" onClick={() => onRemove(id)}>&#10060;</button>
            <button className="important" onClick={() => onImportant(id)}>&#128276;</button>
        </div>
    );
};
