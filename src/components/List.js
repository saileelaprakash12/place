import React from 'react'

function List({todos ,deleteList}) {
    
    const todosList= todos.length ? (
        todos.map((item)=>{
            debugger;
            return <div className="collection-item" key={item.id}>
                <span onClick={()=>{deleteList(item.id)}}>{item.content}</span>
            </div>
        })

    ):( <p className="center"> no favourite places  </p>)
    return (
        <div className="todos collection">
          {todosList}  
        </div>
    )
}

export default List
