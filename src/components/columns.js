import { format} from 'date-fns';
// import ColumnFilter from './ColumnFilter';
const COLUMNS = [{
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    Cell: ({value})=> <b>{value}</b>,
    disableFilters: true,
    sticky: 'left'
},{
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
    sticky: 'left'
},{
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
    sticky: 'left'
},{
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'date_of_birth',
    Cell: ({value}) => format(new Date(value), 'dd/MM/yyyy'),
    
},{
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country',
    
},{
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
    
},{
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
    
},{
    Header: 'Age',
    Footer: 'Age',
    accessor: 'age',
    
}]

// eslint-disable-next-line
const GROUPED_COLUMNS = [{
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
},{
    Header: 'Name',
    Footer: 'Name',
    columns: [{
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
    },{
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
    }]
},{
    Header: 'Info',
    Footer: 'Info',
    columns: [
        {
            Header: 'Date of Birth',
            Footer: 'Date of Birth',
            accessor: 'date_of_birth'
        },{
            Header: 'Country',
            Footer: 'Country',
            accessor: 'country'
        },{
            Header: 'Phone',
            Footer: 'Phone',
            accessor: 'phone'
        }
    ]
}]

export default COLUMNS;
// export default GROUPED_COLUMNS;