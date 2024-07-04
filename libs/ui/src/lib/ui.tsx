import { Checkbox, styled } from '@mui/material';
import "@elrick85/theme"

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));
