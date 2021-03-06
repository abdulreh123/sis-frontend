import { combineReducers } from 'redux';
import studentReducer from './studentReducer'
import departmentReducer from './departmentReducer'
import authReducer from './authReducer'
import courseReducer from './courseReducer'
import errorReducer from './errorReducer'
import groupReducer from './groupReducer'
import buildingReducer from './BuildingReducer'
import advisorReducer from './advisorReducer'
import roomReducer from './RoomReducer'
import paymentReducer from './paymentReducer'
import sidebarReducer from './sidebarReducer'
import announcementReducer from './announcementReducer'
import chairmanReducer from './chairmanReducer'
import notificationReducer from './notificationReducer'
import facultyReducer from './facultyReducer'
export default combineReducers({
    auth:authReducer,
    student: studentReducer,
    chairmans: chairmanReducer,
    advisor:advisorReducer,
    department: departmentReducer,
    courses:courseReducer,
    group:groupReducer,
    errors:errorReducer,
    building:buildingReducer,
    rooms:roomReducer,
    payments:paymentReducer,
    sidebar:sidebarReducer,
    announcements:announcementReducer,
    notifications:notificationReducer,
    faculty:facultyReducer
});