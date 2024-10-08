import { Fab, IconButton, styled } from "@mui/material";
import { Close } from "@mui/icons-material";
import clsx from "clsx";

import useSettings from "../../hooks/useSettings";
// import { Link } from "react-router-dom";
// import NavigationIcon from '@mui/icons-material/Navigation';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


// STYLED COMPONENT
const Toggle = styled("div")(() => ({
  zIndex: 99,
  right: "30px",
  bottom: "50px",
  position: "fixed",
  transition: "all 0.15s ease",
  "&.open": { right: "10px" },
}));

interface SecondarySidebarToggleProps {
  // No props needed for this component
}

const SecondarySidebarToggle: React.FC<SecondarySidebarToggleProps> = () => {
  const { settings, updateSettings } = useSettings() as any;

  const toggle = () => {
    updateSettings({ secondarySidebar: { open: !settings.secondarySidebar.open } });
  };

  return (
    <Toggle className={clsx({ open: settings.secondarySidebar.open })}>
      {settings.secondarySidebar.open && (
        <IconButton onClick={toggle} size="small" aria-label="toggle">
          <Close sx={{ color: "primary.contrastText" }} />
        </IconButton>
      )}

     
{/* <Fab 
  color="primary" 
  aria-label="expand" 
  component={Link} 
  to="/your-target-url" 
  sx={{ width: "140px", px: 2 }}
>
  Help ?
</Fab> */}
<Fab variant="extended" sx={{ backgroundColor: '#171D30', color: 'white' }}>
  <QuestionMarkIcon sx={{ mr: 1, color: 'white' }} />
  HELP
</Fab>


    
    </Toggle>
  );
};

export default SecondarySidebarToggle;
