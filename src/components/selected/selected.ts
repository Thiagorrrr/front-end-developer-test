import * as ko from 'knockout';
export default class ViewModel {
    private apiData: any;

    constructor(params) {
        this.apiData = params.apiData;
    }
}

export function selected() {
    ko.components.register('ko-selected', {
        template: require('./selected.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new ViewModel(params)
        }
    });
}