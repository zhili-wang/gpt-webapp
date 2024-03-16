import { makeStyles } from "@mui/material";

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chatWindow: {
    minHeight: '200px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    overflowY: 'auto',
    width: '100%',
  },
  message: {
    marginBottom: theme.spacing(1),
  },
  input: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
