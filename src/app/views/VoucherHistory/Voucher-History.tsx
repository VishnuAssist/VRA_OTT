import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, Grid, Avatar, Divider, Tabs, Tab, Button, TextField, Select, MenuItem } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { ExpandMore as ExpandMoreIcon, CheckCircleOutline as CheckCircleOutlineIcon, CancelOutlined as CancelOutlinedIcon , LocalOffer as LocalOfferIcon, DateRange as DateRangeIcon, Store as StoreIcon } from '@mui/icons-material';
import {  useNavigate } from 'react-router-dom';

type VoucherType = {
  voucherId: string;
  voucherName: string;
  voucherDescription: string;
  voucherStartDate: string;
  voucherEndDate: string;
  voucherBrand: string;
  voucherType: string;
  isActive: boolean;
  voucherImage: string;
};

type UsageDetailType = {
  usageDate: string;
  usedBy: string;
  redemptionAmount: number;
  remainingBalance: number;
};

type VoucherStatusLog = {
  changeDate: string;
  previousStatus: string;
  newStatus: string;
  changedBy: string;
};

type VoucherHistoryType = {
  voucherId: string;
  voucherName: string;
  voucherStartDate: string;
  voucherEndDate: string;
  usageDetails: UsageDetailType[];
  isActive: boolean;
  voucherStatusChangeLogs: VoucherStatusLog[];
};

