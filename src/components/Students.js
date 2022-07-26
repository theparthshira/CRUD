import React, { useState } from "react";

function Students() {
  const [studentTable, setStudentTable] = useState([]);
  const [enrollment, setEnrollment] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("Computer");
  const [fees, setFees] = useState("Yes");
  const [eEnrollment, setEEnrollment] = useState("");
  const [eName, setEName] = useState("");
  const [eDepartment, setEDepartment] = useState("Computer");
  const [eFees, setEFees] = useState("Yes");
  const [editOn, setEditOn] = useState({
    on: false,
    key: "",
  });

  function createStudent() {
    let tmpTable = [...studentTable];

    tmpTable.push({
      enrollment: enrollment,
      name: name,
      department: department,
      fees: fees,
    });

    // console.log(tmpTable);
    setStudentTable((prev) => (prev = tmpTable));
  }

  function deleteStudent(event, key) {
    let toFilter = key.enrollment;
    let tmpTable = [];

    for (let i = 0; i < studentTable.length; i++) {
      if (studentTable[i].enrollment !== toFilter) {
        tmpTable.push(studentTable[i]);
      }
    }

    setStudentTable(tmpTable);
  }

  function editStudent(event, key) {
    setEditOn({
      on: true,
      key: key.enrollment,
    });
  }

  function submitEdit() {
    let toFilter = editOn.key;
    let tmpTable = [];

    console.log(eEnrollment);
    console.log(eName);
    console.log(eDepartment);
    console.log(eFees);

    for (let i = 0; i < studentTable.length; i++) {
      if (studentTable[i].enrollment === toFilter) {
        tmpTable.push({
          enrollment: eEnrollment,
          name: eName,
          department: eDepartment,
          fees: eFees,
        });
      } else {
        tmpTable.push(studentTable[i]);
      }
    }

    setStudentTable(tmpTable);
    setEditOn({
      on: false,
      key: "",
    });
  }

  function cancelEdit() {
    setEditOn({
      on: false,
      key: "",
    });
  }

  return (
    <div className="Students-main">
      <label>
        Enrollment No.:
        <input
          type="text"
          onChange={(event) => {
            setEnrollment(event.target.value);
          }}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <label>
        Department:
        <select
          onChange={(event) => {
            setDepartment(event.target.value);
          }}
        >
          <option>Select</option>
          <option>Computer</option>
          <option>EC</option>
          <option>IT</option>
        </select>
      </label>
      <label>
        Fees Status:
        <select
          onChange={(event) => {
            setFees(event.target.value);
          }}
        >
          <option>Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </label>
      <button onClick={createStudent}>Create</button>

      <table>
        <tr>
          <th>Enrollment No.</th>
          <th>Name</th>
          <th>Department</th>
          <th>Fees Status</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {studentTable.map((key, value) => (
          // console.log(key);

          <tr key={value}>
            <td>{key.enrollment}</td>
            <td>{key.name}</td>
            <td>{key.department}</td>
            <td>{key.fees}</td>
            <td>
              <button key={key} onClick={(event) => deleteStudent(event, key)}>
                Delete
              </button>
            </td>
            <td>
              <button key={key} onClick={(event) => editStudent(event, key)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>
      {editOn.on && (
        <div>
          <label>
            Enrollment No.:
            <input
              type="text"
              onChange={(event) => {
                setEEnrollment(event.target.value);
              }}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              onChange={(event) => {
                setEName(event.target.value);
              }}
            />
          </label>
          <label>
            Department:
            <select
              onChange={(event) => {
                setEDepartment(event.target.value);
              }}
            >
              <option>Select</option>
              <option>Computer</option>
              <option>EC</option>
              <option>IT</option>
            </select>
          </label>
          <label>
            Fees Status:
            <select
              onChange={(event) => {
                setEFees(event.target.value);
              }}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
          <button onClick={submitEdit}>Submit</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Students;
