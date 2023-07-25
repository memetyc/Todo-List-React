import React from 'react'
import { useState,useRef,useEffect } from 'react'
import Tasks from './Tasks'




function Inputs() {
    const [todo,setTodo] = useState({})
    const [list,setList] = useState([])
    const input = useRef()

// ilk açılışta çalıştırılacak
    useEffect(()=>{
        let todos = JSON.parse(localStorage.getItem('array'))
        if(!todos){
            localStorage.setItem('array',JSON.stringify([]))
        }else{
            setList(todos)
        }
    },[])

    useEffect(()=>{
        JSON.parse(localStorage.getItem('array'))
        if(list !== []){
            let anlıkListe = JSON.stringify(list)
            localStorage.setItem('array',anlıkListe)
        }
    
    },[list])

    function getInputValue(event){
        setTodo({
            text:event.target.value,
            isCompleted:false
        })
        if(event.key === 'Enter'){
            pushList()
        }
        
    }

    function pushList(){
        setList([...list,todo]) 
        input.current.value = ''
    }




  return (
    <div className='container mt-3'>
        <div className='input-group'>
            <input type="text" className='form-control' onKeyUp={getInputValue} ref={input} />
            <button className='btn btn-outline-secondary' onClick={pushList} >Kaydet</button>
        </div>
        
        <Tasks list={list} setList={setList} />
    </div>
  )
}

export default Inputs