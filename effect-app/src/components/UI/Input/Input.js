import React,{useRef,useImperativeHandle} from 'react'

const Input=React.forwardRef((props,ref) =>{

    const inputRef= useRef();

    const activate=()=>{
        inputRef.current.focus()
    }
    useImperativeHandle(ref,()=>{
        return{
            focus:activate
        }
    })

  return (
    <div className={props.className}>
      <label htmlFor={props.id}> {props.name}</label>
      <input  ref={inputRef} type={props.type} id={props.id} value={props.value} onChange={props.onChange} placeholder={props.placeholder
    }></input>
    </div>
  );
})

export default Input;
