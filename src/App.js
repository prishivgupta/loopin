import './App.css';
import { Input } from '@material-ui/core';
import AccordianComponent from './components/AccordianComponent';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors } from './actions/searchActions';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

function App() {

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const authorList = useSelector((state) => state.authorList);

  const authors = authorList.docs;

  const submitHandler = (e) => {

    if (e.key === 'Enter') {

      e.preventDefault();
      setSearch(e.target.value)
      e.target.value = "";
      console.log(search);

      dispatch(getAuthors(search));
      setSearch("");

    }

  }

  return (

    <Container maxWidth="md">

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Typography variant="h3" align="center">BOOK WORLD</Typography>

      <br></br>
      <br></br>

      <Input type="text" fullWidth="true" placeholder="Enter a name to find matching authors and press enter to search" onChange={(e) => setSearch(e.target.value)} onKeyDown={submitHandler}/>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {

        authors ? authors.map((author) => (

          <AccordianComponent key = {author.key} name={author.name} birth={author.birth_date} work={author.top_work} books={author.work_count}/>

        ))

        :

        <></>
      
      }

    </Container>

  );

}

export default App;
