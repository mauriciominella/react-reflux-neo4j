import Reflux from 'reflux';
import mealService from '../services/mealService';

const ItemActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']},
  'loadOptions': {children: ['completed', 'failed']}
});

ItemActions.loadItems.listen(function(){
    mealService().getAll().then((items) => {
        const onlyNames = items.data.map(meal => meal.name);
        this.completed(onlyNames);
    }).catch((err) => {
        this.failed(err);
    });
});

ItemActions.loadItems.listen(function(){
    mealService().getAll().then((items) => {
        const onlyNames = items.data.map(meal => meal.name);
        this.completed(onlyNames);
    }).catch((err) => {
        this.failed(err);
    });
});

export default ItemActions;