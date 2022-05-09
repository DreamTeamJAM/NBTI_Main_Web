
/** test base64 */

import { Button } from "GlobalStyles";
import { useState } from "react";


  
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
    return (
      <>
       <div>
       <label>Upload Your File </label>
        <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/>
       </div>
       <div>
         <label>GET Test</label>
         <Button></Button>
       </div>
        
      </>
    );
  }


  