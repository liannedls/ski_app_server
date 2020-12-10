import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import ExerciseElem from './exercise-elem.component.js'

export default class ExerciseList extends Component {

  exerciseList() {
    return this.props.exercises.map(currentexercise => {
      return <ExerciseElem exercise={currentexercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (

      <div>
        <h3>Exercises</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Group</th>
              <th>Skill</th>
              <th>Age</th>
              <th>Reference</th>
              <th>Add to List</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList()}
          </tbody>
        </table>
      </div>    
    )
  }
}