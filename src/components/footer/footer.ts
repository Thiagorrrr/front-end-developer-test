import * as ko from 'knockout';
export default class Footer {
    private apiData: any;
    constructor(params) {

        this.apiData = params.apiData;
    }
}

export function footer() {
    ko.components.register('ko-footer', {
        template: require('./footer.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new Footer(params),
        }
    });
}