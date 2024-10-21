import  { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  DialogActions,
  Button,
} from '@mui/material';
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  CancelOutlined as CancelOutlinedIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
} from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import ConfirmationDialog from './ConfirmationDialog';

interface ApprovalPageProps {
  open: boolean;
  onClose: () => void;
}

interface ApprovalItem {
  id: number;
  name: string;
  status: 'pending' | 'approved' | 'rejected';
}

const staticData: ApprovalItem[] = [
  { id: 1, name: 'Item 1', status: 'pending' },
  { id: 2, name: 'Item 2', status: 'pending' },
  { id: 3, name: 'Item 3', status: 'pending' },
];

export default function ApprovalPage({ open, onClose }: ApprovalPageProps) {
  
  const [approvalItems, setApprovalItems] = useState<ApprovalItem[]>(staticData);
  const [selectedItem, setSelectedItem] = useState<ApprovalItem | null>(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [action, setAction] = useState<'approve' | 'reject' | null>(null);

  const totalApprovals = approvalItems.length;
  const approvedCount = approvalItems.filter(item => item.status === 'approved').length;
  const rejectedCount = approvalItems.filter(item => item.status === 'rejected').length;

  const handleApprove = (item: ApprovalItem) => {
    setSelectedItem(item);
    setAction('approve');
    setConfirmationOpen(true);
  };

  const handleReject = (item: ApprovalItem) => {
    setSelectedItem(item);
    setAction('reject');
    setConfirmationOpen(true);
  };

  const handleConfirm = () => {
    if (selectedItem && action) {
      const updatedItems = approvalItems.map(item =>
        item.id === selectedItem.id ? { ...item, status: action === 'approve' ? 'approved' : 'rejected' } : item
      );
      setApprovalItems(updatedItems);
    }
    setConfirmationOpen(false);
  };

  const handleCancel = () => {
    setConfirmationOpen(false);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
      <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 0 }}
        >
          <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: "700" }}>
           Approval Page
          </Typography>
          <IconButton color="error" aria-label="close" onClick={onClose}>
            <HighlightOffSharpIcon />
          </IconButton>
        </Box>
        
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <AssignmentTurnedInIcon color="primary" fontSize="large" />
              <Typography variant="h6">Total Approvals</Typography>
              <Typography variant="h4">{totalApprovals}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <CheckCircleOutlineIcon color="success" fontSize="large" />
              <Typography variant="h6">Approved</Typography>
              <Typography variant="h4">{approvedCount}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <CancelOutlinedIcon color="error" fontSize="large" />
              <Typography variant="h6">Rejected</Typography>
              <Typography variant="h4">{rejectedCount}</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="h5" gutterBottom>Approval Items</Typography>
        <List>
          {approvalItems.map(item => (
            <ListItem
              key={item.id}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="approve"
                    onClick={() => handleApprove(item)}
                    disabled={item.status !== 'pending'}
                  >
                    <CheckCircleIcon color={item.status === 'approved' ? 'success' : 'inherit'} />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="reject"
                    onClick={() => handleReject(item)}
                    disabled={item.status !== 'pending'}
                  >
                    <CancelIcon color={item.status === 'rejected' ? 'error' : 'inherit'} />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={item.name}
                secondary={`Status: ${item.status}`}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>

      <DialogActions>
<Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
  <Button onClick={onClose} color="error" variant="contained">
    Cancel
  </Button>
  <Box sx={{ flexGrow: 1 }} />
  <Button onClick={onClose} color="info" variant="contained">
    Complit
  </Button>
</Box>

     
      </DialogActions>
      <ConfirmationDialog
        open={confirmationOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        action={action}
        itemName={selectedItem?.name}
      />
    </Dialog>
  );
}