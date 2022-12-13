import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationType } from './create-notification-type';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationType) {
    const { recipientId, category, content } = body;

    await this.prisma.notification.create({
      data: {
        content,
        category,
        recipientId,
      },
    });
  }
}
