import {FieldDto} from './common/FieldDto';
import {AllIndiaConsumerPriceIndexRuralUrban} from './AllIndiaConsumerPriceIndexRuralUrban';

export interface AllIndiaConsumerPriceIndexRuralUrbanDocument {
  index_name: string;
  title: string;
  desc: string;
  created: number;
  updated: number;
  created_date: Date;
  updated_date: Date;
  active: string;
  visualizable: string;
  catalog_uuid: string;
  source: string;
  org_type: string;
  org: string[];
  sector: string[];
  field: AllIndiaConsumerPriceIndexRuralUrban[];
  external_ws_url: string;
  external_ws: string;
  message: string;
  version: string;
  status: string;
  total: number;
  count: number;
  limit: string;
  offset: string;
  records: AllIndiaConsumerPriceIndexRuralUrban[];
}
