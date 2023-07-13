// import React, { useState } from 'react';
// import axios from 'axios';
// import FeedbackAdd from './Feedbackadd';


// export default function FeedbackForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [feedback, setFeedback] = useState('');
  

//   const [message, setMessage] = useState ('')
  
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(name);
//     console.log(email);
//     console.log(feedback);
//     try{
//         const response = await axios.post('/feedback/add', { name, email, feedback })
     
//         console.log(response.data);
//         if(response.status === 201){
//             setMessage('Thank You For Your Feedback✅!')
//             setFeedback(feedback) // reset feedback after submit
//             setName(name) // reset name after submit
//             setEmail('') // reset email after submit
//         } else {
//             setMessage('hmmm, May not worked contact support')
//         }
//     } catch (error) {
//         setMessage('Add your Info And Your Feedback')
//     }
        
//         // do something with response data, such as display a success message
//     //   })
//     //   .catch(error => {
//     //     console.error(error);
//     //     // handle errors, such as displaying an error message
        
//       }
// //       );
// //   };

//   return (
//     <div>
//         <br/>        
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <form className="feedback-form" onSubmit={handleSubmit}>

//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <label>
//         Feedback:
//         <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
//       </label>
//       <button type="submit">Submit</button>
//       <br/>
//       {/* <p>{message}</p>
//       <br/>
      
//       <p><strong>{name}</strong> submitted the following feedback:</p>
//       <br/>
//      <p><strong>Feedback:</strong>{feedback}</p>  */}
//       <br/>
//       <br/>
//       <br/>
   
//     </form>
//     <p>{message}</p>
//       <br/>
      
//       <p>&nbsp;<strong>{name}</strong> submitted the following feedback:</p>
//       <br/>
//      <p>&nbsp;<strong>Feedback:</strong>{feedback}</p> 
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackAdd from './Feedbackadd';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  // State variable for feedback history
  const [feedbackHistory, setFeedbackHistory] = useState([]);

  useEffect(() => {
    // Fetch feedback data from backend server
    axios.get('/feedback')
      .then(response => {
        setFeedbackHistory(response.data);
      })
      .catch(error => {
        console.error(error);
        // handle errors, such as displaying an error message
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(feedback);
    try {
      const response = await axios.post('/feedback/add', { name, email, feedback });
      console.log(response.data);
      if (response.status === 201) {
        setMessage('Thank You For Your Feedback✅!');
        // Add new feedback item to history
        setFeedbackHistory([...feedbackHistory, { name, feedback, time: new Date() }]);
        setFeedback(''); // reset feedback after submit
        setName(''); // reset name after submit
        setEmail(''); // reset email after submit
      } else {
        setMessage('hmmm, May not worked contact support');
      }
    } catch (error) {
      setMessage('Add your Info And Your Feedback');
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Feedback:
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
        <br />
        <p>{message}</p>
        <br />
        {feedbackHistory.map((item, index) => (
          <div key={index}>
            <p>
              <strong>{item.name}</strong> submitted the following feedback on {item.time.toLocaleString()}:
            </p>
            <p>
              <strong>Feedback:</strong> {item.feedback}
            </p>
            <br />
          </div>
        ))}
      </form>
    </div>
  );
}