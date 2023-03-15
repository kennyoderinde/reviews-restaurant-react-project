import React, { useState } from 'react'
import ReminderData from './ReminderData'
import List from "./List"
import "./Reminder.css"

export default function Reminder() {

  const[people, setPeople] = useState(ReminderData)
  return (
    <div className='body'>
      <section className='container'>
        <h3> {people.length} birthdays today </h3>
        <List people= {people} />
        <button onClick={() => setPeople([])}>
            clear all
        </button>
      </section>
    </div>
  )
}
