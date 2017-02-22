import { A7LazyloadingDIModulePage } from './app.po';

describe('a7-lazyloading-di-module App', function() {
  let page: A7LazyloadingDIModulePage;

  beforeEach(() => {
    page = new A7LazyloadingDIModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
