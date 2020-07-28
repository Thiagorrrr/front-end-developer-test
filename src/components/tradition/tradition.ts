import * as ko from 'knockout';
export default class ViewModel {
    private apiData: any;

    constructor(params) {
        this.apiData = params.apiData;
    }
}

export function tradition() {
    ko.components.register('ko-tradition', {
        template: require('./tradition.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new ViewModel(params)
        }
    });
}