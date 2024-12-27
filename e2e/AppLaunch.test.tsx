import {launchaAndReload} from './testUtils';

describe('Example', () => {
  launchaAndReload();

  it('should have logo image', async () => {
    await expect(element(by.id('logo-image'))).toBeVisible();
    await expect(element(by.id('loading-indicator'))).toBeVisible();
  });

  it('should be navigate to splash screen', async () => {
    await waitFor(element(by.id('onboarding-swiper')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('onboarding-swiper'))).toBeVisible();
  });
});
