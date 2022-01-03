import React, { lazy,useEffect } from 'react'
import Timetable from 'react-timetable-events'
import Annoucements from './Annoucements'
import { useSelector, useDispatch } from "react-redux";
import {
    getTimeTable
} from "../../actions/advisorActions";
const WidgetsDropdown = lazy(() => import('../widgets/AdvisorDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const timeTable = useSelector((state) => state.advisor.timeTable);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()
  useEffect(() => {
    if(user)
      dispatch(getTimeTable(user.Id));
  }, [dispatch,user]);
  const monday =timeTable[0]?.monday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  const tuesday =timeTable[1]?.tuesday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  const wednesday =timeTable[2]?.wednesday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  const thursday =timeTable[3]?.thursday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  const friday =timeTable[4]?.friday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  const saturday =timeTable[5]?.saturday[0]?.map(day=>{
    const data={
      id: 1,
      name: day[0]?.name,
      type: "custom",
      startTime: new Date(day[0]?.startTime),
      endTime: new Date(day[0]?.endTime),
    }
    return data
  })
  return (
    <>
    <h3>
    My Courses</h3>
      <WidgetsDropdown />
      <Annoucements />

      <h3 style={{marginTop: '1rem'}}>Your Time Table</h3>
      <div style={{marginTop: '1rem'}}>
            <Timetable
                hoursInterval= {{ from: 9, to: 20 }}
                getDayLabel={((day) => day.slice(0,3))}
                  events={{
                    monday:monday ,
                    tuesday: tuesday,
                    wednesday: wednesday,
                    thursday: thursday,
                    friday: friday,
                    saturday: saturday,
                  }}
                  />
                  </div>
    </>
  )
}

export default Dashboard
