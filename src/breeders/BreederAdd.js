import React, { Component } from "react";
import { StyledSingleTitle } from "../sharedcomponents/StyledHeader";
import StyledContent from "../sharedcomponents/StyledContent";
import {
  Button,
  Form,
  Segment,
  Dropdown,
  Placeholder,
  Input
} from "semantic-ui-react";
import "./Breeders.css";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCv_ja9EAiV4rI2O8E1v4-XREFMrCPqN2I",
  authDomain: "test-8413e.firebaseapp.com",
  databaseURL: "https://test-8413e.firebaseio.com",
  projectId: "test-8413e",
  storageBucket: "test-8413e.appspot.com",
  messagingSenderId: "1097546633851",
  appId: "1:1097546633851:web:5eac033873399f84"
};

firebase.initializeApp(firebaseConfig);

const formValid = ({ contactInfo, ...rest }) => {
  let valid = true;

  Object.values(contactInfo).forEach(val => {
    val === "" && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === "" && (valid = false);
  });

  return valid;
};

class BreaderAdd extends Component {
  state = {
    breeds: [],
    name: "",
    description: "",
    contactInfo: {
      city: "",
      email: "",
      phoneNo: "",
      postalCode: "",
      street: "",
      website: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      firebase
        .database()
        .ref("breeders/")
        .push(this.state);
      alert("dodano hodowce");
      this.setState({
        breeds: [],
        name: "",
        description: "",
        contactInfo: {
          city: "",
          email: "",
          phoneNo: "",
          postalCode: "",
          street: "",
          website: ""
        }
      });
    } else {
      alert("wypelnij wszystkie pola");
    }
  };

  handleChangeNested = obj => e => {
    let x = this.state[obj];
    x[e.target.name] = e.target.value;
    this.setState({ [obj]: x });
  };

  handleChangeBasicData = e => {
    this.setState({
      [e.currentTarget.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <StyledContent>
          <StyledSingleTitle>
            <h1>Formularz dodania hodowcy</h1>
          </StyledSingleTitle>
          <Segment>
            <Form
              size="large"
              className="breeders-form"
              onSubmit={this.handleSubmit}
            >
              <Form.Group className="breeders-form__top--fields">
                <Form.Field
                  label="Nazwa hodowcy:"
                  control="input"
                  width={6}
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChangeBasicData}
                />
                <Form.Field width={7}>
                  <label>Rasy kotów w ofercie:</label>
                  <Dropdown
                    labeled
                    placeholder="State"
                    multiple
                    search
                    selection
                    // options={stateOptions}
                  />
                </Form.Field>
              </Form.Group>

              <div className="breeders-form__main">
                <div className="breeders-form__main__image">
                  <Form.Field>
                    <label>Zdjęcie(opcjonalnie):</label>
                    <Placeholder style={{ height: 250, width: 250 }}>
                      <Placeholder.Image />
                    </Placeholder>
                  </Form.Field>
                  <div className="breeders-form__main__btn--upload--wrapper">
                    <Button className="breeders-form__main__btn--upload">
                      Przeglądaj
                    </Button>
                    <Input type="file" name="picture" />
                  </div>
                </div>
                <div>
                  <Form.Group
                    grouped
                    className="breeders-form__main--adress-details"
                  >
                    <label>Adres hodowcy:</label>
                    <Form.Field
                      label="Ulica:"
                      control="input"
                      type="input"
                      name="street"
                      value={this.state.contactInfo.street}
                      onChange={this.handleChangeNested("contactInfo")}
                    />
                    <Form.Field
                      label="Kod pocztowy:"
                      control="input"
                      type="input"
                      name="postalCode"
                      value={this.state.contactInfo.postalCode}
                      onChange={this.handleChangeNested("contactInfo")}
                    />
                    <Form.Field
                      label="Miasto:"
                      control="input"
                      type="input"
                      name="city"
                      value={this.state.contactInfo.city}
                      onChange={this.handleChangeNested("contactInfo")}
                    />
                  </Form.Group>
                  <Form.Group
                    grouped
                    className="breeders-form__main--contact-details"
                  >
                    <label>Dane kontaktowe:</label>
                    <Form.Field
                      label="Email:"
                      control="input"
                      type="email"
                      name="email"
                      value={this.state.contactInfo.email}
                      onChange={this.handleChangeNested("contactInfo")}
                      style={{padding: 0, borderRadius: 0}}
                    />
                    <Form.Field
                      label="Nr telefonu:"
                      control="input"
                      type="input"
                      name="phoneNo"
                      value={this.state.contactInfo.phoneNo}
                      onChange={this.handleChangeNested("contactInfo")}
                    />
                    <Form.Field
                      label="Strona www:"
                      control="input"
                      type="input"
                      name="website"
                      value={this.state.contactInfo.website}
                      onChange={this.handleChangeNested("contactInfo")}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="breeders-form__bot">
                <Form.TextArea
                  label="Opis:"
                  placeholder="Wpisz tutaj krotki opis hodowcy"
                  rows={9}
                  width={9}
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChangeBasicData}
                />
                <div className="breeders-form__bot__img" />
              </div>
              <Button type="submit" className="breeders-form__btn--submit">
                Dodaj
              </Button>
            </Form>
          </Segment>
        </StyledContent>
      </>
    );
  }
}

export default BreaderAdd;
