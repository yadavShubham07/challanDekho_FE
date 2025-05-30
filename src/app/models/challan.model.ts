export interface Challan {
  id: string;
  challanNumber: string;
  vehicleNumber: string;
  date: string;
  location: string;
  violation: string;
  amount: number;
  status: 'Pending' | 'Paid';
  issuedBy: string;
}

export interface ChallanSearchResult {
  vehicleNumber: string;
  state: string;
  challans: Challan[];
}