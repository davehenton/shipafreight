import { connect } from 'react-redux';

import { setNavBarProp } from '../../state/actionCreators';
import NavBarDisplay from './NavBarDisplay';

export const getMenuClass = isMenuOpen => (isMenuOpen ? '' : 'hide');

// Extract isMenuOpen from navBar
export const mapStateToProps = ({ navBar: { isMenuOpen } }) => ({
  isMenuOpen,
  menuClass: getMenuClass(isMenuOpen),
});

export const getToggleMenu = dispatch => val => () =>
  dispatch(setNavBarProp('isMenuOpen', val));

export const mapDispatchToProps = dispatch => ({
  toggleMenu: getToggleMenu(dispatch),
});

const NavBarConnect = connect(mapStateToProps, mapDispatchToProps)(
  NavBarDisplay
);

export default NavBarConnect;
