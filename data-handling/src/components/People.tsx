"use client"
import { useState, useEffect } from "react"
const People = () => {
    
 const [people, setPeople] = useState([]);

 useEffect(()=>{
    fetch("https://fakerapi.it/api/v2/persons?_quantity=100&_gender=male&_birthday_start=2007-01-01")
    .then((response)=> response.json() )
    .then((data)=> setPeople(data.data))
    .catch((err)=> console.error(err))
 },[])

    return (
     <div>
        <h1>People List</h1>
        {
            people.map((person:any)=>{
                return (
                    <div>
                        <li key={person.id}>
                            <strong> {person.id} : {person.firstname} {person.lastname} </strong>
                            {person.gender} {person.birthday}
                        </li>
                    </div>
                )

            })
        }

   </div>
  )
}

export default People