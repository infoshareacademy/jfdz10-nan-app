import React, { Component } from "react";
import { StyledSingleTitle } from "../sharedcomponents/StyledHeader";
import StyledContent from "../sharedcomponents/StyledContent";
import {
  Button,
  Form,
  Segment,
  Dropdown,
  Placeholder
} from "semantic-ui-react";
import "./Breeders.css";

class BreaderAdd extends Component {
  state = {
    breeders: []
  };

  render() {
    return (
      <>
        <StyledContent>
          <StyledSingleTitle>
            <h1>Formularz dodania hodowcy</h1>
          </StyledSingleTitle>
          <Segment>
            <Form size="large" className="breeders-form">
              <Form.Group className="breeders-form__top--fields">
                <Form.Field label="Nazwa hodowcy:" control="input" width={6} />
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
                    <label>Zdjęcie:</label>
                    <Placeholder style={{ height: 250, width: 250 }}>
                      <Placeholder.Image />
                    </Placeholder>
                  </Form.Field>
                  <Button
                    type="submit"
                    className="breeders-form__main__btn--upload"
                  >
                    Przeglądaj
                  </Button>
                </div>
                <div>
                  <Form.Group
                    grouped
                    className="breeders-form__main--adress-details"
                  >
                    <label>Adres hodowcy:</label>
                    <Form.Field label="Ulica:" control="input" type="input" />
                    <Form.Field
                      label="Kod pocztowy:"
                      control="input"
                      type="input"
                    />
                    <Form.Field label="Miasto:" control="input" type="input" />
                  </Form.Group>
                  <Form.Group
                    grouped
                    className="breeders-form__main--contact-details"
                  >
                    <label>Dane kontaktowe:</label>
                    <Form.Field label="Email:" control="input" type="input" />
                    <Form.Field
                      label="Nr telefonu:"
                      control="input"
                      type="input"
                    />
                    <Form.Field
                      label="Strona www:"
                      control="input"
                      type="input"
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
