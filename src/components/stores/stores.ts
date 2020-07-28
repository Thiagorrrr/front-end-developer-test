import * as ko from 'knockout';
export default class Stores {
    private apiData: any;

    constructor(params) {
        this.apiData = params.apiData;
    }
}

export function stores() {
    ko.components.register('ko-stores', {
        template: require('./stores.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new Stores(params)
        }
    });
}