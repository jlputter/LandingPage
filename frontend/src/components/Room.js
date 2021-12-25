import React, { Component } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import CreateRoom from './CreateRoom'


export default class Room extends Component {

    constructor(props){
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false,
            showSettings: false
        };
        this.roomCode = this.props.match.params.roomCode;
        this.getRoomDetails();
    }

    updateShowSettings = (value) => this.setState({showSettings: value});

    renderSettingsButton = () => {
        return (
            <Grid item xs={12} align="center">
                <Button variant ="contained" color ="primary" onClick={() => this.updateShowSettings(true)}>
                    Settings
                </Button>
                
            </Grid>

        );
    
    }

    renderSettings = () => {
        return (
        <Grid container spacing ={1} align="center">
            <Grid item xs={12}>
                <CreateRoom 
                update={true} 
                votesToSkip = {this.state.votesToSkip} 
                guestCanPause = {this.state.guestCanPause} 
                roomCode = {this.roomCode} 
                updateCallback = {this.getRoomDetails}>
                </CreateRoom>
            </Grid> 
            <Grid item xs={12}>
                <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => this.updateShowSettings(false)}>
                Close 
                </Button>
            </Grid> 
        </Grid>
        )}

    leaveRoomButton = () => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        }
        
        fetch('/api/leave-room', requestOptions).then((response) =>{ 
            this.props.leaveRoomCallBack;
            this.props.history.push("/");
        });
    }

    getRoomDetails = () => {
        fetch("/api/get-room" + "?code=" + this.roomCode)
            .then((response) =>{ 
                if (!response.ok) {
                    this.props.leaveRoomCallBack();
                    this.props.history.push("/");
                }
                
                return response.json()})
            .then((data) => {
                this.setState({
                    votesToSkip: data.votes_to_skip,
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host
                });
            });
    }

    render() {
        if (this.state.showSettings){
            return this.renderSettings();
        }
        return (

            <Grid container spacing={1} align="center">
                <Grid item xs={12}>
                    <Typography variant="h4" component = "h4">
                        Code : {this.roomCode}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" component = "h6">
                        Votes: {this.state.votesToSkip.toString()}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" component = "h6">
                        Can Pause: {this.state.guestCanPause.toString()}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" component = "h6">
                        Host: {this.state.isHost.toString()}
                    </Typography>
                </Grid>
                {this.state.isHost ? this.renderSettingsButton() : null}
                <Grid item xs={12}>
                    <Button variant="contained" color ="secondary" onClick= {this.leaveRoomButton} >
                        Leave Room
                    </Button>
                </Grid>
            </Grid>


       
        );
    }
}
