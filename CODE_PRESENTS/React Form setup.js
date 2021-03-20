// mades two areas one for question and one for answer.

import React from 'react';


const QuestionForm = (props) => {

  return(
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="question">Question:</label>
          <input
          id="question"
          name="question"
          type="text"
          
          />
    
        <label htmlFor="answer">Answer:</label>
        <input
        id="answer"
        name="answer"
        type="text"
        
        />
        <input type="submit" />
      </form> 
      )
    }
export default QuestionForm

//use onChange to handle any chnges.

