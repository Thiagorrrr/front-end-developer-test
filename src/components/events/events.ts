import * as ko from 'knockout';
export default class Events {
    private apiData: any;
    constructor(params) {

        this.apiData = params.apiData;
    }
}

export function events() {
    ko.components.register('ko-events', {
        template: require('./events.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new Events(params),
        }
    });
}