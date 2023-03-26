import { useState, useId } from "react";
import styles from './addNewComponent.module.css';
import Image from "next/image";

const AddNewComponent = ({ tasks, setTasks }) => {

    const [title, setTitle] = useState("");
    const id = useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTaskItem = {title: title, checked: false, id: `${id}-${Date.now()}`};
        console.log(newTaskItem);
        
        const updatedTasks = [...tasks,newTaskItem];
        setTasks(updatedTasks);
        setTitle("");
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className = {styles.formContainer}
        >
            <button 
                type="submit"
                className={styles.addButton}
            > 
                <Image 
                    src = {"/add-btn.svg"}
                    alt = {"Add"}
                    width = {30}
                    height = {30}
                />
            </button>
            <input 
                required
                autoFocus
                type = "text" 
                className = {styles.Title}
                value = {title}
                placeholder = "Add new task..."
                onChange = {(e) => setTitle(e.target.value)}
            />
            
        </form>
    )
}

export default AddNewComponent