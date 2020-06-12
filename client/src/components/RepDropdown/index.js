import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const RepDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Representative
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem className="rep-button">Congressperson</DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="sen-button">Senator</DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="gov-button">Governor</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default RepDropdown;