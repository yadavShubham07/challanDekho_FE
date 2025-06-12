export interface OffenceDetail {
  act: string;
  name: string;
}

export interface ChallanDetail {
  challanNo: string;
  challanDateTime: string;
  challanPlace: string;
  challanStatus: string;
  sentToRegCourt: string;
  remark: string;
  fineImposed: string;
  dlNo: string | null;
  driverName: string | null;
  ownerName: string;
  nameOfViolator: string;
  department: string;
  statCode: string;
  document_impounded: string;
  offenceDetails: OffenceDetail[];
  amount_of_fine_imposed: string | null;
  court_address: string | null;
  court_name: string | null;
  date_of_proceeding: string | null;
  sent_to_court_on: string | null;
  sent_to_virtual_court: string;
  rtoDistrictName: string;
}

export interface ChallanApiResponse {
  pendingChallans: ChallanDetail[];
}

export interface Challan {
  id: string;
  challanNumber: string;
  vehicleNumber: string;
  date: string;
  location: string;
  violation: string;
  amount: number;
  status: "Pending" | "Paid";
  issuedBy: string;
}

export interface ChallanSearchResult {
  vehicleNumber: string;
  state: string;
  challans: Challan[];
}
