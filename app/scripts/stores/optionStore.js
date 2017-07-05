import Reflux from 'reflux';
import ItemActions from '../actions/itemActions';

let OptionStore = Reflux.createStore({
  listenables: ItemActions,
  
  init() {
    this.options = [];
  },

  loadOptions(mealId) {
    this.trigger({ 
      loading: true,
      mealId: mealId
    });
  },

  loadOptionsCompleted(options) {
    this.options = options;

    this.trigger({ 
      options : this.options,
      loading: false
    });
  },

  loadOptionsFailed(error) {
    this.trigger({ 
      error : error,
      loading: false
    });
  }

});

export default OptionStore;