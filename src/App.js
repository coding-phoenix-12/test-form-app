import React from "react"
import {Question, ShuffleList, Done} from "./questions" 
import { useState } from "react";
import jsonQuestions from './questions.json';
import {auth, database} from './firebasecomps';
import Login from './login';
import {useAuthState} from 'react-firebase-hooks/auth';


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {

    const [isDone, setDone] = useState(false);

    const [inputs, setInputs] = useState({});

    const [user] = useAuthState(auth);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(event.target.name)
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        console.log(inputs,user);
        database.ref("user" + user.uid).set({
           email: user.email,
           options: inputs
          }).catch(alert);
        auth.signOut();
        setDone(true);
        
    }



    return (
        <>
        <div className= "heading">
            <h1>English Male Voice Preference Test
            </h1>
            <p>There are ten sentences below. For each of the sentences, there are seven recordings. Please mark which of the artist recording you prefer the most.
            </p>
            <hr /> 
            
         </div>
        
         {
            !user &&  !isDone && <Login />
        }

        {!isDone && user && <form onSubmit={handleSubmit}>
        <div className= "form-wrapper">
        
        {
            jsonQuestions.questions.map((quest) => 
            <div className="questions">
                <Question 
                question={quest.question}
                options={ShuffleList(quest.options)}
                handlechange={handleChange}
                />
            </div>
            )
        }   

        <input type="submit" />


        </div>
        </form>}
     {
       !user &&  isDone && <Done />
     }
        </>
    
    )
}