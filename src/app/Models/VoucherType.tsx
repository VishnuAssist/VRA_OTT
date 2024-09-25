export interface VoucherType {
    voucherId: string;
    voucherName: string;
    voucherDescription: string;
    voucherStartDate: string;
    voucherEndDate: string;
    voucherBrand: string;
    voucherType: 'Multi-Use' | 'Single-Use' | 'Expiry Date';
    // voucherImage: string;
    isActive: boolean;

    "voucherImage"?: string | null ;
  }

  export interface VoucherHistoryType {
    voucherId: string;
    voucherName: string;
    voucherStartDate: string;
    voucherEndDate: string;
    usageDate?: string;  // Date when the voucher was used
    usedBy?: string;  // User or customer who redeemed the voucher
    redemptionAmount?: number;  // Value redeemed if partial usage is allowed
    remainingBalance?: number;  // Balance left after partial usage
    isActive: boolean;  // Voucher's current status (active/inactive)
    voucherStatusChangeLogs: VoucherStatusLog[];  // Record of status changes over time
}

export interface VoucherStatusLog {
    changeDate: string;  // Date when status was changed
    previousStatus: string;  // Previous status (e.g., active/inactive)
    newStatus: string;  // New status (e.g., expired, redeemed)
    changedBy: string;  // Who made the change (system, admin, etc.)
}
