import React from "react"
import {Question, ShuffleList, Done} from "./questions" 
import { useState } from "react";
import jsonQuestions from './questions.json';
import {auth, database} from './firebasecomps';
import Login from './login';
import {useAuthState} from 'react-firebase-hooks/auth';
import sha1 from 'sha1';
import Button from '@mui/material/Button';


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
        if (user) {
            console.log(inputs,user);

            
            database.ref("users").child(sha1(user.email)).set({
                    email: user.email,
                    options: inputs,

            }).catch(alert);

                
            
            auth.signOut();
            setDone(true);  
        }
        else {
            <Login />
        }
    }



    return (
        <>
        <div className= "heading">
            <h1>English Male Voice Preference Test
            </h1>
            
         </div>
        
         {
            !user &&  !isDone && <Login />
        }

        {!isDone && user && <form>
        <div className= "form-wrapper">
            <p>There are {jsonQuestions.questions.length} sentences below. For each of the sentences, there are seven recordings. Please mark which of the artist recording you prefer the most.
            </p>
            <hr /> 
        
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

        <div>  
                 <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div>


        </div>
        </form>}
     {
       !user &&  isDone && <Done />
     }
        </>
    
    )
}