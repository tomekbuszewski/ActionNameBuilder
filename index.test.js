import ActionNameBuilder from './index';

describe ('Action Name Builder tests', () => {
  it ('should generate action with default presets', () => {
    const anb = new ActionNameBuilder({ group: 'test' });

    expect(anb.make('something')).toBe('[TEST] SOMETHING');
  });

  it ('should generate underlined action with default presets', () => {
    const anb = new ActionNameBuilder({ group: 'test test', underline: true });

    expect(anb.make('something')).toBe('[TEST_TEST]_SOMETHING');
  });

  it ('should generate action with custom prefix and suffix', () => {
    const anb = new ActionNameBuilder({ group: 'test', prefix: '', suffix: ' /' });

    expect(anb.make('something')).toBe('TEST / SOMETHING');
  });

  it ('should generate without group', () => {
    const anb = new ActionNameBuilder();

    expect(anb.make('something')).toBe('SOMETHING');
  });
});
