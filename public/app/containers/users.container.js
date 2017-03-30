/**
 * Created by mlingolu on 3/29/17.
 */


import React from 'react';
import {Card,CardTitle} from 'material-ui/Card'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import axios from 'axios';


class UsersContainer extends React.Component{

    constructor(){
        super();

        this.state ={
            users :[]
        }
    }

    componentWillMount(){
        axios.get('/api/users').then(response=>{
            console.log(response);
            if(response.data.success){
                let users = response.data.data;
                this.setState({users});

            }
        })
    }

    render(){

        return(
            <div>
                <Card className="container">
                    <CardTitle title="Users Screen" subtitle="Displays all the users in DB"></CardTitle>
                </Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.state.users.map((user,index)=>{
                            return (
                                <TableRow key={index}>
                                    <TableRowColumn>{index}</TableRowColumn>
                                    <TableRowColumn>{user.name}</TableRowColumn>
                                    <TableRowColumn>{user.email}</TableRowColumn>
                                </TableRow>
                            )
                        })}


                    </TableBody>
                </Table>

            </div>
        )
    }
}

export default UsersContainer