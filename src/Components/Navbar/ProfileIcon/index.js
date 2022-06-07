import React, { useState, useEffect } from "react";
import { UserButton } from "./styles";
import { getStudentByUserId } from "services/api/studentApi";
import { downloadFile } from "services/api/fileApi";
import AuthService from "services/auth/auth.service";

import {Img} from "./styles";

export default function ProfileIcon({ onClick }) {
  const [img, setImg] = useState();
  
  useEffect(() => {
    AuthService.getCurrentUser().then((user) => {
      getStudentByUserId(user.id).then((res) => {
        downloadFile(res.data.photoId).then((file) => {
          setImg(file.data);
        });
    });
   });
  }, []);

  return <UserButton onClick={onClick} ><Img src={`data:image/jpeg;base64, ${img}`}></Img></UserButton>;
}
