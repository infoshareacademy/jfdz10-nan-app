import React, { Component, Fragment } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import firebase from 'firebase'

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
        return {...breed.characteristics, id: breed.id};
      });
      this.setState({
        breeds: data,
        characteristics: characteristics
      });
    });

    accessoriesRef.on("value", snapshot => {
      const data = snapshot.val() || [];
      const characteristics = data.map(breed => {
        return {...breed.characteristics, id: breed.id};
      });
      this.setState({
        breeds: data,
        characteristics: characteristics
      });
    });
  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const {value} = this.state
    console.log(this.state)
    return (
      <Fragment>
        <StyledContent>
        <h1>Preferencje użytkownika</h1>
      <Segment color='teal'>
        <Form>
          <p>Wolisz zwierzęta aktywne, czy spokojne?</p>
          <Form.Group inline>
            <Form.Radio
              label="Aktywne"
              value="active"
              name="character"
              checked={value === "active"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Spokojne"
              name="character"
              value="calm"
              checked={value === "calm"}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        </Segment>
        <Segment color='teal'>
        <Form>
        <p>Czy w Twoim domu mieszkają także inne zwierzęta np. pies?</p>
          <Form.Group inline>
            <Form.Radio
              label="Tak"
              value="true"
              name="animals-acceptation"
              checked={value === "true"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Nie"
              value="false"
              checked={value === "false"}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        </Segment>
        <Segment color='teal'>
        <Form>
        <p>Czy przeszkadza Ci jeśli zwierzę będzie zostawiało sierść?</p>
          <Form.Group inline>
            <Form.Radio
              label="Tak"
              value="true"
              checked={value === "true"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Nie"
              value="false"
              checked={value === "false"}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        </Segment>
        <Segment color='teal'>
        <Form>
        <p>Czy kot będzie miał częsty kontakt z dziećmi?</p>
          <Form.Group inline>
            <Form.Radio
              label="Tak"
              value="true"
              checked={value === "true"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Nie"
              value="false"
              checked={value === "false"}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        </Segment>
        <Segment color='teal'>
        <Form>
        <p>Koty, to zwierzęta długowieczne. Ile czasu chciałbyś się cieszyć nowym pupilem?</p>
          <Form.Group inline>
            <Form.Radio
              label="Do 10 lat"
              value="short"
              checked={value === "short"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Od 10 do 15 lat"
              value="middle"
              checked={value === "middle"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Powyżej 15 lat"
              value="long"
              checked={value === "long"}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        </Segment>
        <Segment color='teal'>
        <Form>
        <p>Jakiego typu zwierzęta lubisz?</p>
          <Form.Group inline>
            <Form.Radio
              label="Raczej głośne"
              value="true"
              checked={value === "true"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Stosunkowo ciche"
              value="false"
              checked={value === "false"}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        </Segment>
        <Segment color='teal'>
        <Form>
        <p>Jak wiele czasu jesteś w stanie poświęcić swojemu kotu?</p>
          <Form.Group inline>
            <Form.Radio
              label="Stosunkowo mało - do dwóch godzin dziennie."
              value="true"
              checked={value === "true"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Relatywnie dużo. Kilka godzin dziennie."
              value="false"
              checked={value === "false"}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        </Segment>
        <Segment color='teal'>
        <Form>
        <p>Koty różnią się wielkością. Jak dużego kota chciałbyś mieć?</p>
          <Form.Group inline>
            <Form.Radio
              label="Raczej małego."
              value="small"
              checked={value === "small"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Średniej wielkości."
              value="middle"
              checked={value === "middle"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Marzę o dużym kocie."
              value="big"
              checked={value === "big"}
              onChange={this.handleChange}
            />
          </Form.Group>
          
        </Form>
        </Segment>
        <Button type="submit">Poznaj wynik</Button>
        </StyledContent>
        
      </Fragment>
    );
  }
}

export default UserCatPreferences;
