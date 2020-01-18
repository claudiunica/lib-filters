import Filter from './filter';

export default class FilterManager {
    checkboxFilters: Filter[] = [];
    // selectedFilters

    dateFilter

    constructor(filterType, options?) {
        this.handleFilterTypes(filterType);
    }


    private handleFilterTypes(filterType) {
        Object.keys(filterType).forEach((filter: any) => {
            if (typeof filter.filter === 'string') {
                switch (filter.filter) {
                    case 'checkbox':

                }
            }
        })
    }
}


// new FiltersManager({
//     department: {
//         filter: 'checkbox',
//         key: 'department_id',
//         values: []
//     },
//     fiscal_period: {
//         filter: {
//             type: Date,
//             intevals: true
//         }
//     },
//     ceva: {
//         filter: 'switch',
//         key: 'ceva_nume'
//     }
// })