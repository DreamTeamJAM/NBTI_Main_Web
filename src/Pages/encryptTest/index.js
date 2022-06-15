/** test base64 */
import { useState } from "react";
import axios from "axios";
import { getAllUsers } from "services/api/userApi";
import { getAllStudents } from "services/api/studentApi";
import { uploadFile, downloadFile } from "services/api/fileApi";
import { Container } from "GlobalStyles";

export default function Encrypt() {
  const [student, setStudent] = useState({});
  function handleHook(e) {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      cosa: {
        [name]: value,
      },
    }));
  }
  const [img, setImg] = useState();
  const onFileChangeHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", e.target.files[0]);

    uploadFile(formData);
    // fetch('http://localhost:8080/api/upload', {
    //     method: 'post',
    //     body: formData
    // }).then(res => {
    //     if(res.ok) {
    //         console.log(res.data);
    //
    //     }
    // });
  };

  const handleDownload = async () => {
    const response = await downloadFile(64);

    setImg(response.data);

    //  document.querySelector("#image").src = imageUrl;
  };

  return (
    <Container>
      <div>
        <label>Upload Your File </label>
        <input
          type="file"
          className="form-control"
          name="file"
          onChange={(e) => onFileChangeHandler(e)}
        />
      </div>
      <div>
        <label>GET Test</label>
        <button onClick={() => getAllStudents()}>get Students</button>
      </div>
      <div>
        <label>GET Test</label>
        <button onClick={handleDownload}>get File</button>
        <img
          id="image"
          alt="retrieved"
          src={`data:image/jpeg;base64, ${img}`}
        />
      </div>
      <input name="cosa1" onChange={handleHook} />
    </Container>
  );
}
