
import { NavItem, Nav, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse, Tooltip } from 'reactstrap';


export default function NavBar() {
    return (
        <>
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand className="me-auto" href="/">
                        reactstrap
                    </NavbarBrand>
                    <NavbarToggler className="me-2" onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/ponents/">
                                    Components
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <div>
                <p>
                    Somewhere in here is a{' '}
                    <a
                        href="#"
                        id="TooltipExample"
                    >
                        tooltip
                    </a>
                    .
                </p>
                <Tooltip
                    flip
                    target="TooltipExample"
                    toggle={function noRefCheck() { }}
                >
                    Hello world!
                </Tooltip>
            </div>
            <button type="button" class="btn btn-secondary"
                data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                title="This top tooltip is themed via CSS variables.">
                Custom tooltip
            </button>

        </>
    );
}