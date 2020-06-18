import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { SetProfile } from '../actions'
import { Row, Col } from './GridStyleObjects'
import { NameHeader } from '../style'
import Axios from 'axios'

const TitleWidget = ({ setProfile, name, address, phone, email }) => {
    useEffect(() => {
        Axios.get('./profileData.json')
        .then(function (response) {
          // handle success
          console.log(response);
          setProfile(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }, []);
    return (
        <>
            <Row justification="center">
                <Col tablet={4}>
                    <Row justification="center">
                        <NameHeader>{name}</NameHeader>
                    </Row>
                </Col>
            </Row>
            <Row justification="around">
                <Col tablet={6} mobile={12}>
                    {address ? <>
                        <Row>
                            <Col>
                                Current Address:
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {address.address2 ? address.address2 : ""} {address.address1}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {address.city}, {address.state}, {address.country}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {address.zip}
                            </Col>
                        </Row>
                    </> : "No Currently Listed Address"}
                </Col>
                <Col tablet={2} mobile={12}>
                    <Row>
                        <Col>
                            Contact Information:
                            </Col>
                    </Row>
                    <Row>
                        <Col>
                            Cell: {phone}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Email: {email}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
const mstp = (state) => ({
    name: state.profile.name,
    address: state.profile.address,
    phone: state.profile.phone,
    email: state.profile.email,
})

const mdtp = (dispatch)=>({
    setProfile: payload => dispatch(SetProfile(payload))
})
export default connect(mstp, mdtp)(TitleWidget)