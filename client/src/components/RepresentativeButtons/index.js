import React from 'react';
import { Button } from 'reactstrap';

const RepresentativeButtons = (props) => {
  return (
    <div>
      <Button outline color="primary">House</Button>{' '}
      <Button outline color="primary">Sheriff</Button>{' '}
      <Button outline color="primary">Governor</Button>
    </div>
  );

}

export default RepresentativeButtons;