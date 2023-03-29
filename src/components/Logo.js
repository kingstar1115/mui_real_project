import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';
import Label from './Label';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, flag = true, sx }) {
  const ImgUrl = flag ? '/favicon/logo.png' : '/favicon/android-chrome-192x192.png';

  const logo = (

    <Box sx={{ width: flag ? 180 : 40, ...sx }}>
      <img alt='' src={ImgUrl} />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}

