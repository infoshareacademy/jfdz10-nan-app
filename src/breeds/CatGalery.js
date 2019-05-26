import React, { Fragment, Component } from 'react'
import {
  Card
} from "semantic-ui-react";
import "./Cats.css";
import StyledCardImage from '../sharedcomponents/StyledCardImage'
import AddIcon from '@material-ui/icons/Add'
import ImageIcon from '@material-ui/icons/Image'
import Fab from '@material-ui/core/Fab'
import firebase from 'firebase'

class CatGalery extends Component {
    state = {
        catUrl: '',
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
          firebase.storage().ref('/cats/' + this.state.user.uid).delete()
              .then(() => {
                  alert('usunieto pomyslnie');
                  this.getCatsUrl();
              })
              .catch(error => console.error(error));
      }
    };
    
    handleAdd = () => {
      if (this.state.user) {
          firebase.storage().ref('/cats/' + this.state.user.uid).put(this.state.file)
              .then(() => {
                  alert('dodano pomyslnie');
                  this.getCatsUrl();
                  this.setState({
                      file: null
                  })
              })
              .catch(error => console.error(error));
      }
    };
    
    getCatsUrl = () => {
      if (this.state.user) {
          const uid = this.state.user.uid;
          firebase.storage().ref('/avatars/' + uid).getDownloadURL()
              .then(url => {
                  this.setState({
                      catUrl: url,
                  })
              })
              .catch(error => console.error(error));
      }
    };
    
    componentDidMount() {
      const ref = firebase.auth().onAuthStateChanged(user => {
          this.setState({
              user: user
          }, () => this.getCatsUrl())
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
    <Fragment>
            <label htmlFor="raised-button-file">
            <Fab  style={{marginRight: '20px'}} size="small" color="default" component="span" onChange={this.handleOnInputFileChange}>
                    <ImageIcon />
            </Fab>
            </label>
            <Fab style={{marginRight: '20px'}} size="small" color="grey" component="span" onClick={this.handleAdd}>
                <AddIcon />
            </Fab>      
        <Card.Group style={{marginTop: '20px'}} itemsPerRow={4}> 

          <Card>
              <StyledCardImage style={{height: "200px"}}/>
              <Card.Content className="cat_content">
                <button class="ui button">
                        Usuń
                </button>    
              </Card.Content>                           
          </Card>

          <Card>
              <StyledCardImage style={{height: "200px"}}/>
              <Card.Content className="cat_content">
                    <button class="ui button">
                            Usuń
                    </button>     
              </Card.Content>                           
          </Card>

          <Card>
              <StyledCardImage style={{height: "200px"}}/>
              <Card.Content className="cat_content">
                <button class="ui button">
                        Usuń
                </button>   
              </Card.Content>                           
          </Card>

          <Card >
              <StyledCardImage style={{height: "200px"}}/>
              <Card.Content className="cat_content">
                <button class="ui button">
                    Usuń
                </button>  
              </Card.Content>                           
          </Card>

        </Card.Group>
</Fragment>
  );
}
}


export default CatGalery