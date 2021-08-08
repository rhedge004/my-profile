import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { SkillContainer, SkillLabel } from './styled';

const useStylesFacebook = makeStyles((theme) => ({
    root: {
      position: 'relative',
    },
    bottom: {
      color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
      color: '#1a90ff',
      position: 'absolute',
      left: 0,
    },
    circle: {
      strokeLinecap: 'round',
    },
  }));

const SkillProgress = ({value, label}) => {
    const classes = useStylesFacebook();
    return (
          <div style={{display:"flex", flexDirection:"column", padding: "20px", alignItems:"center"}}>
            <div>
              <SkillContainer>
                <div className={classes.root}>
                    <CircularProgress
                        variant="determinate"
                        className={classes.bottom}
                        size={70}
                        thickness={4}
                        value={100}
                    />
                    <CircularProgress
                        variant="determinate"
                        className={classes.top}
                        size={70}
                        thickness={4}
                        value={value}
                    />
                </div>
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <p component="div" style={{fontSize: "30px", paddingBottom: "5px", color: "#1a90ff"}}>{value / 10}</p>
                </Box>
              </SkillContainer>
            </div>
            <div>
              <SkillLabel>{label}</SkillLabel>
            </div>
          </div>
    );
  }

export default SkillProgress;