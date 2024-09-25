
import { useSelector } from 'react-redux';
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  IconButton,
  Grid,
  Chip,
  Card,
  CardContent,
  CardMedia,
  styled,
  DialogTitle,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import CategoryIcon from '@mui/icons-material/Category';
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

interface Props {
  open: boolean;
  onClose: () => void;
}

const StyledCard = styled(Card)(({ theme }) => ({
  overflow: 'hidden',
  boxShadow: theme.shadows[3],
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 300,
  objectFit: 'cover',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const InfoIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: theme.palette.primary.main,
}));

export default function VoucherPreview({ open, onClose }: Props) {
  const selectedVoucher = useSelector((state: any) => state.voucher.selectedVoucher);

  if (!selectedVoucher) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Voucher Details</Typography>
          <IconButton color="error" aria-label="close" onClick={onClose}>
            <HighlightOffSharpIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <StyledCard>
          <Box position="relative">
            <StyledCardMedia
              component="img"
              image={selectedVoucher.voucherImage}
              alt={selectedVoucher.voucherName}
            />
            {/* <StyledIconButton onClick={onClose} color="error" size="small">
              <HighlightOffSharpIcon fontSize="small" />
            </StyledIconButton> */}
          </Box>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h4" component="h2" fontWeight="bold">
                    {selectedVoucher.voucherName}
                  </Typography>
                  <StyledChip
                    label={selectedVoucher.isActive ? "Active" : "Inactive"}
                    color={selectedVoucher.isActive ? "success" : "error"}
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoItem>
                  <InfoIcon>
                    <DescriptionIcon />
                  </InfoIcon>
                  <Typography variant="body1">
                    <Box component="span" fontWeight="fontWeightMedium">Description:</Box> {selectedVoucher.voucherDescription}
                  </Typography>
                </InfoItem>
                <InfoItem>
                  <InfoIcon>
                    <BrandingWatermarkIcon />
                  </InfoIcon>
                  <Typography variant="body1">
                    <Box component="span" fontWeight="fontWeightMedium">Brand:</Box> {selectedVoucher.voucherBrand}
                  </Typography>
                </InfoItem>
                <InfoItem>
                  <InfoIcon>
                    <CategoryIcon />
                  </InfoIcon>
                  <Typography variant="body1">
                    <Box component="span" fontWeight="fontWeightMedium">Type:</Box> {selectedVoucher.voucherType}
                  </Typography>
                </InfoItem>
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoItem>
                  <InfoIcon>
                    <EventIcon />
                  </InfoIcon>
                  <Typography variant="body1">
                    <Box component="span" fontWeight="fontWeightMedium">Start Date:</Box> {selectedVoucher.voucherStartDate}
                  </Typography>
                </InfoItem>
                <InfoItem>
                  <InfoIcon>
                    <EventAvailableIcon />
                  </InfoIcon>
                  <Typography variant="body1">
                    <Box component="span" fontWeight="fontWeightMedium">End Date:</Box> {selectedVoucher.voucherEndDate}
                  </Typography>
                </InfoItem>
              </Grid>
            </Grid>
          </CardContent>
        </StyledCard>
      </DialogContent>
    </Dialog>
  );
}