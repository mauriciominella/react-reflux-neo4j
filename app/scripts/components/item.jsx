import React from 'react';

const Item = (props) => {
  return (
    <div>
      <div className="nice-panel-heading">
        {props.item.name}
      </div>
      <div className="nice-panel-content">
          content
      </div>
    </div>
  );
};

Item.propTypes = {
  item: React.PropTypes.object,
}

export default Item;