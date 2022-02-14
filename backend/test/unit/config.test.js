const fs = require('fs');
const Config = require('../../src/utils/config');

jest.mock('dotenv');
jest.mock('fs');

describe('Config utility test', () => {
  afterEach(() => jest.resetAllMocks());

  test('Define NODE_ENV default value', async () => {
    fs.existsSync.mockReturnValueOnce(true);
    process.env.NODE_ENV = null;
    Config.loadConfig();
    expect(process.env.NODE_ENV).toEqual('development');
    expect(fs.existsSync).toHaveBeenCalledTimes(1);
  });

  test('File not found exception', async () => {
    fs.existsSync.mockReturnValueOnce(false);
    expect(() => {
      Config.loadConfig();
    }).toThrow(Error);
  });
});
