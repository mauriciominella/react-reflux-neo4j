import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false
    };
  }

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    ItemActions.loadItems();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="nice-panel brand primary info good warning">
        <div className="nice-panel-heading">
          Meal
        </div>
        <div className="nice-panel-content">
          <ItemList { ...this.state } />
        </div>
      </div>
    );
  }
}

export default Home;