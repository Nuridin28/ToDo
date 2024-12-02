    import React from 'react'
    import delet from './img/delet.png'
    import './modal.css'
import MoveToTrash from './MoveToTrash'
    export default function Delete(props) {
    const {onDelete, activeBtn} = props
    return (
        <div onClick={onDelete} className="main__delete edit">
            <img src={delet} alt="" />
            {activeBtn == 'To Do' ? <MoveToTrash /> : 'Delete Forever'}
        </div>
    )
    }
