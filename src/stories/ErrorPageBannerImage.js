import { Box } from '@mui/material';
import React from 'react';
import img from '../stories/assets/images/ErrorBannerImg.svg'; // Make sure the path is correct.

const ErrorPageBannerImage = () => {
  return (
    <Box>
      <img src={img} alt="Error Banner" />
    </Box>
  );
};

export default ErrorPageBannerImage;