import React, {Fragment} from 'react';
import { Input } from "semantic-ui-react";

class AccessorySearch extends React.Component {
    state = {
        text: ''
    };

    onInputChange = e => {
        this.setState(
                { text: e.target.value},
                () => this.props.onFilterChange(this.state)
            )  
    };

    render() {
        return (
            <Fragment>
                <Input 
                    action="Szukaj" 
                    className="cat_input" 
                    placeholder="wpisz czego szukasz..."  
                    type="text" value={this.state.value} 
                    onChange={this.onInputChange} />
            </Fragment>
        )
        
    }
}

export default AccessorySearch;