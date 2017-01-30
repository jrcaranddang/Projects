import { RanchokbPage } from './app.po';

describe('ranchokb App', function() {
  let page: RanchokbPage;

  beforeEach(() => {
    page = new RanchokbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
