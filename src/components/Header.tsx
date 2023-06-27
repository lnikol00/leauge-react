import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="/" className='d-flex align-items-center fs-3'>
                    <img
                        alt=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAS1BMVEUYGRrZ2MwAAAAVFRYMDAzi4dUSFBUABQkICg3f3tFubmh9fXYAAAOPjoecm5MXGBmJiIFjY17o59oAAAhTU1CqqaB5eXKdnZW1tKqw/VuyAAABV0lEQVR4nO3dzVKDMBiGUUQLKVVpS/25/yu1axdhHEzyiedcAc/A7p2E7nHnOgAAAAAAAAAAAAB+KI3NpCp9l1MzlwqFc7oem7mmuXzgcHho5jAIFChQoECBAgUKFChQoECBAgUKFChQoECBAgV+s/Px5fj2Us77WLxv/Q32/XMxNQbQ9cDyX1FRAgUGJ1BgcAIFBidQYHACBQYnUGBwAgUGJ1BgcAIFBrd2dmljYOpzKoxL90eYzjnbDoil6TXnVKdwydnUN/f5+bTGAFrUPTCrxoRdlECBwQkUGJxAgcEJFBicQIHBCRQYnECBwQkUGJxAgb9hyS5cGwUIXM4f2Ylrk8/2gfNQ8vLGfF+QA5IFCRQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQL/X+DY8s9ZY4X5LN2mZm5V/u42pGaGGn0AAAAAAAAAAAAA/ClPO9eVvL8ogi9JiniwPlFIzQAAAABJRU5ErkJggg=="
                        width="45"
                        height="35"
                        className='pe-2'
                    />{' '}
                    Liga Petice
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav variant="underline">
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" href={`/leauges/${1}`}>Premier Leauge</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" href={`/leauges/${2}`}>Bundesliga</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3" href={`/leauges/${3}`}>La Liga</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4" href={`/leauges/${4}`}>Ligue 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5" href={`/leauges/${5}`}>Seria A</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
