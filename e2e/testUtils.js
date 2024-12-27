const launchaAndReload = async page => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
};

export {launchaAndReload};
