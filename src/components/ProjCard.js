import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Hidden, Paper, Card, CardActionArea, CardMedia, CardContent, CardActions, withWidth } from '@material-ui/core';

import { useStyles } from '../style/designScheme';

export const CardContents = [
  {
    id: 1,
    type: ['UX', 'UI', 'Dev', 'Data'],
    icon: 'Yerbba.svg',
    name: 'Yerbba',
    desc: 'A patient medical information platform that provides personalized report based on own medical records'
  },
  {
    id:2,
    type: ['UX','UI'],
    icon: '2ndBrain.svg',
    name: '2nd Brain',
    desc: 'A medical reminder system that reminds teens with chronic illnesses to stay on medication schedule'
  },
  {
    id: 3,
    type: ['UI'],
    icon: 'eyeGuide.svg',
    name: 'eyeGuide',
    desc: 'A platform that help patients change their behavior over their glaucoma and remember to take glaucoma medication'
  },
  {
    id: 4,
    type: ['UX','UI'],
    icon: 'upLift.svg',
    name: 'UpLift',
    desc: 'A commuter-to-commuter ridesharing service for low-income population'
  },
  {
    id: 4,
    type: ['UX'],
    icon: 'beams.svg',
    name: 'Beams consulting',
    desc: 'A consulting for a platform of participant recruitment program to increase retension rate'
  },
  {
    id: 6,
    type: ['UX','UI'],
    icon: 'healthHub.svg',
    name: 'Radnet.kr',
    desc: 'A health information exchange service that shares medical images and meta data through cloud based sharing and real-time image reading'
  },
  {
    id: 7,
    type: ['UX','UI'],
    icon: 'ma.svg',
    name: 'TV - Mobile App 2.0',
    desc: 'Applications to seamlessly enjoy TV contents with multiscreen'
  },
  {
    id: 8,
    type: ['UI'],
    icon: 'shahid.svg',
    name: 'Shahid TV App',
    desc: 'A live and VOD contents streaming application built in Set top box'
  },
  {
    id: 9,
    type: ['UI'],
    icon: 'bxr.svg',
    name: 'Boxer HD+2 Default UI',
    desc: 'UI specification for Set top box'
  },
  {
    id: 10,
    type: ['Data'],
    icon: 'classifier.svg',
    name: 'Simple Classification',
    desc: 'Practice of building bare-bone implementations: Naive Bayes and Logistic Regression'
  },
]

function ProjCard(props) {
  const classes = useStyles();
  const { content, width } = props;
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(!hover)
  }

  function handleMouseOut() {
    setHover(false)
  }

  return (
    <Card style={{maxWidth:345,background:'none'}} elevation='none'>
      <CardActionArea
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <CardMedia
          component='img'
          alt={content.name}
          height='140'
          image={"/portfolios/"+content.icon}
          title={content.name}
          style={{objectFit:'fill', paddingTop:'2em'}}
          className={hover=== true || width === "xs" ? classes.projOverImg:classes.projOutImg}
        />
        <CardContent
          className={hover=== true || width === "xs" ? classes.projOverTxt:classes.projOutTxt}
        >
          <Typography gutterBottom variant='subtitle1' component='h3'>
            {content.name}
          </Typography>
          <Typography variant='body2' component='p'>
            {content.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

ProjCard.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(ProjCard);
// return (
//   <Paper 
//     elevation={0} 
//     onMouseOver={handleMouseOver}
//     onMouseOut={handleMouseOut}
//     style={{background:'none'}}
//   >
//     <Grid container direction='row' justify='flex-start' alignItems='center' spacing={3}>
//       <Hidden xsDown>
//       <Grid item xs={12} className={classes.projCard}>
//         <img src={"/portfolios/"+content.icon} alt='yerbba' className={hover? classes.projOverImg:classes.projOutImg}/>
//       </Grid>
//       <Grid item xs={12}>
//         <Typography variant='subtitle1' align='center' className={hover? classes.projOverTxt:classes.projOutTxt}>{content.name}</Typography>
//       <Grid item xs={12}>
//         <Typography variant='body2' align='center' className={hover? classes.projOverTxt:classes.projOutTxt}>{content.desc}</Typography>
//       </Grid>
//       </Grid>
//       </Hidden>
//       <Hidden mdUp>
//       <Grid item xs={12} className={classes.projCard}>
//         <img src={"/portfolios/"+content.icon} alt='yerbba' className={classes.projOverImg}/>
//       </Grid>
//       <Grid item xs={12}>
//         <Typography variant='subtitle1' align='center' className={classes.projOverTxt}>{content.name}</Typography>
//       <Grid item xs={12}>
//         <Typography variant='body2' align='center' className={classes.projOverTxt}>{content.desc}</Typography>
//       </Grid>
//       </Grid>
//       </Hidden>
//     </Grid>
//   </Paper>
// )