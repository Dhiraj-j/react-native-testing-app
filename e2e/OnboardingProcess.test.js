import {by} from 'detox';
describe('Onboarding Process', () => {
  beforeAll(async () => {
    await device.launchApp();
    await waitFor(element(by.id('onboarding-swiper')))
      .toBeVisible()
      .withTimeout(5000);
  });

  it('should display first slide and navigate to another', async () => {
    await expect(
      element(by.text('Grab all events now only in your hands')),
    ).toBeVisible();

    await element(by.text('Next')).tap();

    await expect(
      element(by.text('Easy payment & fast event ticket')),
    ).toBeVisible();

    await element(by.text('Next')).tap();

    await expect(
      element(by.text(`Let's go to your favourite event now`)),
    ).toBeVisible();
  });

  it('should navigate to login screen', async () => {
    await expect(
      element(by.text(`Let's go to your favourite event now`)),
    ).toBeVisible();

    await element(by.text('Login')).tap();

    await expect(element(by.id(`Login`))).toBeVisible();
  });
});
