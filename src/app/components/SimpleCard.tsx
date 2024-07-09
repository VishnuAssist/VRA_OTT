import React, { ReactNode } from "react";
import { Card, Box, styled } from "@mui/material";

// STYLED COMPONENTS
const CardRoot = styled(Card)({
  height: "100%",
  padding: "20px 24px",
});

interface CardTitleProps {
  subtitle?: string;
}

const CardTitle = styled("div")<CardTitleProps>(({ subtitle }) => ({
  fontSize: "1rem",
  fontWeight: 500,
  textTransform: "capitalize",
  marginBottom: !subtitle ? "16px" : undefined,
}));

interface SimpleCardProps {
  children: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ children, title, subtitle }) => {
  return (
    <CardRoot elevation={6}>
      <CardTitle subtitle={subtitle ? subtitle.toString() : undefined}>
        {title}
      </CardTitle>
      {subtitle && <Box mb={2}>{subtitle}</Box>}
      {children}
    </CardRoot>
  );
};

export default SimpleCard;