export default function Component() {

  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedVoucher, setSelectedVoucher] = useState(0);

  const vouchers: VoucherType[] = [
    {
      voucherId: 'V001',
      voucherName: 'Summer Discount',
      voucherDescription: 'Get 20% off on all summer items',
      voucherStartDate: '2023-06-01',
      voucherEndDate: '2023-08-31',
      voucherBrand: 'SummerCool',
      voucherType: 'Multi-Use',
      isActive: true,
      voucherImage: '/placeholder.svg?height=80&width=80'
    },
    // Add 4 more vouchers here with similar structure
    {
      voucherId: 'V002',
      voucherName: 'Winter Sale',
      voucherDescription: '30% off on winter collection',
      voucherStartDate: '2023-12-01',
      voucherEndDate: '2024-02-28',
      voucherBrand: 'WinterWarm',
      voucherType: 'Single-Use',
      isActive: true,
      voucherImage: '/placeholder.svg?height=80&width=80'
    },
    {
      voucherId: 'V003',
      voucherName: 'Spring Fling',
      voucherDescription: '15% discount on spring fashion',
      voucherStartDate: '2024-03-01',
      voucherEndDate: '2024-05-31',
      voucherBrand: 'SpringBloom',
      voucherType: 'Multi-Use',
      isActive: false,
      voucherImage: '/placeholder.svg?height=80&width=80'
    },
    {
      voucherId: 'V004',
      voucherName: 'Back to School',
      voucherDescription: '25% off on school supplies',
      voucherStartDate: '2023-08-01',
      voucherEndDate: '2023-09-15',
      voucherBrand: 'SchoolCool',
      voucherType: 'Single-Use',
      isActive: true,
      voucherImage: '/placeholder.svg?height=80&width=80'
    },
    {
      voucherId: 'V005',
      voucherName: 'Holiday Special',
      voucherDescription: '40% discount on holiday decorations',
      voucherStartDate: '2023-11-15',
      voucherEndDate: '2023-12-25',
      voucherBrand: 'FestiveJoy',
      voucherType: 'Multi-Use',
      isActive: true,
      voucherImage: '/placeholder.svg?height=80&width=80'
    }
  ];

  const voucherHistories: VoucherHistoryType[] = vouchers.map(voucher => ({
    voucherId: voucher.voucherId,
    voucherName: voucher.voucherName,
    voucherStartDate: voucher.voucherStartDate,
    voucherEndDate: voucher.voucherEndDate,
    usageDetails: Array.from({ length: 10 }, (_, i) => ({
      usageDate: new Date(new Date(voucher.voucherStartDate).getTime() + Math.random() * (new Date(voucher.voucherEndDate).getTime() - new Date(voucher.voucherStartDate).getTime())).toISOString().split('T')[0],
      usedBy: `User ${i + 1}`,
      redemptionAmount: Math.floor(Math.random() * 100) + 1,
      remainingBalance: Math.floor(Math.random() * 500) + 100
    })),
    isActive: voucher.isActive,
    voucherStatusChangeLogs: [
      {
        changeDate: voucher.voucherStartDate,
        previousStatus: 'Inactive',
        newStatus: 'Active',
        changedBy: 'System'
      },
      {
        changeDate: new Date(new Date(voucher.voucherStartDate).getTime() + Math.random() * (new Date(voucher.voucherEndDate).getTime() - new Date(voucher.voucherStartDate).getTime())).toISOString().split('T')[0],
        previousStatus: 'Active',
        newStatus: 'Partially Used',
        changedBy: 'Store Manager'
      },
      {
        changeDate: new Date(new Date(voucher.voucherStartDate).getTime() + Math.random() * (new Date(voucher.voucherEndDate).getTime() - new Date(voucher.voucherStartDate).getTime())).toISOString().split('T')[0],
        previousStatus: 'Partially Used',
        newStatus: voucher.isActive ? 'Active' : 'Inactive',
        changedBy: 'System'
      }
    ]
  }));

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/voucher/voucherManagement");
  };
  return (
    
    <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontSize={"24px"} fontWeight={700} fontFamily={"monospace"}>Voucher History</Typography>
          <Button onClick={handleClick} variant="contained" color="info">
           Back
            </Button>
        </Box>
         
      <Tabs
        value={selectedVoucher}
        onChange={(_, newValue) => setSelectedVoucher(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        color='black'
      >
        {vouchers.map((voucher) => (
          <Tab key={voucher.voucherId} label={voucher.voucherName} />
        ))}
      </Tabs>

      {vouchers.map((voucher, index) => (
        <Box key={voucher.voucherId} hidden={selectedVoucher !== index}>
          <Card sx={{ mb: 4, mt: 2 }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar
                    src={voucher.voucherImage}
                    alt={voucher.voucherName}
                    sx={{ width: 80, height: 80 }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="h4" gutterBottom>
                    {voucher.voucherName}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    ID: {voucher.voucherId}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Chip
                      label={voucher.isActive ? 'Active' : 'Inactive'}
                      color={voucher.isActive ? 'success' : 'error'}
                      size="small"
                      icon={voucher.isActive ? <CheckCircleOutlineIcon /> : <CancelOutlinedIcon />}
                    />
                    <Typography variant="body2" sx={{ ml: 2 }}>
                      <DateRangeIcon sx={{ fontSize: 'small', mr: 0.5, verticalAlign: 'middle' }} />
                      Valid: {formatDate(voucher.voucherStartDate)} - {formatDate(voucher.voucherEndDate)}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" paragraph>
                {voucher.voucherDescription}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="textSecondary">
                    <StoreIcon sx={{ fontSize: 'small', mr: 0.5, verticalAlign: 'middle' }} />
                    Brand: {voucher.voucherBrand}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="textSecondary">
                    <LocalOfferIcon sx={{ fontSize: 'small', mr: 0.5, verticalAlign: 'middle' }} />
                    Type: {voucher.voucherType}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Voucher History
        </Typography>
        
  
              <Accordion expanded={expanded === 'usage'} onChange={handleChange('usage')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Usage Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper} elevation={0}>
                  <Grid  spacing={2} alignItems="center" sx={{ mb: 2,display:"flex",justifyContent:"flex-end" }}>
              <Grid item xs={12} sm={8} md={10} lg={6} sx={{mr:2}}>
                <TextField
                  label="Search"
                  variant="outlined"
                  size="small"
                  
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}  lg={6} >
                <Select sx={{px:4}}
                  
                  size="small"
                  fullWidth
                >
                  <MenuItem value="All">Filter</MenuItem>
                  <MenuItem value="Multi-Use">ID 1</MenuItem>
                  <MenuItem value="Single-Use">ID 2</MenuItem>
                  <MenuItem value="Expiry Date">ID 3</MenuItem>
                </Select>
              </Grid>
            </Grid>
                    <Table>
                      <TableHead>
                      
                        <TableRow>
                          <TableCell>Usage Date</TableCell>
                          <TableCell>Used By</TableCell>
                          <TableCell align="right">Redemption Amount</TableCell>
                          <TableCell align="right">Remaining Balance</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {voucherHistories[index].usageDetails.map((usage, usageIndex) => (
                          <TableRow key={usageIndex}>
                            <TableCell>{formatDate(usage.usageDate)}</TableCell>
                            <TableCell>{usage.usedBy}</TableCell>
                            <TableCell align="right">{usage.redemptionAmount.toFixed(2)}</TableCell>
                            <TableCell align="right">{usage.remainingBalance.toFixed(2)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'statusLogs'} onChange={handleChange('statusLogs')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Status Change Logs</Typography>
                </AccordionSummary>
                <AccordionDetails>
  <Timeline>
    {voucherHistories[index].voucherStatusChangeLogs.map((log, logIndex) => (
      <TimelineItem key={logIndex}>
        <TimelineSeparator>
          <TimelineDot color="primary">
            {/* <HistoryToggleOffIcon /> */}
          </TimelineDot>
          {logIndex < voucherHistories[index].voucherStatusChangeLogs.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="subtitle2" component="span">
            {formatDate(log.changeDate)}
          </Typography>
          <Typography variant="body2">
            Status changed from <strong>{log.previousStatus}</strong> to <strong>{log.newStatus}</strong>
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            Changed by: {log.changedBy}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    ))}
  </Timeline>
</AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}