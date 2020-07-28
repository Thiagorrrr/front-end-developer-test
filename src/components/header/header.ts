import * as ko from 'knockout';
export default class Header {
    private apiData: any;
    constructor(params) {

        this.apiData = params.apiData;
    }


}



export function header() {
    ko.components.register('ko-header', {
        template: require('./header.html'),
        viewModel: {
            createViewModel: (params, componentInfo) => new Header(params),
        }
    });
}