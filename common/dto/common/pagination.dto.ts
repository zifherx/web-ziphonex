export class PaginationDto {
  page: number;
  limit: number;
  skip: number;

  constructor(page: number = 1, limit: number = 10) {
    this.page = Math.max(1, page);
    this.limit = Math.min(100, Math.max(1, limit));
    this.skip = (this.page - 1) * this.limit;
  }
}
