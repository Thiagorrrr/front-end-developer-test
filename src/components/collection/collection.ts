import * as ko from 'knockout';
export default class ViewModel {
    private apiData: any;

    constructor(params) {
        this.apiData = params.apiData;
    }
}

export function collection() {
    ko.components.register('ko-collection', {
        template: require('./collection.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new ViewModel(params)
        }
    });
}