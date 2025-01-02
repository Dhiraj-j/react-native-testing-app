import {by, element, waitFor, device} from 'detox';
describe('Onboarding Process', () => {
  beforeAll(async () => {
    await device.launchApp();
    await waitFor(element(by.id('onboarding-swiper')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.text('Next')).tap();
    await element(by.text('Next')).tap();
    await element(by.text('Sign up')).tap();
  });

  it('Should enter fName, LName, email, password and navigate to home', async () => {
    await element(by.id('fName')).typeText('dhiraj');
    await element(by.id('lName')).typeText('jaiswal');
    await element(by.id('email')).typeText('dhiraj@gmail.com');
    await element(by.id('password')).typeText('12345678');
    await device.pressBack();
    await element(by.id('Register')).tap();
    await expect(element(by.text('Testing Complete'))).toBeVisible();
  });
});
