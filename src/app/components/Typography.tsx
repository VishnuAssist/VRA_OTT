import { Box, styled } from "@mui/material";
import clsx from "clsx";
import React from "react";

const StyledBox = styled(Box, { shouldForwardProp: (prop) => prop !== "ellipsis" })<{
  ellipsis?: boolean;
}>(({ ellipsis }) => ({
  textTransform: "none",
  ...(ellipsis && { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }),
}));

interface TypographyProps extends React.ComponentProps<typeof StyledBox> {
  ellipsis?: boolean;
}

export const H1: React.FC<TypographyProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h1"
      fontSize="28px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H2: React.FC<TypographyProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h2"
      fontSize="24px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H3: React.FC<TypographyProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h3"
      fontSize="18px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H4: React.FC<TypographyProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h4"
      fontSize="16px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H5: React.FC<TypographyProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h5"
      fontSize="14px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H6: React.FC<TypographyProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h6"
      fontSize="13px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Paragraph: React.FC<TypographyProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="p"
      fontSize="14px"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Small: React.FC<TypographyProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      fontSize="12px"
      fontWeight="500"
      lineHeight="1.5"
      component="small"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Span: React.FC<TypographyProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      component="span"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Tiny: React.FC<TypographyProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      fontSize="10px"
      lineHeight="1.5"
      component="small"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};
