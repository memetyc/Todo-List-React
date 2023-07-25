import React from 'react'

function Tasks({list,setList}) {


    function deleteItem(index){
        let newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }
    function checkItem(index){
        let newList = [...list]
        if(newList[index].isCompleted){
            newList[index].isCompleted=false
        }else{
            newList[index].isCompleted=true
        }
        setList(newList)
    }


    let dogru = 'd-flex justify-content-between p-3 align-items-center bg-secondary rounded-3'
    let yanlıs = 'd-flex justify-content-between p-3 align-items-center bg-white rounded-3'
    // 'd-flex justify-content-between p-3 align-items-center'
  return (
    <>
        <ul className='list-unstyled mt-2'>
            {list.map((value,index)=>(
                <li  key={index} className={value.isCompleted ? dogru : yanlıs}>
                    <span>{value.text}</span>
                    <div className='d-flex gap-3'>
                        <i className="fa-solid fa-thumbs-up" onClick={()=>checkItem(index)} ></i>
                        <i className="fa-solid fa-xmark" onClick={()=>deleteItem(index)}></i>
                    </div>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Tasks
