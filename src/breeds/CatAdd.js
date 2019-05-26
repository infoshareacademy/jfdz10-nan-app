import React, { Component } from "react";
import { StyledSingleTitle } from "../sharedcomponents/StyledHeader";
import StyledContent from "../sharedcomponents/StyledContent";
import { Button, Form, Segment, Placeholder, Radio, Divider } from "semantic-ui-react";
import "../breeders/Breeders.css";
import firebase from "firebase";

const formValid = ({ metrics, characteristics, ...rest }) => {
  let valid = true;

  Object.values(characteristics).forEach(val => {
    val === null && (valid = false);
  });

  Object.values(metrics).forEach(val => {
    val === "" && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === "" && (valid = false);
  });

  return valid;
};

class CatAdd extends Component {
  state = {
    breeders: [],
    accessoryId: [],
    name: "",
    description: "",
    metrics: {
      color: "",
      heigh: "",
      lifeExpectancy: "",
      weight: ""
    },
    characteristics: {
        character: null,
        animalsAcceptation: null,
        hairLost: null,
        kidsFriendieness: null,
        lifeExpectancy: null,
        loudliness: null,
        needOfAttention: null,
        size: null
    }
  };

//   componentDidMount() {
//     this.getBreeders();
//   }

//   getBreeders = () => {
//     const breedsRef = firebase.database().ref("breeders");

//     breedsRef.once("value").then(snapshot => {
//       const data = snapshot.val() || [];
//       const breeders = data.map(breeder => {
//         return { name: breeder.name, id: breeder.id };
//       });
//       this.setState({ breeders });
//     });
//   };

