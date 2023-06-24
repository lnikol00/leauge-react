import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

type leaugesData = {
    id: number,
    leauge: leaugeData[],
}

type leaugeData = {
    id: number,
    season: string
    team: string,
    played: string,
    winns: string,
    ties: string,
    loses: string,
    goals: string,
    points: string
}

function Tablepage() {

    const params = useParams();

    const [leauge, setLeauge] = useState<leaugesData>();

    useEffect(() => {
        fetch(`http://localhost:3500/leauges/${params.id}`)
            .then((res) => res.json())
            .then((json) => setLeauge(json))
    })

    return (
        <div className='bg-secondary p-3'>
            <div className='d-flex align-items-center pb-2'>
                <h3>Sezona: </h3>
                <Dropdown as={ButtonGroup} className='ps-2'>
                    <Button variant='secondary'>23/24</Button>

                    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item >23/24</Dropdown.Item>
                        <Dropdown.Item >22/23</Dropdown.Item>
                        <Dropdown.Item >21/22</Dropdown.Item>
                        <Dropdown.Item >20/21</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tim</th>
                        <th>Odigrano susreta</th>
                        <th>Pobjeda</th>
                        <th>Nerješeno</th>
                        <th>Porazi</th>
                        <th>Gol razlika</th>
                        <th>Bodovi</th>
                    </tr>
                </thead>
                <tbody>
                    {leauge?.leauge.map((season, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{season.team}</td>
                                <td>{season.played}</td>
                                <td>{season.winns}</td>
                                <td>{season.ties}</td>
                                <td>{season.loses}</td>
                                <td>{season.goals}</td>
                                <td>{season.points}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table >
        </div >
    );
}

export default Tablepage
