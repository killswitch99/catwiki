import { useContext } from 'react'
import { CatsContext } from './CatsContext'
import { useNavigate } from 'react-router-dom'
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
} from 'reactstrap'
import Searchbar from './Seachbar'

const Header = () => {
	const { breedsNameList } = useContext(CatsContext)
	const navigate = useNavigate()
	const handleOnClick = (e) => {
		navigate(`/${e.target.value}`)
	}
	return (
		<div>
			<Navbar color="light" expand="md" light>
				<NavbarBrand href="/">CatWiki</NavbarBrand>
				<NavbarToggler onClick={function noRefCheck() {}} />
				<Collapse navbar>
					<Nav className="me-auto" navbar>
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
									<DropdownItem
										onClick={handleOnClick}
										key={breed.id}
										value={breed.name}
									>
										{breed.name}
									</DropdownItem>
								))}
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>

					<Searchbar style={{ listStyle: 'none' }} />
				</Collapse>
			</Navbar>
		</div>
	)
}

export default Header
