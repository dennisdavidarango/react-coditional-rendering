import React from 'react';
import StudentTable from '../student-table/student-table.comp';




import './filterable-student-table.style.css';

const FilterableStudentTable = () => {
    return(
        <div className="filterable-student-table-container">
           <StudentTable />
            
        </div>
    )
}

export default FilterableStudentTable;