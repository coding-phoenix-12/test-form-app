import React from "react"
  

function Done () {
    return (
        <>
            < hr />
            <h3>Thank you for your response </h3>
        </>
    )
}
  

function ShuffleList (list) {
    const shuffled = list.sort(() => Math.random() - 0.5)
    return shuffled
}

function Option (props) {
    
    
    
    return(
        <div className="options">
        <div className = "option-radio">
        <label>
                <input
                name={props.name}
                type = "radio"
                value={"http://docs.google.com/uc?export=open&id=" + props.id }
                onChange={props.handlechange}
                required
                />
            
            <audio src={"http://docs.google.com/uc?export=open&id=" + props.id } controls>
            </audio>
            </label>
        </div>
        </div>
    )
}





function Question(props) {

      
    return(
      
            <div className ="question" >
                <p>
                    <b>
                    {props.question}
                    </b>
                </p>
                {props.options.map(ops => (
                    <Option 
                        id={ops}
                        name={props.question[0]}
                        handlechange={props.handlechange}
                        />
                ))}

                
                
            </div>
        
    )
}

export {Question, ShuffleList, Done}