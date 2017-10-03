import { TrustedDealMakerPage } from './app.po';

describe('trusted-deal-maker App', () => {
  let page: TrustedDealMakerPage;

  beforeEach(() => {
    page = new TrustedDealMakerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
