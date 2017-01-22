import { DiscussionsPage } from './app.po';

describe('discussions App', function() {
  let page: DiscussionsPage;

  beforeEach(() => {
    page = new DiscussionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
