import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from './GridStyleObjects'
import { SetFilter } from '../actions'
import { StyledSearchBar, BorderedWidget } from '../style';
import { textFilter, dateFilter } from '../functions/filters';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "text",
            filter: textFilter
        }
        this.textInput = React.createRef();
    }
    searchBoxHandler = (event) => {
        const key = event.target.value
        const filterThunk = this.state.filter(key)

        this.props.setFilter(filterThunk);
    }
    searchTypeHandler = (event) => {
        this.setState({
            type: event.target.value,
            filter: event.target.value === "text" ? textFilter : dateFilter,
        });
        this.props.setFilter(this.state.filter(""))
        this.formInput.value = '';
    }
    render() {
        return (<>
            <Row justification="center">
                <BorderedWidget className="col-md-11">
                    <form>
                        <Row>
                            <Col tablet={1}>
                                Filter By:
                        </Col>
                            <Col tablet={1}>
                                <label>
                                    <input
                                        type="radio"
                                        name="filterType"
                                        value="text"
                                        checked={this.state.type === "text"}
                                        onChange={this.searchTypeHandler}
                                    />
                            Text
                            </label>
                            </Col>
                            <Col tablet={1}>
                                <label>
                                    <input
                                        type="radio"
                                        name="filterType"
                                        value="date"
                                        checked={this.state.type === "date"}
                                        onChange={this.searchTypeHandler}
                                    />
                            Date
                            </label>
                            </Col>
                        </Row>
                        <StyledSearchBar ref= {el => this.formInput = el} type={this.state.type} placeholder={"Handy Dandy Search Function"} onChange={this.searchBoxHandler}></StyledSearchBar>
                    </form>
                </BorderedWidget>
            </Row>
        </>)
    }
}

const mdtp = (dispatch) => ({
    setFilter: payload => dispatch(SetFilter(payload))
})
export default connect(null, mdtp)(SearchBar)