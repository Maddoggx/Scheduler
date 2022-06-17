import React from "react";
import "./styles.scss";
import Show from "./Show";
import Empty from "./Empty";
import Header from "./Header";


export default function Appointment(props) {
  console.log(props);
  const interview = props.interview;
  // console.log(props.interview);


  return (
    <article className="appointment">
      <div>
        <Header time={props.time} />
        <div>
          {interview ?
            <Show
              student={interview.student}
              interviewer={interview.interviewer.name}
            />
            :
            <Empty />
          }
        </div>
      </div>

    </article>
  )
}