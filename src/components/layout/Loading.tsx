import { CircularProgress, styled } from '@mui/material';

const LoadingContainer = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  );
};
