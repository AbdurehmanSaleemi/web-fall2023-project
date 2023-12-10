import { Link, Text } from "@chakra-ui/react"
import PropTypes from 'prop-types'

const NavItem = ({ linkName, route, onClick }) => {
  return (
    <Link
        href={route}
        paddingY={{base: 2, lg: 0}}
        textAlign={'center'}
        cursor={'pointer'}
        onClick={onClick}
    >
        { linkName }
    </Link>     
  )
}

NavItem.propTypes = 
{
    route: PropTypes.string,
    linkName: PropTypes.string,
    onClick: PropTypes.func
}


export default NavItem
