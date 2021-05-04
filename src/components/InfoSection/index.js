import React from 'react';
import { Button, NavBtnLink, TextLink } from '../ButtonElements';
import {
    InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,
    TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img
} from './InfoElements';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import CallIcon from '@material-ui/icons/Call';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));
const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description,
    buttonLabel, img, alt, primary, dark, dark2, isLink }) => {
    const classes = useStyles();

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    {isLink ? <NavBtnLink to="/form">Start Now</NavBtnLink>
                                        :
                                        <Button to="home"
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>}
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                {img && img !== "" ? <Img src={img} alt={alt} /> :
                                    <Timeline align="alternate">
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    Start
          </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot>
                                                    <PlayCircleFilledWhiteIcon />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className={classes.paper}>
                                                    <Typography variant="h6" component="h1">
                                                        Contact me
            </Typography>
                                                    <Typography>Tell me what you want by completing
                                                        <TextLink to="/form" target="_blank"> this form</TextLink>.
                                                        </Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    {/* 10:00 am */}
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="primary">
                                                    <CallIcon />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className={classes.paper}>
                                                    <Typography variant="h6" component="h1">
                                                        Get Details
            </Typography>
                                                    <Typography>I will call you to get details and offer you a price based on your request.</Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot color="primary" variant="outlined">
                                                    <MonetizationOnIcon />
                                                </TimelineDot>
                                                <TimelineConnector className={classes.secondaryTail} />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className={classes.paper}>
                                                    <Typography variant="h6" component="h1">
                                                        1st Payment
            </Typography>
                                                    <Typography>50% of the invoice will need to be paid to book the photoshoot.</Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    End
          </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="secondary">
                                                    <CheckCircleIcon />
                                                </TimelineDot>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className={classes.paper}>
                                                    <Typography variant="h6" component="h1">
                                                        2nd Payment
            </Typography>
                                                    <Typography>The other half will need to be paid after the fun!</Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>}
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
