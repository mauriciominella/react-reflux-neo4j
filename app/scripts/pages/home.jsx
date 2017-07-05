import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import OptionStore from '../stores/optionStore';
import ItemActions from '../actions/itemActions';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      options: [],
      loading: false
    };
  }

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    this.unsubscribe = OptionStore.listen(this.onStatusChange.bind(this));
    ItemActions.loadItems();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  loadOptionHandler(mealId) {
    ItemActions.loadOptions(mealId);
  }

  onStatusChange(state) {
    const newState = Object.assign({}, this.state, state)
    this.setState(newState);
  }

  render() {
    const itemListProps = Object.assign({}, { itemClick: this.loadOptionHandler }, this.state);
    return (
      <item className="nice-panel brand primary info good warning">
        <ItemList { ...itemListProps } />
      </item>
    );
  }
}

export default Home;