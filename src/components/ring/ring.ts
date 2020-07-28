import * as ko from 'knockout';
export default class ViewModel {
  private apiData: any;

  constructor(params) {
    this.apiData = params.apiData;
  }
}

export function ring() {
  ko.components.register('ko-ring', {
    template: require('./ring.html'),
    viewModel: {
      createViewModel: (params, componentInfo) => new ViewModel(params)
    }
  });
}