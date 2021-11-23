import { DefaultListParams } from '@app/shared/models/default-list-params.model';

export interface GetPaymentTaskParams extends DefaultListParams {
  name_like?: string;
  username_like?: string;
}
