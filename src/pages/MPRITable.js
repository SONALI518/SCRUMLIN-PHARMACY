import React from "react";
import MPRIMyTable from "./MPRIMyTable";
import { columns, data } from "./MPI-data-table";
import styled from "styled-components";

const TableStyles = styled.div`
  padding: 1rem;
  overflow-x:scroll;
  table {
    border-spacing: 0;
    border: 1px solid black;
    background-color:white;
    
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th{
        text-align:center;
        background-color: rgb(54, 119, 145);
        
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
      input {
        border:none;
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
      input:focus{
        outline:none;
      }
    }
  }
`;
function MPRITable() {
  const [tableData, setTableData] = React.useState([]);

  const memoizedColumns = React.useMemo(() => columns, []);
  const memoizedData = React.useMemo(() => tableData, [tableData]);

  React.useEffect(() => {
    setTableData(data);
  }, []);

  const handleNewRowClick = (e) => {
    e.preventDefault();
    setTableData([{}, ...tableData]);
  };

  const updateMyData = (rowIndex, columnId, value) => {
    console.log("the row value", value);
    setTableData(nextTableData =>
      nextTableData.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...nextTableData[rowIndex],
            [columnId+1]: value
          };
        }
        return row;
      })
    );
  };

  
  return (
    <>
      
      <TableStyles>
        <MPRIMyTable
          columns={memoizedColumns}
          data={memoizedData}
          updateMyData={updateMyData}
        />
      </TableStyles><br />
      <div style={{float:'right',padding:'5px 10px'}}>
        <button onClick={handleNewRowClick} >+</button><br/>
      </div>
      
    </>
  );
}

export default MPRITable;