import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, styled } from '@mui/material';

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4)};
       background :  ${theme.colors.primary.lighter};
      //  box-shadow: 0px 0px 5px ;
`
);

interface PageTitleWrapperProps {
  children?: ReactNode;
}

const PageTitleWrapper: FC<PageTitleWrapperProps> = ({ children }) => {
  return (
    <PageTitle className="MuiPageTitle-wrapper">
      <Container maxWidth="lg" >{children}</Container>
    </PageTitle>
  );
};

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitleWrapper;
