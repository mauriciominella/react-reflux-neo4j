import React from 'react';
import Item from '../components/item.jsx';
import PropTypes from 'prop-types';

const ItemList = (props) => {
  let items = props.items.map(item => <Item itemClick={props.itemClick.bind(this, item.id)} key={item.id} item={item} options={props.options} />),
    loading = props.loading ? <div className="loading-label">Loading...</div> : '';

  return (
    <div>
      {loading}
      <div>
        {items}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.array,
  options: PropTypes.array,
  itemClick: PropTypes.func
}

export default ItemList;