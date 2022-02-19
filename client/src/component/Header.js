import { useContext } from 'react'
import { CatsContext } from './CatsContext'

import {
	Navbar,
	NavbarBrand,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	NavbarToggler,
	DropdownItem,
	NavbarText,
} from 'reactstrap'

const Header = () => {
	const { breedsNameList } = useContext(CatsContext)
	return (
		<div>
			<Navbar color="light" expand="md" light>
				<NavbarBrand href="/">CatWiki</NavbarBrand>
				<NavbarToggler onClick={function noRefCheck() {}} />
				<Collapse navbar>
					<Nav className="me-auto" navbar>
						<NavItem>
							<NavLink href="/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/killswitch99/catwiki">
								GitHub
							</NavLink>
						</NavItem>
						<UncontrolledDropdown inNavbar nav>
							<DropdownToggle caret nav>
								Cat Breeds List
							</DropdownToggle>
							<DropdownMenu end>
								{breedsNameList.map((breed) => (
									<DropdownItem key={breed.id}>{breed.name}</DropdownItem>
								))}
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
					<NavbarText>Search bar</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	)
}

export default Header
