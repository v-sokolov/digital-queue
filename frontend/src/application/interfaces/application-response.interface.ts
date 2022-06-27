export interface ApplicationResponse<T = undefined> {
  success: boolean;
  errors: Error[];
  data?: T;
}
