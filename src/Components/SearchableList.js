import React from 'react'
import { connect } from 'react-redux'
import { Row } from './GridStyleObjects'
import { Header } from '../style'
import Axios from 'axios'
import DescriptionCard from './DescriptionCard'
import { SetData } from '../actions'

class SearchableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredList: []
        }
    }
    componentDidMount() {
        Axios.get(`./${this.props.category}Data.json`)
            .then((response) => {
                // handle success
                console.log(response);
                this.props.setData(response.data)
                this.setState({filteredList:response.data})
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }
    render() {
        return (<>
            <Row justification="center">
                <Header>{this.props.title}</Header>
            </Row>
            {this.state.filteredList && this.state.filteredList.length > 0 ?
                this.state.filteredList.map((card, index) => {
                    const { title, subtitle, startDate, endDate, points } = card
                    return <DescriptionCard key={`${title}${index}`} title={title} subtitle={subtitle} startDate={startDate} endDate={endDate} points={points} />
                }) :
                "Nothing to Show"}
        </>)
    }
}
const mstp = (state, ownProps) => ({
    [ownProps.category]: state.data[ownProps.category]
})

const mdtp = (dispatch, ownProps) => ({
    setData: payload => dispatch(SetData(ownProps.category, payload)),
})
export default connect(mstp, mdtp)(SearchableList)