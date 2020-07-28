import * as ko from 'knockout';
export default class ViewModel {
  private apiData: any;

  constructor(params) {
    this.apiData = params.apiData;
  }
}

export function discover() {
  ko.components.register('ko-discover', {
    template: require('./discover.html'),
    viewModel: {
      createViewModel: (params, componentInfo) => new ViewModel(params)
    }
  });
}