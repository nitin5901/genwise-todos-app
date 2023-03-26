import { useState } from "react"
import styles from './overlay.module.css';

const Overlay = ({title, checked, id, editTask}) => {

    const [updatedItem, setUpdatedItem] = useState({title: title, checked: checked, id: id})
    
   return(
        <form 
            className = {styles.editFormContainer}
            onSubmit={(e) => { 
            e.preventDefault();
            editTask(updatedItem) 
            }}

            >
            <input 
                required
                autoFocus
                className = {styles.Title}
                type = "text" 
                value = {updatedItem.title}
                onChange = {(e) => {
                    setUpdatedItem({title: e.target.value, checked: checked, id: id})
                }}
            />
            <button 
                className = {styles.editButton}
                type="submit"> Edit </button>
        </form>
   )
}

export default Overlay