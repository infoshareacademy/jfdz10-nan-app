import React, { Component, Fragment } from "react";
import { Form, Segment, Button, Radio } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import StyledContent from "../sharedcomponents/StyledContent";
import { connect } from "react-redux";
import { setUserPreferences } from '../Redux/reducers/userPreferencesReducer'

import "../accessories/Accessories.css";

class UserCatPreferences extends Component {
  state = {
    userPreferences: {},
  };

  handleCharacterChange = (e, { value }) =>
    this.setState({
      userPreferences: Object.assign({}, this.state.userPreferences, {
        character: value
      })
    });

  handleAcceptationChange = (e, { value }) =>
    this.setState({
      userPreferences: Object.assign({}, this.state.userPreferences, {
        animalsAcceptation: value
      })
    });

  handleHairLostChange = (e, { value }) =>
    this.setState({
      userPreferences: Object.assign({}, this.state.userPreferences, {
        hairLost: value
      })
    });

  handleKidsFriendlinessChange = (e, { value }) =>
    this.setState({
      userPreferences: Object.assign({}, this.state.userPreferences, {
        kidsFriendieness: value
      })
    });

  handleLifeExpectancyChange = (e, { value }) =>
    this.setState({
      userPreferences: Object.assign({}, this.state.userPreferences, {
        lifeExpectancy: value
      })
    });

  handleLoudlinessChange = (e, { value }) =>
    this.setState({
      userPreferences: Object.assign({}, this.state.userPreferences, {
        loudliness: value
      })
    });

  handleNeedOfAttentionChange = (e, { value }) =>
    this.setState({
      userPreferences: Object.assign({}, this.state.userPreferences, {
        needOfAttention: value
      })
    });

  handleSizeChange = (e, { value }) =>
    this.setState({
      userPreferences: Object.assign({}, this.state.userPreferences, {
        size: value
      })
    });



  render() {
    const userPreferences = this.state.userPreferences;
  
    console.log(this.state);
    return (
      <Fragment>
        <StyledContent>
          <h1>Preferencje użytkownika</h1>
          <Segment color="teal">
            <Form>
              <p>Wolisz zwierzęta aktywne, czy spokojne?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Aktywne"
                  value={"active"}
                  checked={userPreferences.character === "active"}
                  onChange={this.handleCharacterChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Spokojne"
                  value={"calm"}
                  checked={userPreferences.character === "calm"}
                  onChange={this.handleCharacterChange}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Segment color="teal">
            <Form>
              <p>Czy w Twoim domu mieszkają także inne zwierzęta np. pies?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Tak"
                  value={true}
                  checked={userPreferences.animalsAcceptation === true}
                  onChange={this.handleAcceptationChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Nie"
                  value={false}
                  checked={userPreferences.animalsAcceptation === false}
                  onChange={this.handleAcceptationChange}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Segment color="teal">
            <Form>
              <p>Czy przeszkadza Ci jeśli zwierzę będzie zostawiało sierść?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Tak"
                  value={true}
                  checked={userPreferences.hairLost === true}
                  onChange={this.handleHairLostChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Nie"
                  value={false}
                  checked={userPreferences.hairLost === false}
                  onChange={this.handleHairLostChange}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Segment color="teal">
            <Form>
              <p>Czy kot będzie miał częsty kontakt z dziećmi?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Tak"
                  value={true}
                  checked={userPreferences.kidsFriendieness === true}
                  onChange={this.handleKidsFriendlinessChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Nie"
                  value={false}
                  checked={userPreferences.kidsFriendieness === false}
                  onChange={this.handleKidsFriendlinessChange}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Segment color="teal">
            <Form>
              <p>
                Koty, to zwierzęta długowieczne. Ile czasu chciałbyś się cieszyć
                nowym pupilem?
              </p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Do 10 lat"
                  value={"short"}
                  checked={userPreferences.lifeExpectancy === "short"}
                  onChange={this.handleLifeExpectancyChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Od 10 do 15 lat"
                  value={"middle"}
                  checked={userPreferences.lifeExpectancy === "middle"}
                  onChange={this.handleLifeExpectancyChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Powyżej 15 lat"
                  value={"long"}
                  checked={userPreferences.lifeExpectancy === "long"}
                  onChange={this.handleLifeExpectancyChange}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Segment color="teal">
            <Form>
              <p>Jakiego typu zwierzęta lubisz?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Raczej głośne"
                  value={true}
                  checked={userPreferences.loudliness === true}
                  onChange={this.handleLoudlinessChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Stosunkowo ciche"
                  value={false}
                  checked={userPreferences.loudliness === false}
                  onChange={this.handleLoudlinessChange}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Segment color="teal">
            <Form>
              <p>Jak wiele czasu jesteś w stanie poświęcić swojemu kotu?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Stosunkowo mało - do dwóch godzin dziennie."
                  value={true}
                  checked={userPreferences.needOfAttention === true}
                  onChange={this.handleNeedOfAttentionChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Relatywnie dużo. Kilka godzin dziennie."
                  value={false}
                  checked={userPreferences.needOfAttention === false}
                  onChange={this.handleNeedOfAttentionChange}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Segment color="teal">
            <Form>
              <p>Koty różnią się wielkością. Jak dużego kota chciałbyś mieć?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Raczej małego."
                  value={"small"}
                  checked={userPreferences.size === "small"}
                  onChange={this.handleSizeChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Średniej wielkości."
                  value={"middle"}
                  checked={userPreferences.size === "middle"}
                  onChange={this.handleSizeChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Marzę o dużym kocie."
                  value={"big"}
                  checked={userPreferences.size === "big"}
                  onChange={this.handleSizeChange}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Link to={"/logged/profile/cat-match"}>
          <Button className="blue__button"
            
            onClick={() => this.props.setUserPreferences(userPreferences)}
          >
            Poznaj wynik
          </Button>
          </Link>
        </StyledContent>
      </Fragment>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setUserPreferences
};



export default connect(mapStateToProps, mapDispatchToProps)(UserCatPreferences);
