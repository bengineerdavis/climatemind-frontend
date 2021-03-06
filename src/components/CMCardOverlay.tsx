import React from 'react';
import { ReactComponent as ArrowDown } from '../assets/icon-arrow-down.svg';
import {
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Slide,
  Theme,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      maxWidth: 'calc(100% - 24px) !important',
      height: '100%',
    },
    dialogHeader: {
      textAlign: 'center',
      position: 'sticky',
      top: 0,
      left: 0,
      backgroundColor: '#FFF',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    dialogContent: {
      padding: 0,
    },
    moreText: {
      textTransform: 'capitalize',
      marginBottom: '-0.5em',
      fontSize: '11pt',
      letterSpacing: '1pt',
      paddingLeft: 0,
    },
    titleText: {
      textTransform: 'capitalize',
      margin: '0.3em 0 0',
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
    card: {
      minWidth: '343px',
    },
    media: {
      margin: 0,
      paddingTop: '56.25%',
    },
    arrow: {
      padding: 0,
      marginTop: '-7px',
    },
  })
);

interface CMCardOverlayProps {
  title?: string;
  imageUrl?: string;
  shortDescription: string;
  description?: string;
}

const CMCardOverlay: React.FC<CMCardOverlayProps> = ({
  title,
  imageUrl,
  shortDescription,
  description,
}: CMCardOverlayProps) => {
  const classes = useStyles();

  const [showMore, setShowMore] = React.useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Dialog
        onClose={handleShowMoreClick}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="climate-effect-content"
        open={showMore}
        fullWidth={true}
        scroll="paper"
        maxWidth="sm"
        classes={{
          paperWidthSm: classes.paper,
        }}
      >
        <Slide direction="up" in={showMore} mountOnEnter unmountOnExit>
          <div className={classes.card}>
            <DialogTitle className={classes.dialogHeader}>
              <Grid
                container
                item
                direction="column"
                alignItems="center"
                justify="space-between"
              >
                <Grid item>
                  <Typography variant="body1" component="p">
                    Close
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    aria-label="close"
                    onClick={handleShowMoreClick}
                    className={classes.arrow}
                  >
                    <ArrowDown />
                  </IconButton>
                </Grid>
              </Grid>
            </DialogTitle>
            <DialogContent
              classes={{ root: classes.dialogContent }}
              dividers={false}
              id="climate-effect-content"
            >
              <Typography
                className={classes.titleText}
                gutterBottom
                variant="h6"
                component="h2"
              >
                {title}
              </Typography>

              {imageUrl && (
                <CardMedia
                  className={classes.media}
                  image={imageUrl}
                  title={`${title} icon`}
                  data-testid="CMCard-Image"
                />
              )}
              <Box p={2}>
                <Typography variant="body1" component="p">
                  {shortDescription}
                </Typography>

                {description && (
                  <Typography variant="body1" component="p">
                    {description}
                  </Typography>
                )}
              </Box>
            </DialogContent>
          </div>
        </Slide>
      </Dialog>

      <CardContent>
        <Button
          className={classes.moreText}
          variant="text"
          onClick={handleShowMoreClick}
          data-testid="CMCardMore"
        >
          LEARN MORE
        </Button>
      </CardContent>
    </>
  );
};

export default CMCardOverlay;
