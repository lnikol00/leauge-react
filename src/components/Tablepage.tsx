import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form"

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
    const [filter, setFilter] = useState<string>("22/23")

    useEffect(() => {
        fetch(`http://localhost:4000/leauges/${params.id}`)
            .then((res) => res.json())
            .then((json) => setLeauge(json))
    })

    return (
        <div className='bg-secondary p-3'>
            <div className='d-flex align-items-center pb-2'>
                <h3>Sezona: </h3>
                <Form.Select aria-label="Default select example" value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className='w-25 ms-2 mb-2 bg-secondary border border-dark'
                >
                    <option value="22/23">22/23</option>
                    <option value="21/22">21/22</option>
                </Form.Select>
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
                    {leauge?.leauge.filter((season) => {
                        if (season.season.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
                            return season;
                        }
                    }).map((season, index) => {
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
