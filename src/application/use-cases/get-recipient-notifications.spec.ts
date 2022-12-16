import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('get recipient Notification', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new GetRecipientNotification(
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

    const { notifications } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-id1' }),
        expect.objectContaining({ recipientId: 'example-recipient-id1' }),
      ]),
    );
  });
});
