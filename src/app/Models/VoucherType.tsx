export interface VoucherType {
    voucherId: string;
    voucherName: string;
    voucherDescription: string;
    voucherStartDate: string;
    voucherEndDate: string;
    voucherBrand: string;
    voucherType: 'Multi-Use' | 'Single-Use' | 'Expiry Date';
    voucherImage: string;
    isActive: boolean;
  }