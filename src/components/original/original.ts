import * as ko from 'knockout';
export default class Original {
    private apiData: any;
    constructor(params) {

        this.apiData = params.apiData;
    }
}

export function original() {
    ko.components.register('ko-original', {
        template: require('./original.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new Original(params),
        }
    });
}