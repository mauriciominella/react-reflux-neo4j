import React from 'react';
import Item from '../components/item.jsx';

const ItemList = (props) => {
  let items = props.items.map(item => <Item key={item.id} item={item} />),
    loading = props.loading ? <div className="loading-label">Loading...</div> : '';

  return (
    <div>
      {loading}
      <div className="nice-panel">
        {items}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  loading: React.PropTypes.bool,
  items: React.PropTypes.array
}

export default ItemList;