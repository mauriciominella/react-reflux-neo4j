import Reflux from 'reflux';
import peopleService from '../services/peopleService';

const ItemActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']}
});

ItemActions.loadItems.listen(function(){
    peopleService().getAll().then((items) => {
        const onlyNames = items.data.map(person => person.name);
        this.completed(onlyNames);
    }).catch((err) => {
        this.failed(err);
    });
});

export default ItemActions;
