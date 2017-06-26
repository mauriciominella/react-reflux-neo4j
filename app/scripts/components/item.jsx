import React from 'react';

const Item = (props) => {
  const styles = {
    margin: 20
  }

  return (
    <div  className="nice-panel" style={styles}>
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