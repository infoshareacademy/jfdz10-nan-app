import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab'
// import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import ImageIcon from '@material-ui/icons/Image'
import firebase from 'firebase'

const styles = (theme) => ({
    icon: {
      margin: theme.spacing(2)
    }});
 
class Avatar extends Component {
     
    state = {
        avatarUrl: '',
        user: null,
        file: null
    };

    handleOnInputFileChange = (event) => {
      this.setState({
          file: event.target.files[0]
      })
    };
    
    handleRemove = () => {
      if (this.state.user) {
          firebase.storage().ref('/avatars/' + this.state.user.uid).delete()
              .then(() => {
                  alert('usunieto pomyslnie');
                  this.getAvatarUrl();
              })
              .catch(error => console.error(error));
      }
    };
    
    handleAdd = () => {
      if (this.state.user) {
          firebase.storage().ref('/avatars/' + this.state.user.uid).put(this.state.file)
              .then(() => {
                  alert('dodano pomyslnie');
                  this.getAvatarUrl();
                  this.setState({
                      file: null
                  })
              })
              .catch(error => console.error(error));
      }
    };
    
    getAvatarUrl = () => {
      if (this.state.user) {
          const uid = this.state.user.uid;
          firebase.storage().ref('/avatars/' + uid).getDownloadURL()
              .then(url => {
                  this.setState({
                      avatarUrl: url,
                  })
              })
              .catch(error => console.error(error));
      }
    };
    
    componentDidMount() {
      const ref = firebase.auth().onAuthStateChanged(user => {
          this.setState({
              user: user
          }, () => this.getAvatarUrl())
      });
    
      this.setState({
          ref
      })
    }
    
    componentWillUnmount() {
      this.state.ref && this.state.ref();
    }
    
      render() {
   
        return (
    <div>
      <h3 style={{ marginTop: "20px" }}>{this.props.name}</h3>
        <label htmlFor="raised-button-file">
            <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={this.handleOnInputFileChange}
                />
            <Fab  style={{marginRight: '20px'}} size="small" color="default" component="span">
                <ImageIcon />
            </Fab>
        </label>
        {this.state.file && `${this.state.file.name}`}
            <Fab style={{marginRight: '20px'}} size="small" color="primary" component="span" onClick={this.handleAdd}>
                <AddIcon />
            </Fab>
            <Fab style={{marginRight: '20px'}} size="small" color="secondary" component="span" onClick={this.handleRemove}>
                <RemoveIcon />
            </Fab>
    </div>
  )
}
}

export default withStyles(styles)(Avatar);
