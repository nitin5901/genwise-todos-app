import { useState } from 'react';
import Image from 'next/image';
import Overlay from '../Overlay/overlay';
import styles from './card.module.css';



const Card = ({title, checked, id, tasks, setTasks}) => {

    const [isChecked,setIsChecked] = useState(checked)
    const [displayOverlay, setDisplayOverlay] = useState(false);

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter( (task) => task.id !== id)
        setTasks(updatedTasks);
    }

    const editTask = (updatedTask) => {
        setIsChecked(false);
        setDisplayOverlay(false);
        const updateIndex  = tasks.findIndex( (task) => task.id === updatedTask.id)
        const updatedTasks = [...tasks];
        updatedTasks[updateIndex] = updatedTask;
        setTasks(updatedTasks);
    }
    

    return (
        displayOverlay ? 
        <Overlay title = {title} checked = {checked} id = {id} editTask = {editTask}/>
        :
        <li 
            className = {styles.listItem}
            onClick = { () => setIsChecked(!isChecked)}
        >
            <input 
                type = {"checkbox"}
                className = {styles.checkBox}
                checked = {isChecked} 
                name = {title} 
                id = {id}
                onChange = {() => setIsChecked(!isChecked)}
            />
            <span 
                htmlFor = {id}
                className = {styles.Title}
                onClick = { () => setIsChecked(!isChecked)}
            > 
                {title} 
            </span>
            <div className = {styles.buttonContainer}>
                <button 
                    onClick={ () => setDisplayOverlay(true)}
                    className = {styles.Buttons}
                >
                    <Image
                        src = {"/edit-icon.svg"}
                        alt = {"Edit"}
                        width = {30}
                        height = {30}
                    />
                </button>
                <button 
                    onClick={() => deleteTask(id)}
                    className = {styles.Buttons}
                >
                    <Image
                        src = {"/delete-icon.svg"}
                        alt = {"Delete"}
                        width = {25}
                        height = {25}
                    />
                </button>
            </div>  
        </li>
    )
}

export default Card;