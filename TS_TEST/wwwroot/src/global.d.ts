import {
    Api as _Api
} from 'datatables.net';


//Required for FetchExportInternal to work properly
declare global {
    type DtApi = _Api; //Generic DataTable type
}