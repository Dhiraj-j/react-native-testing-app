import {by, element, waitFor, device} from 'detox';
describe('Onboarding Process', () => {
  beforeAll(async () => {
    await device.launchApp();
    await waitFor(element(by.id('onboarding-swiper')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.text('Next')).tap();
    await element(by.text('Next')).tap();
    await element(by.text('Login')).tap();
  });

  it('Should enter email and password and navigate to home', async () => {
    await element(by.id('email')).typeText('dhiraj@gmail.com');
    await element(by.id('password')).typeText('12345678');
    await device.pressBack();
    await element(by.id('Login')).tap();
    await expect(element(by.text('Testing Complete'))).toBeVisible();
  });
});
