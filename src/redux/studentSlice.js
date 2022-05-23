import {
    createSlice
} from '@reduxjs/toolkit'

export const studentSlice = createSlice({
    name: 'student',
    initialState: {
        "id": 5,
        "created": "",
        "lastUpdated": "",
        // "photo": null,
        "name": "",
        "dni": "",
        "city": "",
        "project": "",
        "firstSurname": "",
        "secondSurname": "",
        "nationality": "",
        "phone": "",
        "birthDate": "",
        "gender": "",
        "email": "",
        // "dniFront": null,
        // "dniBack": null,
        "address": "",
        "aboutMe": "",
        "workExperience": [],
        "education": [],
        "motherTongues": "",
        "otherLanguages": [],
        "digitalSkills": "",
        "comunicationSkills": "",
        "drivingLicense": "",
        "hobbies": "",
        "volunteering": []

    },
    reducers: {

        updateStudent: (state, action) => {
            return {
                ...state,
                ...action.payload
            }

        }

    },
})

export const {
    updateStudent
} = studentSlice.actions
export const selectStudent = (state) => state.student
export default studentSlice.reducer