  handleSubmit = e => {
    e.preventDefault();
    const ref = firebase.database().ref("breeds");

    if (formValid(this.state)) {
        console.log(this.state)
      const newBreedId = ref.push().key;
      ref.child(newBreedId).set({
        id: newBreedId,
        ...this.state
      });
      alert("dodano hodowce");
      this.setState({
        breeders: [],
        accessoryId: [],
        name: "",
        description: "",
        metrics: {
          color: "",
          heigh: "",
          lifeExpectancy: "",
          weight: ""
        },
        characteristics: {
            character: null,
            animalsAcceptation: null,
            hairLost: null,
            kidsFriendieness: null,
            lifeExpectancy: null,
            loudliness: null,
            needOfAttention: null,
            size: null
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

//   handleFileUpload = e => {
//     const file = e.target.files[0];
//     console.log(file);
//     var storageRef = firebase.storage().ref();
//     var breedersImagesRef = storageRef.child(
//       `breeders/${this.state.name}.jpeg`
//     );
//     breedersImagesRef.put(file).then(function(snapshot) {
//       console.log("Uploaded a blob or file!");
//     });
//   };

  handleCharacterChange = (e, { value }) =>
    this.setState({
      characteristics: Object.assign({}, this.state.characteristics, {
        character: value
      })
    });

  handleAcceptationChange = (e, { value }) =>
    this.setState({
      characteristics: Object.assign({}, this.state.characteristics, {
        animalsAcceptation: value
      })
    });

  handleHairLostChange = (e, { value }) =>
    this.setState({
      characteristics: Object.assign({}, this.state.characteristics, {
        hairLost: value
      })
    });

  handleKidsFriendlinessChange = (e, { value }) =>
    this.setState({
      characteristics: Object.assign({}, this.state.characteristics, {
        kidsFriendieness: value
      })
    });

  handleLifeExpectancyChange = (e, { value }) =>
    this.setState({
      characteristics: Object.assign({}, this.state.characteristics, {
        lifeExpectancy: value
      })
    });

  handleLoudlinessChange = (e, { value }) =>
    this.setState({
      characteristics: Object.assign({}, this.state.characteristics, {
        loudliness: value
      })
    });

  handleNeedOfAttentionChange = (e, { value }) =>
    this.setState({
      characteristics: Object.assign({}, this.state.characteristics, {
        needOfAttention: value
      })
    });

  handleSizeChange = (e, { value }) =>
    this.setState({
      characteristics: Object.assign({}, this.state.characteristics, {
        size: value
      })
    });

  render() {
    const characteristics = this.state.characteristics;

    return (
      <>
        <StyledContent>
          <StyledSingleTitle>
            <h1>Formularz dodawania kota</h1>
          </StyledSingleTitle>
          <Segment>
            <Form
              size="large"
              className="breeders-form"
              onSubmit={this.handleSubmit}
            >
              <Form.Group className="breeders-form__top--fields">
                <Form.Field
                  label="Nazwa rasy:"
                  control="input"
                  width={6}
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChangeBasicData}
                />
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
                    <input
                      type="file"
                      name="picture"
                      onChange={this.handleFileUpload}
                    />
                  </div>
                </div>
                <div>
                  <Form.Group
                    grouped
                    className="breeders-form__main--adress-details"
                  >
                    <label>Podstawowe informacje o rasie:</label>
                    <Form.Field
                      label="Kolor:"
                      control="input"
                      type="input"
                      name="color"
                      value={this.state.metrics.color}
                      onChange={this.handleChangeNested("metrics")}
                    />
                    <Form.Field
                      label="Wzrost w cm:"
                      control="input"
                      type="input"
                      name="heigh"
                      value={this.state.metrics.heigh}
                      onChange={this.handleChangeNested("metrics")}
                    />
                    <Form.Field
                      label="Długość życia - lata:"
                      control="input"
                      type="input"
                      name="lifeExpectancy"
                      value={this.state.metrics.lifeExpectancy}
                      onChange={this.handleChangeNested("metrics")}
                    />
                    <Form.Field
                      label="Waga w kg:"
                      control="input"
                      type="input"
                      name="weight"
                      value={this.state.metrics.weight}
                      onChange={this.handleChangeNested("metrics")}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="breeders-form__bot">
                <Form.TextArea
                  label="Opis:"
                  placeholder="Wpisz tutaj krotki opis rasy"
                  rows={9}
                  width={9}
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChangeBasicData}
                />
                <div className="breeders-form__bot__img" />
              </div>
          <h1 style={{margin: "0 auto"}}>Charakterystyka:</h1>
          <Divider/>
              <p>Jak okreslisz zachowanie kota?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Aktywne"
                  value={"active"}
                  checked={characteristics.character === "active"}
                  onChange={this.handleCharacterChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Spokojne"
                  value={"calm"}
                  checked={characteristics.character === "calm"}
                  onChange={this.handleCharacterChange}
                />
              </Form.Group>
              <Divider />
              <p>Czy dobrze znosi obecność innych zwierząt w swoim otoczeniu?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Tak"
                  value={true}
                  checked={characteristics.animalsAcceptation === true}
                  onChange={this.handleAcceptationChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Nie"
                  value={false}
                  checked={characteristics.animalsAcceptation === false}
                  onChange={this.handleAcceptationChange}
                />
              </Form.Group>
              <Divider />
              <p>Czy kot gubi dużo sierści?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Tak"
                  value={true}
                  checked={characteristics.hairLost === true}
                  onChange={this.handleHairLostChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Nie"
                  value={false}
                  checked={characteristics.hairLost === false}
                  onChange={this.handleHairLostChange}
                />
              </Form.Group>
              <Divider />
              <p>Czy kot dobrze toleruje dzieci?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Tak"
                  value={true}
                  checked={characteristics.kidsFriendieness === true}
                  onChange={this.handleKidsFriendlinessChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Nie"
                  value={false}
                  checked={characteristics.kidsFriendieness === false}
                  onChange={this.handleKidsFriendlinessChange}
                />
              </Form.Group>
              <Divider />
              <p>
                Wybierz przedzial średniej życia kota
              </p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Do 10 lat"
                  value={"short"}
                  checked={characteristics.lifeExpectancy === "short"}
                  onChange={this.handleLifeExpectancyChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Od 10 do 15 lat"
                  value={"middle"}
                  checked={characteristics.lifeExpectancy === "middle"}
                  onChange={this.handleLifeExpectancyChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Powyżej 15 lat"
                  value={"long"}
                  checked={characteristics.lifeExpectancy === "long"}
                  onChange={this.handleLifeExpectancyChange}
                />
              </Form.Group>
              <Divider />
              <p>Czy zwierze bywa głośne?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Tak"
                  value={true}
                  checked={characteristics.loudliness === true}
                  onChange={this.handleLoudlinessChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Nie"
                  value={false}
                  checked={characteristics.loudliness === false}
                  onChange={this.handleLoudlinessChange}
                />
              </Form.Group>
              <Divider />
              <p>Jak wiele uwagi wymaga od właściciela?</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Stosunkowo mało - do dwóch godzin dziennie."
                  value={true}
                  checked={characteristics.needOfAttention === true}
                  onChange={this.handleNeedOfAttentionChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Relatywnie dużo. Kilka godzin dziennie."
                  value={false}
                  checked={characteristics.needOfAttention === false}
                  onChange={this.handleNeedOfAttentionChange}
                />
              </Form.Group>
              <Divider />
              <p>Określ budowę kota</p>
              <Form.Group inline>
                <Form.Radio
                  control={Radio}
                  label="Mały."
                  value={"small"}
                  checked={characteristics.size === "small"}
                  onChange={this.handleSizeChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Średni."
                  value={"middle"}
                  checked={characteristics.size === "middle"}
                  onChange={this.handleSizeChange}
                />
                <Form.Radio
                  control={Radio}
                  label="Duży."
                  value={"big"}
                  checked={characteristics.size === "big"}
                  onChange={this.handleSizeChange}
                />
              </Form.Group>
              <Divider/>
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

export default CatAdd;
