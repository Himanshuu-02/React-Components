// import React from 'react'

// export default function List() {
//     const names=['Bruce','Diana','Alex']
//   return (
//     <div>
//         {
//             names.map(name=> <h1>{name}</h1>)
//         }
//     </div>
//   )
// }
import React from 'react'
import Person from './person'

 function List() {

  const persons=[
    {
      id:1,
      name:"Himanshu",
      class:"B.Tech",

    },
    {
      id:2,
      name:"ABC",
      class:"BCA",

    },
    {
      id:3,
      name:"XYZ",
      class:"MBA",

    }
    
  ]
  // const personlist=persons.map(person=><h2>i am {person.name},my id is:{person.id}and my class is:{person.class}</h2>)
const personlist=persons.map(person=><Person person={person}/>)
  return (
    <div>{personlist}</div>
  )
}
export default List
