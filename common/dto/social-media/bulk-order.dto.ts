export interface DataBulkOrder {
  id: string;
  order: number;
}

export class BulkOrderItemDto {
  id!: string;
  order!: number;

  constructor(data: DataBulkOrder) {
    this.id = data.id;
    this.order = data.order;
  }
}

export class BulkdOrderDto {
  items!: BulkOrderItemDto[];

  constructor(items: Array<DataBulkOrder>) {
    this.items = items.map((item) => new BulkOrderItemDto(item));
  }
}
