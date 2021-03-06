import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

import { ReactComponent as FacebookIcon } from '../../assets/socials/Facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/socials/Twitter.svg';
import { ReactComponent as GithubIcon } from '../../assets/socials/Github.svg';
import { ReactComponent as InstaIcon } from '../../assets/socials/Instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/socials/Linkedin.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/socials/Youtube.svg';

const useStyles = makeStyles(() =>
  createStyles({
    menuSocials: {
      marginTop: '8vh',
      maxWidth: '220px',
    },
    faIcon: {
      height: '44px',
      width: '44px',
      color: '#39f5ad',
    },
  })
);

// Returns a 2x3 Grid of Social Media Links
const Socials: React.FC = () => {
  const classes = useStyles();

  const handleOpen = (url: string) => {
    window.open(url);
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FacebookIcon className={classes.faIcon} />,
      url: 'https://www.facebook.com/climatemindorg',
    },
    {
      name: 'Instagram',
      icon: <InstaIcon className={classes.faIcon} />,
      url: 'https://www.instagram.com/climatemind/',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon className={classes.faIcon} />,
      url: 'https://www.google.com',
    },
    {
      name: 'Linkedin',
      icon: <LinkedinIcon className={classes.faIcon} />,
      url: 'https://www.linkedin.com/company/climate-mind/',
    },
    {
      name: 'Youtube',
      icon: <YoutubeIcon className={classes.faIcon} />,
      url: 'https://www.youtube.com/channel/UCcU5SdPGMUj5FuwmKEjLu2Q',
    },
    {
      name: 'Github',
      icon: <GithubIcon className={classes.faIcon} />,
      url: 'https://github.com/ClimateMind',
    },
  ];

  return (
    <Grid item className={classes.menuSocials} data-testid="socials">
      <List>
        {socialLinks.map((social, index) => {
          return (
            <IconButton
              aria-label={social.name}
              key={index}
              onClick={() => handleOpen(social.url)}
            >
              {social.icon}
            </IconButton>
          );
        })}
      </List>
    </Grid>
  );
};

export default Socials;
