import {
  Button,
  Card as MainCard,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const Card = () => {
  const theme = useTheme();

  return (
    <MainCard
      elevation={0}
      sx={{
        position: 'relative',
        border: '1px solid',
        borderRadius: 1,
        borderColor: theme.palette.divider,
        height: 1,
        '& .MuiCardContent-root': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
        '&:hover': {
          transform: 'scale3d(1.02, 1.02, 1)',
          transition: 'all .4s ease-in-out',
        },
      }}
    >
      <Grid container spacing={1.25} style={{ cursor: 'pointer' }}>
        <Grid item xs={12}>
          <List sx={{ width: 1, p: 0 }}>
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="comments"
                  color="secondary"
                  onClick={() => {}}
                >
                  <TurnedInIcon
                    color="primary"
                    style={{
                      fontSize: '1.35rem',
                      marginTop: '-5px',
                      marginRight: '-20px',
                    }}
                  />
                </IconButton>
              }
              sx={{ marginRight: '-17px', mt: -1 }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="h5"
                    sx={{ width: { xs: `calc( 100% - 50px)`, sm: 'auto' } }}
                    noWrap
                  >
                    title
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sx={{ maxHeight: 230 }}>
          <List sx={{ p: 0, pb: 1 }}>
            {[{}, {}].map((v, i) => {
              return (
                <ListItem disablePadding key={i} sx={{ mt: 1 }}>
                  <Typography
                    sx={{
                      width: { xs: `calc( 100% - 50px)`, sm: 'auto' },
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '2',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    <Typography color="primary" variant="h6" component="span">
                      dddd
                    </Typography>
                    <Typography color="secondary" variant="h6" component="span">
                      ddd
                    </Typography>
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        justifyContent="flex-end"
        sx={{ mt: 'auto', mb: 0, pt: 2.25, pl: 0.3, pr: 0.3 }}
      >
        <Button
          variant="outlined"
          size="small"
          sx={{ width: '50%' }}
          onClick={() => {}}
        >
          Detail
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ width: '50%' }}
          onClick={() => {}}
        >
          Live C2
        </Button>
      </Stack>
    </MainCard>
  );
};

export default Card;
