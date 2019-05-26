import React, { Component } from "react";
import { StyledSingleTitle } from "../sharedcomponents/StyledHeader";
import StyledContent from "../sharedcomponents/StyledContent";
import {
  Button,
  Form,
  Segment,
  Dropdown,
  Placeholder,
} from "semantic-ui-react";
import "./Breeders.css";
import firebase from "firebase";

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

  componentDidMount() {
    this.getBreeds()
  }
  
  getBreeds = () => {
    const breedsRef = firebase.database().ref("breeds");

    breedsRef.once("value").then(snapshot => {
      const data = snapshot.val() || [];
      const breeds = data.map(breed => {
        return { name: breed.name, id: breed.id };
      });
      this.setState({breeds})
      console.log(this.state)
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const ref = firebase.database().ref("breeders")

    if (formValid(this.state)) {
      const newBreederId = ref.push().key;
            ref.child(newBreederId).set({
				id: newBreederId,
				...this.state
            })
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

  handleFileUpload = e => {
    const file = e.target.files[0]
    console.log(file)
    var storageRef = firebase.storage().ref();
    var breedersImagesRef = storageRef.child(`breeders/${this.state.name}.jpeg`);
    breedersImagesRef.put(file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
  }
 
  render() {

    const { breeds } = this.state
    const options = [{key: breeds.id, text: breeds.name, value: breeds.id}]
   
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
                    placeholder="Rasy kotow w ofercie"
                    multiple
                    selection
                    options={options}
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
                    <input type="file" name="picture" onChange={this.handleFileUpload}/>
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
