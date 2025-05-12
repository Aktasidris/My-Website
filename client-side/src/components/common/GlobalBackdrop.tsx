import { Backdrop, CircularProgress } from '@mui/material';
interface GlobalBackdropProps {
  loading: boolean;
}
const GlobalBackdrop = ({loading}:GlobalBackdropProps) => {

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default GlobalBackdrop;
