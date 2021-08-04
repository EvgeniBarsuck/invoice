export const invoiceSwaggerSettings = {
  id: {
    description: 'Invoice id',
    example: '1',
    readOnly: true,
    uniqueItems: true,
    isArray: false,
  },
  comment: {
    type: 'string',
    required: false,
    title: 'Comment',
    description: 'Comment for invoice',
    example: 'Some comments',
    uniqueItems: false,
    nullable: true,
  },
  description: {
    type: 'string',
    required: true,
    title: 'Description',
    description: 'Description for invoice',
    example: 'Some description',
    uniqueItems: false,
    nullable: false,
  },
  position: {
    type: 'string',
    maxLength: 30,
    required: true,
    title: 'Position',
    description: 'Position for invoice',
    example: '23 position',
    uniqueItems: false,
    nullable: false,
  },
  priceNetto: {
    type: 'number',
    required: true,
    title: 'Netto price',
    description: 'Netto price for invoice',
    example: 235,
    uniqueItems: false,
    nullable: false,
  },
  VATrate: {
    type: 'number',
    required: true,
    title: 'Vat rate',
    description: 'Vat rate for invoice',
    example: 18,
    uniqueItems: false,
    nullable: false,
  },
  сontractor: {
    type: 'string',
    required: true,
    title: 'Contractor',
    description: "Invoice сontractor's name",
    example: 'First name last mame',
    nullable: false,
  },
  delete: {
    type: 'Boolean',
    required: true,
    default: false,
    title: 'Deleting invoice',
    description: 'Has the invoice been deleted',
    example: 'false',
    nullable: false,
  },
};
