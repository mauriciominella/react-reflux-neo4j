import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const styles = {
    margin: 20
  }
  let options = [] 
  if (props.options) {
    options = props.options.map(option => <li key={option.id}>{option.name}</li>);
  }

  return (
    <div className="nice-panel" style={styles}>
      <div className="nice-panel-heading">
        {props.item.name}
      </div>
      <div onClick={props.itemClick.bind(this)} className="nice-panel-content">
        <ul>
          {options}
        </ul>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  options: PropTypes.object,
  itemClick: PropTypes.func
}

export default Item;