import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function CircularLoading() {
  return (
    <Box sx={{ marginTop : '30px' }}>
      <CircularProgress />
    </Box>
  );
}