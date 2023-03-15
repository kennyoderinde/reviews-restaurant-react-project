import React from 'react'

const List = ({ people }) => {
  return (
    <div>
      {
      people.map((person) => (
        
          <div key={person.id}  class = "person">
            <img src={person.id} alt="Persons pictures" />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age}</p>
            </div>
          </div>
       
     ))
     }
    </div>
  )
}

export default List