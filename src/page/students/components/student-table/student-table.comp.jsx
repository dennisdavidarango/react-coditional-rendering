import React from 'react';
import Course from '../course/course.comp';
import CourseGradeGender from '../student-grade-gender/course-grade-gender.comp';




import './student-table.style.css';

const StudentTable = () => {
    return(
        <div className="student-table-container">
           <div className="search-input">
              <input type="text" placeholder="search..."/> 
           </div>
           <Course courseName="Matematicas Especiales"/>
            <table>
                <thead> 
                    <tr>
                        <th className="name-row">Student</th>
                        <th className="name-row">Grade</th>
                        <th className="name-row">Gender</th>
                    </tr>
                </thead>        
           
            </table>
           <CourseGradeGender  course={{
               student:"Dennis David Arango",
               grade: 4.5,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Daniela Hernandez",
               grade: 3.5,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Manuela Osorio",
               grade: 1.5,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Raul Cortez",
               grade: 3.0,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Carlos Marín",
               grade: 5.0,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Esteban Marin ",
               grade: 2.3,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Karen Rios",
               grade:2.8 ,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Valentina Arango",
               grade: 5.0,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Camila Giraldo",
               grade: 1.0,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Cristian Montes",
               grade: 3.0,
               gender:"Man",

           }} />
           <Course courseName="Ondas Electromacneticas"/>
           <table>
                <thead> 
                    <tr>
                        <th className="name-row">Student</th>
                        <th className="name-row">Grade</th>
                        <th className="name-row">Gender</th>
                    </tr>
                </thead>        
           
            </table>
           <CourseGradeGender  course={{
               student:"Pablo Ramirez",
               grade: 5.0,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Maria Camila Solarte",
               grade:2.0,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Sarita Marin",
               grade:2.1,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Dahiana Medina",
               grade: 3.2,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Sebastian García",
               grade: 4.5,
               gender:"Man",

           }} />
           <Course courseName="Programación 4"/>
           <table>
                <thead> 
                    <tr>
                        <th className="name-row">Student</th>
                        <th className="name-row">Grade</th>
                        <th className="name-row">Gender</th>
                    </tr>
                </thead>        
           
            </table>
           <CourseGradeGender  course={{
               student:"Jose Alvarez",
               grade: 4.5,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Sebastian Serna",
               grade: 3.2,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Carlos Mario ",
               grade: 4.9,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Simon Perez",
               grade: 1.5,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Andres Lares",
               grade: 2.2,
               gender:"Man",
           }} />
        </div>
    )
}

export default StudentTable;