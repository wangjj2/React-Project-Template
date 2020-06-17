import React from 'react'
import { Row, Col } from './GridStyleObjects'
import { BorderedWidget, Title, Subtitle, Date } from '../style'

const DescriptionCard = ({ startDate, endDate, title, subtitle, points }) => {
    return (
        <>
            <BorderedWidget>
                <Row>
                    <Col tablet={10}>
                        <Row>
                            <Col>
                                <Title>{title}</Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Subtitle>{subtitle}</Subtitle>
                            </Col>
                        </Row>
                    </Col>
                    {startDate && <Col tablet={2}>
                        <Date>{startDate} - {endDate ? endDate : "Current"}</Date>
                    </Col>}
                </Row>
                {points && <Row>
                    <Col>
                        <ul>
                            {points.map((p, index) => (<li key={`${title}${index}`}>
                                {p}
                            </li>))}
                        </ul>
                    </Col>
                </Row>}
            </BorderedWidget>
        </>
    )
}
export default DescriptionCard