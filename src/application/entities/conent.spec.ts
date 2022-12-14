import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a content in notification', () => {
    const content = new Content('Olá, me chame na DM');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a content in notification if he length are less a 5 caracters', () => {
    expect(() => new Content('oi')).toThrow();
  });

  it('should not be able to create a content in notification if he length are more a 240 caracters', () => {
    expect(() => new Content('oi'.repeat(241))).toThrow();
  });
});
