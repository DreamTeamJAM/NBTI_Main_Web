
/** test base64 */
import { useState } from "react";
import axios from "axios";
import { getAllUsers } from "services/api/userApi";


export default function Encrypt() {

    const [file, setFile] = useState("");

    const onFileChangeHandler = (e) => {
        e.preventDefault();
       setFile(e.target.files[0]);
        const formData = new FormData();
        formData.append('file', file);
        fetch('http://localhost:8080/api/upload', {
            method: 'post',
            body: formData
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
    };

    const user = {
      id : 1,
      username : 'abcabcz',
      password : '1234'
    };
      

    const fetchUsers = () => {
    const awsurl = 'https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta/users'
     
     return axios.get(awsurl).then(response => console.log(response.data));

    };
    return (
      <>
       <div>
       <label>Upload Your File </label>
        <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/>
       </div>
       <div>
         <label>GET Test</label>
         <button onClick = {() => getAllUsers(user)}>
           get Students
         </button>

       </div>
        
      </>
    );
  }


  