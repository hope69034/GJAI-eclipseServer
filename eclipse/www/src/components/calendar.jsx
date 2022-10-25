import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class MyCalendar extends React.Component {
  render() {
    return(
      <div style={{width: "70%", margin:"auto", marginTop:"3%"}}>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[ dayGridPlugin ]}
          initialView={"dayGridMonth"}
          events={[
            { title: '바디워시,치약구매', date: '2022-10-21' },
            { title: '치과 검진 가기', date: '2022-10-20' },
            { title: '프로젝트 회의', date: '2022-10-20' }
          ]}
        />
      </div>
    );
  };
}