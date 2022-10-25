import React from 'react';
import './App.css';
import Customer from './components/Customer';
import {Table, TableBody, TableHead, TableRow, TableCell} from'@mui/material';



class App extends React.Component {
  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }



  render() {
    return(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>            
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map((index)=>{return(<Customer name={index.name} id={index.id} birthday={index.birthday} image={index.image} gender={index.gender} job={index.job}/>);})
            : ""}
          </TableBody>
        </Table>
    );
  }
}


export default App;