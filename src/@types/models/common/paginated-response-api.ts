export interface Data<K> {
  paginate?: PaginateInfo;
  data?: K[];
}

export interface PaginateInfo {
  currentPage?: number;
  lastPage?: number;
  total?: number;
}

export interface PaginatedResponseApi<DTO> {
  error?: boolean;
  status?: number;
  message?: string;
  data?: Data<DTO>;
  debug?: string[];
}
