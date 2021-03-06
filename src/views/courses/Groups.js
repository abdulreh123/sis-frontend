import React,{useEffect} from 'react'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGroup
} from "../../actions/groupActions";
const AllGroupss = () => {
    const Groups = useSelector((state) => state.group.groups);
    const Group = useSelector((state) => state.group.group);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGroup());
    }, [dispatch,Group]);
    let columns = [
        {
          selector: "name",
          name: "Name",
          sortable: true
        },
        {
          selector: "name",
          name: "Course",
          sortable: true,
          cell: (row) => (<p>{row.Course.name}</p>)
        },
        {
          selector: "code",
          name: "Code",
          sortable: true,
          cell: (row) => (<p>{row.Course.code}</p>)
        },
        {
          name: "Actions",
          cell: (row) => (
            <div className="table-icon">
              <span
              style={{margin: '1rem'}}
                // onClick={() => {
                //   toggleEditModal(!editModal);
                //   getDepartmentData(row.id);
                // }}
              >
                  Edit
              </span>
              <span >
                  Delete
              </span>
            </div>
          ),
          ignoreRowClick: true,
          allowOverflow: true,
        },
      ];
  return (
      <>
    
    <DataTable
            columns={columns}
            data={Groups ? Groups : []}
            striped={true}
            responsive={true}
            pagination={true}
            highlightOnHover={true}
            subHeaderAlign="center"
            noHeader={true}
          />
    </>
  )
}

export default AllGroupss
