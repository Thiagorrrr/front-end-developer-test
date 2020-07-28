import * as ko from 'knockout';
export default class ViewModel {
    private apiData: any;

    constructor(params) {
        this.apiData = params.apiData;
    }
}

export function instagram() {
    ko.components.register('ko-instagram', {
        template: require('./instagram.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new ViewModel(params)
        }
    });
}