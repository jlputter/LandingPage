import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import RoomJoin from "./RoomJoin";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography} from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";



export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            roomCode: null
        }
    }

    //Async not always needed for lifecycles - async does not halt the rest of the program 
    async componentDidMount() {
        fetch('/api/user-in-room')
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                roomCode: data.code
            });
        });
    }

    

    renderHomePage = () => {
        return(
            <Grid contianer spacing={3} align="center">
                <Grid item xs={12}>
                    <Typography variant="h3" compact="h3">
                        Listening Party
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ButtonGroup variant="contained" color="primary">
                        <Button color="primary" to='/join' component={Link}>
                            Join Party
                        </Button>
                        <Button color="secondary" to='/create' component={Link}>
                            Create party
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>

        );
    }

    clearRoomCode = () => this.setState({ roomCode: null});

    render() {
        return (
            <Router>
                <Switch>
                    //if we have a room code alrteady, redirect - if not, load as normal
                    <Route exact path = '/' render= {() => {
                        return this.state.roomCode ?
                         (<Redirect to = {`/room/${this.state.roomCode}`}/>
                         ) : (
                             this.renderHomePage()
                             );
                            }}
                         />
                    <Route path = '/join' component ={RoomJoin}/>
                    <Route path = '/create' component ={CreateRoom}/>
                    <Route 
                        path = '/room/:roomCode' 
                        render={(props) => {
                            return <Room {...props} leaveRoomCallBack={this.clearRoomCode}/>
                        }}/>
                </Switch>
            </Router>
        )
        
    }
}