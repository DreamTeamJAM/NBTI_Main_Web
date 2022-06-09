import { createContext, useState } from "react";
import AuthService from "services/auth/auth.service";
import { getStudentByUserId } from "services/api/studentApi";
import { downloadFile } from "services/api/fileApi";
import React from "react";

const ProviderContxt = ({ children }) => {
  const [student, setStudent] = useState("");
  const [loading,setLoading]=useState(false);

  async function getStudent() {
      setLoading(true)
    const currentUser = await AuthService.getCurrentUser();

    const studentDto = await getStudentByUserId(currentUser.id);
    // setStudentValues(res.data);

    let student = { ...studentDto.data };
    if (studentDto.data.photoId != null) {
      let ph = await downloadFile(studentDto.data.photoId);
      student.photo = ph.data;
    }

    if (studentDto.data.dniFrontId != null) {
      let ph = await downloadFile(studentDto.data.dniFrontId);
      student.dniFront = ph.data;
    }

    if (studentDto.data.dniBackId != null) {
      let ph = await downloadFile(studentDto.data.dniBackId);
      student.dniBack = ph.data;
    }

    delete student.photoId;
    delete student.dniFrontId;
    delete student.dniBackId;

    console.log("eeeeee", student);
    setStudent(student);
    setLoading(false)
  }
  React.useEffect(() => {
    getStudent();
  }, []);

  return (
    <StudentContext.Provider value={{loading,data:student}}>
      {children}
    </StudentContext.Provider>
  );
};
export default ProviderContxt;
export const StudentContext = createContext();
