import { Avatar, Box, styled } from "@mui/material";
import { Theme } from '@mui/material/styles';

// Define the props for the StatusCircle
interface StatusCircleProps {
  theme?: Theme;
  status: 'online' | 'offline'; // adjust the possible status values as needed
}

// STYLED COMPONENTS
const StyledAvatar = styled(Avatar)({
  height: 40,
  width: 40
});

const StatusCircle = styled('div')<StatusCircleProps>(({ theme, status }) => ({
  height: 14,
  width: 14,
  bottom: 0,
  right: "-3px",
  borderRadius: "7px",
  position: "absolute",
  border: "2px solid white",
  color: status !== "online" ? "white !important" : undefined,
  background: status === "online" ? theme.palette.primary.main : theme.palette.error.main
}));

interface ChatAvatarProps {
  src: string;
  status: 'online' | 'offline'; // adjust the possible status values as needed
}

export default function ChatAvatar({ src, status }: ChatAvatarProps) {
  return (
    <Box position="relative">
      <StyledAvatar src={src} />
      <StatusCircle status={status}  />
    </Box>
  );
}
