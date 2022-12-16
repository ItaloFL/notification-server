import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { CountRecipientNotification } from './count-recipient-notification';

describe('Count recipient Notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id1',
    });

    expect(count).toEqual(2);
  });
});
