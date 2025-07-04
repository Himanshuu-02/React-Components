import React from 'react'

 function Person({person}) {
  return (
    <div><h1>i am {person.name},my id is:{person.id}and my class is:{person.class}</h1></div>
  )
}
export default Person