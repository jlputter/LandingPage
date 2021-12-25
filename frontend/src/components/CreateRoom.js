import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import {Button, Radio, RadioGroup, FormControlLabel, 
    FormControl, FormHelperText, Grid, TextField, Typography} 
    from "@material-ui/core";


export default class CreateRoom extends Component {

    static defaultProps = {
        votesToSkip : 2,
        guestCanPause: true,
        update: false,
        roomCode: null,
        updateCallback: () => {}
    }

    constructor(props){
        super(props);
        this.state = {
            guestCanPause: this.props.guestCanPause,
            votesToSkip: this.props.votesToSkip,
            successMsg: "",
            alertMsg: ""
        };
    }

    handleVotesChange = (e) => {
        this.setState({
            votesToSkip: e.target.value
        });
    }

    handleGuestCanPauseChange = (e) => {
        this.setState({
            guestCanPause: e.target.value === "true" ? true : false
        });
    }

    handleRoomButtonClick = () =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                votes_to_skip: this.state.votesToSkip,
                guest_can_pause: this.state.guestCanPause
            }),
        };
        fetch("/api/create-room", requestOptions)
        .then((response)=>response.json())
        .then((data)=> this.props.history.push("/room/" + data.code));
        }

        handleUpdateButtonClick = () =>{
            const requestOptions = {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    votes_to_skip: this.state.votesToSkip,
                    guest_can_pause: this.state.guestCanPause,
                    code: this.props.roomCode
                }),
            };
            fetch("/api/update-room", requestOptions).then((response) => {
                if (response.ok) {
                    this.setState({
                      successMsg: "Room updated successfully!",
                    });
                  } else {
                    this.setState({
                      errorMsg: "Error updating room...",
                    });
                  }
                  this.props.updateCallback()
                });
               
        }



    renderCreateButtons = () => {
        return(
            <Grid container spacing = {1} align= "center">
                <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained" onClick={this.handleRoomButtonClick}>
                        Create a Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        );
    }

    renderUpdateButtons = () => {
        return(
            <Grid container spacing = {1} align="center" >
                <Grid item xs={12} >
                    <Button color="primary" variant="contained" onClick={this.handleUpdateButtonClick}>
                        Update
                    </Button>
                </Grid>
            </Grid>
        );
    }

    render() {

        const title = this.props.update ? "Update Room" : "Create a Room"
        return (
        <Grid container spacing = {1}>
            <Grid item xs={12} align ="center">
                <Collapse in={this.state.alertMsg != "" || this.state.successMsg != ""}>
                    {this.state.successMsg != "" ? 
                    (<Alert severity="success" >{this.state.successMsg}</Alert>
                    ) : (
                    <Alert severity="error" onClose={ () => {this.setState({alertMsg: ""})}}>{this.state.alertMsg}</Alert>)}
                </Collapse>
            </Grid>



            <Grid item xs={12} align ="center">
                <Typography component='h4' variant= "h4">{title}</Typography>
            </Grid>   
            <Grid item xs={12} align ="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align='center'>
                            Guest Playback State
                        </div>
                    </FormHelperText>
                    <RadioGroup row defaultValue={this.props.guestCanPause.toString()} onChange={this.handleGuestCanPauseChange}>
                        <FormControlLabel 
                            value= "true" 
                            control={<Radio color = "primary" />}
                            label="Play/Pause"
                            labelPlacement= "bottom"
                            />
                        <FormControlLabel 
                            value= "false" 
                            control={<Radio color = "secondary" />}
                            label="No Control"
                            labelPlacement= "bottom"
                            />
                    </RadioGroup>
                </FormControl>
            </Grid>  
                <Grid item xs={12} align= "center">
                    <FormControl>
                        <TextField 
                            required={true} 
                            type= "number"
                            onChange = {this.handleVotesChange}
                            defaultValue={this.state.votesToSkip}
                            inputProps={{
                                min: 1,
                                style: {textAlign:"center"}
                            }}
                            />
                            <FormHelperText>
                                <div align= "center">
                                    Votes to Skip
                                </div>
                            </FormHelperText>
                    </FormControl>    
                </Grid> 
                {this.props.update ? this.renderUpdateButtons() : this.renderCreateButtons()}
        </Grid>
        );
    }
}

