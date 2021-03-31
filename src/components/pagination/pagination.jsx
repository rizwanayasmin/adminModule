import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather';
import './pagination.css'
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import Card from '@material-ui/core/Card';


const PaginationIconsAndText = () => {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
    <div className='parent_pagination_header'>

     <div>
         

   
       <Pagination>
      <PaginationItem>
      
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' first>
          <ChevronLeft size={15} /> Prev
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>2</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href='#'>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' last>
          Next
          <ChevronRight size={15} />
        </PaginationLink>
      </PaginationItem>
    </Pagination>

      </div> 
    
    </div>
  )
}
export default PaginationIconsAndText