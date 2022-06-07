import React, { useState, useEffect } from "react";
import { UserButton } from "./styles";
import { getStudentById } from "services/api/studentApi";
import { downloadFile } from "services/api/fileApi";
import {Img} from "./styles";

export default function ProfileIcon({ onClick }) {
  const [img, setImg] = useState();
  const [StudentValues, setStudentValues] = useState("");
  useEffect(() => {
    getStudentById(21).then((res) => {
      setStudentValues(res.data);
      downloadFile(res.data.photoId).then((file) => {
        setImg(file.data);
      });
    
    });
  }, []);

  return <UserButton onClick={onClick} ><Img src={`data:image/jpeg;base64, ${img}`}></Img></UserButton>;
}
