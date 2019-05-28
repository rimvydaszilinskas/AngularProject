import { AppPage } from './app.po';
import { element, browser, logging, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to login', () => {
    browser.get('home/login');
    const loginText = element(by.id('title')).getText();

    expect(loginText).toEqual('Login');
  });

  it('should login and navigate to display all', () => {
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');

    element(by.id('submitLogin')).click();

    expect(browser.getCurrentUrl()).toContain('/portal/display-all');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
