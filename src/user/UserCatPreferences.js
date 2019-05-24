import React, { Component, Fragment } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import firebase from "firebase";

import StyledContent from "../sharedcomponents/StyledContent";

class UserCatPreferences extends Component {
  state = {
    userPreferences: {},
    characteristics: []
  };

  componentDidMount() {
    const accessoriesRef = firebase.database().ref("breeds");

    accessoriesRef.once("value").then(snapshot => {
      const data = snapshot.val() || [];
      const characteristics = data.map(breed => {
        return { ...breed.characteristics, id: breed.id };
      });
      this.setState({
        breeds: data,
        characteristics: characteristics
      });
    });

    accessoriesRef.on("value", snapshot => {
      const data = snapshot.val() || [];
      const characteristics = data.map(breed => {
        return { ...breed.characteristics, id: breed.id };
      });
      this.setState({
        breeds: data,
        characteristics: characteristics
      });
    });
  }

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
        needOfAttentionChange: value
      })
    });

  handleSizeChange = (e, { value }) =>
    this.setState({
      userPreferences: Object.assign({}, this.state.userPreferences, {
        size: value
      })
    });
  
  getItemsByUserPreferences = (products, userPreferences) => {
    this.setState({
      characteristics: products.map(product => {
        const rating = Object.keys(product).reduce((acc, productKey) => {
          return product[productKey] === userPreferences[productKey]
            ? acc + 1
            : acc
        }, 0);
        return {...product, rating}      
      })
    })  
    
      
    }
  

  render() {
    const { value } = this.state;
    const products = this.state.characteristics;
    const userPreferences = this.state.userPreferences

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
                  label="Aktywne"
                  value="active"
                  name="character"
                  checked={value}
                  onChange={this.handleCharacterChange}
                />
                <Form.Radio
                  label="Spokojne"
                  name="character"
                  value="calm"
                  checked={value}
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
                  label="Tak"
                  value={true}
                  name="animalsAcceptation"
                  checked={value}
                  onChange={this.handleAcceptationChange}
                />
                <Form.Radio
                  label="Nie"
                  value={false}
                  checked={value}
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
                  label="Tak"
                  value={true}
                  checked={value}
                  onChange={this.handleHairLostChange}
                />
                <Form.Radio
                  label="Nie"
                  value={false}
                  checked={value}
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
                  label="Tak"
                  value={true}
                  checked={value}
                  onChange={this.handleKidsFriendlinessChange}
                />
                <Form.Radio
                  label="Nie"
                  value={false}
                  checked={value}
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
                  label="Do 10 lat"
                  value="short"
                  checked={value}
                  onChange={this.handleLifeExpectancyChange}
                />
                <Form.Radio
                  label="Od 10 do 15 lat"
                  value="middle"
                  checked={value}
                  onChange={this.handleLifeExpectancyChange}
                />
                <Form.Radio
                  label="Powyżej 15 lat"
                  value="long"
                  checked={value}
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
                  label="Raczej głośne"
                  value={true}
                  checked={value}
                  onChange={this.handleLoudlinessChange}
                />
                <Form.Radio
                  label="Stosunkowo ciche"
                  value={false}
                  checked={value}
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
                  label="Stosunkowo mało - do dwóch godzin dziennie."
                  value={true}
                  checked={value}
                  onChange={this.handleNeedOfAttentionChange}
                />
                <Form.Radio
                  label="Relatywnie dużo. Kilka godzin dziennie."
                  value={false}
                  checked={value}
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
                  label="Raczej małego."
                  value="small"
                  checked={value}
                  onChange={this.handleSizeChange}
                />
                <Form.Radio
                  label="Średniej wielkości."
                  value="middle"
                  checked={value}
                  onChange={this.handleSizeChange}
                />
                <Form.Radio
                  label="Marzę o dużym kocie."
                  value="big"
                  checked={value}
                  onChange={this.handleSizeChange}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Button onClick={() => this.getItemsByUserPreferences(products, userPreferences)}>Poznaj wynik</Button>
        </StyledContent>
      </Fragment>
    );
  }
}

export default UserCatPreferences;
