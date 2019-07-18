import { CognitoAngularPage } from './app.po';

describe('cognito-angular App', function() {
  let page: CognitoAngularPage;

  beforeEach(() => {
    page = new CognitoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
