import * as ko from 'knockout';
export default class Jewelry {
    private apiData: any;

    constructor(params) {
        this.apiData = params.apiData;
    }
}

export function jewelry() {
    ko.components.register('ko-jewelry', {
        template: require('./jewelry.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new Jewelry(params)
        }
    });
}