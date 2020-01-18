import Filter from './filter';

export default class CheckboxFilter extends Filter {
    title = '';
    key: string = '';
    howMany: number = 0;
    selected = [];

    constructor(title, key, howMany) {
        super(title, key, howMany);
    }

    onSelect(item, checked: boolean) {
        if (checked) {
            this.selected.push(item);
        } else {
            const index = this.selected.findIndex((elem => elem[this.key] === item[this.key]));
            if (index >= 0) {
                this.selected.splice(index, 1);
            } else {
                throw new Error(`Invalid item ${item}`);
            }
        }
    }

}