import { DrumkitPage } from './app.po';

describe('drumkit App', function() {
  let page: DrumkitPage;

  beforeEach(() => {
    page = new DrumkitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
