import React, { useContext, useEffect, useState } from "react";
import { UserButton } from "./styles";
import { StudentContext } from "context/ProviderContxt";
import image from "./img/profile.jpeg";
import { Img } from "./styles";

export default function ProfileIcon({ onClick }) {
  const student = useContext(StudentContext);
  const [img, setImg] = useState();
  
  useEffect(() => {
    if (student.data !== undefined) setImg(student.data.photo);
    console.log("st", student);
  }, [student]);

  return (
    <UserButton onClick={onClick}>
      <Img src={student.loading ?
     image
    :
    `data:image/png;base64, ${img}`}></Img>
    </UserButton>
    
  );
}
