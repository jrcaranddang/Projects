import { CraftyKristenPage } from './app.po';

describe('crafty-kristen App', function() {
  let page: CraftyKristenPage;

  beforeEach(() => {
    page = new CraftyKristenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
