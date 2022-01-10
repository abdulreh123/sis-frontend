import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { useDispatch,useSelector } from "react-redux";
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CLabel,
    CSelect,
} from '@coreui/react'
import {
    AddGroup,
} from "../../actions/groupActions";
import {
    fetchCourses,
} from "../../actions/coursesActions";
import {
    fetchAdvisor,
} from "../../actions/advisorActions";
import {
    fetchRooms,
} from "../../actions/roomActions";
const Create = () => {
    const [data, setData] = useState({});
    const [department, setDepartment] = useState(0);
    const dispatch = useDispatch();
    const course = useSelector((state) => state.courses.courses);
    const advisor = useSelector((state) => state.advisor.advisors);
    const room = useSelector((state) => state.rooms.rooms);
   
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if(name==='departmentId'){
            setDepartment(value)
        }
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddGroup({ ...data }));
      //  document.getElementById("resetCourse").reset()
    }
    const reset = (e) => {
        document.getElementById("resetCourse").reset()
    }
    useEffect(() => {
        dispatch(fetchCourses());
        dispatch(fetchRooms());
        dispatch(fetchAdvisor());
    }, [dispatch]);
    return (
        <CCol xs="12" md="15">
            <CCard>
                <CCardHeader>
                    Create new Group
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" id="resetCourse">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="number-input">Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="number-input" type="text" name="name" onChange={handleChange} />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">lecturer
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="lecturerId" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    {advisor?.map(dep=>
                                    <option value={dep.id}>{dep.name + " " + dep.surname}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                         <CFormGroup row>
                            <CCol md="3">Course
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="courseId" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    {course?.map(dep=>
                                    <option value={dep.id}>{dep.name}</option>
                                        )}
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                         <CFormGroup row>
                            <CCol md="3">Academic Year
                            </CCol>
                            <CCol xs="12" md="9">
                                <CSelect custom name="year" id="select" onChange={handleChange}>
                                    <option value="0">Please select</option>
                                    <option value="2019-2020 - Fall">2019-2020 - Fall</option>
                                    <option value="2019-2020 - Spring">2019-2020 - Spring</option>
                                    <option value="2019-2020 - Summer">2019-2020 - Summer</option>
                                    <option value="2020-2021 - Fall">2020-2021 - Fall</option>
                                    <option value="2020-2021 - Spring">2020-2021 - Spring</option>
                                    <option value="2020-2021 - Summer">2020-2021 - Summer</option>
                                    <option value="2021-2022 - Fall">2021-2022 - Fall</option>
                                    <option value="2021-2022 - Spring">2021-2022 - Spring</option>
                                    <option value="2022-2023 - Fall">2022-2023 - Fall</option>
                                </CSelect>
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" onClick={handleSubmit} /> Submit</CButton>
                    <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" onClick={reset} /> Reset</CButton>
                </CCardFooter>
            </CCard>
        </CCol>
    )
}

export default Create

