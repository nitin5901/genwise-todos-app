import Image from 'next/image'
import styles from './header.module.css'

const Header = ({user, count}) => {
  /**
   * Header Component 
   */
    return (
        <header className = {styles.header}>
         <h1 className = {styles.heading}>Welcome Back, {user}</h1>
         <div className = {styles.dateContainer}>
          <span className = { styles.TodayDate}>{new Date().toDateString()}</span>
         </div>
         <div className = {styles.taskCountBanner}>{`You've got ${count ? count : 0} tasks coming up in the next days`}</div>
      </header>
    )
}

export default Header