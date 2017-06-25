import Reflux from 'reflux';
import mealService from '../services/mealService';

const ItemActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']},
  'loadOptions': {children: ['completed', 'failed']}
});

ItemActions.loadItems.listen(function(){
    mealService().getAll().then((items) => {
        this.completed(items.data);
    }).catch((err) => {
        this.failed(err);
    });
});

export default ItemActions;