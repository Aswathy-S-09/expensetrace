// import React, { useState,useEffect } from 'react';
// import "./Style.css"



// function Index() {
//   const [name, setName] = useState('');
//   const [submittedName, setSubmittedName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault(); 
//     setSubmittedName(name); 
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h1 className="text-xl font-bold mb-4">Enter Your Name</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Type your name"
//           className="border p-2 rounded w-full"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Submit
//         </button>
//       </form>

//       {submittedName && (
//         <div className="mt-6 text-lg">
//           Hello, <span className="font-semibold">{submittedName}</span>!
//         </div>
//       )}
//       {submittedName.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//     </div>
//   );
// }



  
// export default Index
import React, {useEffect, useState} from 'react'

function Index() {
    const[data,setdata] = useState("")
     const[data2,setdata2]=useState([])
     function submit(e){
         e.preventDefault()
         setdata2((prevData2) => [...prevData2, data]);
         setdata("")
     }
     return (
         <div>
             <form onSubmit={submit}>
                <label for = "name">Enter name</label>
                <input type = "text" id="name" value={data}  onChange={(e) => setdata(e.target.value)}/>
                <button>enter</button>
             </form>
             
        {data2.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      
         </div>
     )
}

export default Index