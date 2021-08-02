export const invoiceSwaggerSettings = {
  id: {
    description: 'Event id',
    example: '1',
    readOnly: true,
    uniqueItems: true,
    isArray: false,
  },
  eventType: {
    type: 'string',
    required: true,
    title: 'Event type',
    example: 'ADD_INVOICE',
    uniqueItems: false,
    nullable: false,
  },
  event: {
    type: 'any',
    required: true,
    title: 'Event',
    description: 'Target event',
    example: '{ Id, VATrate, ...}',
    uniqueItems: false,
    nullable: false,
  },
  createdAt: {
    type: 'Date',
    required: true,
    title: 'Creation time',
    description: 'When event created',
    example: '2021-01-04T18:56:23.477',
    uniqueItems: false,
    nullable: false,
  }
};
