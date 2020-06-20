import React from "react";
import {Container, Row, Col} from "../Components/Grid";

export function WeaponList({children}) {
    return <ul className="list-group">{children}</ul>
}

export function WeaponListItem({
    name,
    perk, 
    procurement,
    ammoType,
    introduction,
    pvp,
    pve,
    catalyst
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col>
                    <h1>{name}</h1>
                    <h2>Perk: {perk}</h2>
                    <h2>How To Get: {procurement}</h2>
                    <h2>Does It Have A Catalyst: {catalyst}</h2>
                    <h3>Ammo Type: {ammoType}</h3>
                    <h3>First Introduced: {introduction}</h3>
                    <h3>PvE Comments: {pve}</h3>
                    <h3>PvP Comments: {pvp}</h3>
                    </Col>
                </Row>
            </Container>
        </li>
    )
}