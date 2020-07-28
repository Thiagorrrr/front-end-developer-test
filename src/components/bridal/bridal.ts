import * as ko from 'knockout';
export default class Bridal {
    private apiData: any;
    constructor(params) {

        this.apiData = params.apiData;
    }
}

export function bridal() {
    ko.components.register('ko-bridal', {
        template: require('./bridal.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new Bridal(params),
        }
    });
}