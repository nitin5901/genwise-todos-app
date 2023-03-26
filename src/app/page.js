"use client"
import styles from './page.module.css'
import Header from '@/components/Header/header'
import AddNewComponent from '@/components/AddNewComponent/addNewComponent'
import { useEffect, useState } from 'react'
import Card from '@/components/Card/card'

export default function Home() {
  var user = "Genwise"

  const [tasks, setTasks] = useState([])
  
  useEffect( () => {
    document.title = `TODO - (${tasks.length})`
  }, [tasks])

  return (
    <div className= {styles.container}>
      <Header user = {user} count = {tasks.length} />
      <AddNewComponent tasks = {tasks} setTasks = {setTasks} />
      <ol className = {styles.listContainer}>
        {
          tasks && tasks.map( ({title,checked,id}) => {
            return(
              <Card 
                title = {title} 
                checked = {checked} 
                id = {id}
                key = {id} 
                tasks = {tasks}
                setTasks = {setTasks}
              />
            )
          })
        }
      </ol>
     
    </div>
  )
}
