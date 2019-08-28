// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Pop Quiz
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            React or Angular
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Final Exam or Final Project
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Git Basics
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Layout>
            <Heading size={2} textColor="primary" caps>
              What is git?
            </Heading>
          </Layout>
          <Layout>
            <Text>
              Version Control System for tracking changes
            </Text>
          </Layout>
          <Layout>
            <Image fit  height={150} src={'https://i.dlpng.com/static/png/2341908_thumb.png'} />
            <List fill>
              <ListItem>
                Distributed version control
              </ListItem>
              <ListItem>
                Coordinates work between multiple developers
              </ListItem>
              <ListItem>
                Revert back at any time (time travel)
              </ListItem>
            </List>
          </Layout>
        </Slide>
        <Slide>
          <Image src={'https://www.explainxkcd.com/wiki/images/4/4d/git.png'} />
        </Slide>
        <Slide bgColor={'#f06d06'}>
          <Heading textColor='secondary'>
            One box approach
          </Heading>
        </Slide>
        <Slide>
          <Heading>
            Terms
          </Heading>
          <List>
            <ListItem>
              Repository (repo) - where the boxes are
            </ListItem>
            <ListItem>
              Commit - time travel point, do this often
            </ListItem>
            <ListItem>
              Branch - something you are working on
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor={'secondary'}>
          <Heading textColor='#f06d06'>
            Three box approach
          </Heading>
          <br />
          <Text textColor={'#f06d06'}>Four with the cloud</Text>
        </Slide>
        <Slide bgColor={'tertiary'}>
        <Heading textColor={'#ffffff'} textAlign={'center'}>
             Three boxes
            </Heading>
          <List textAlign={'center'}>   
            <ListItem>
              Working Directory
            </ListItem>
            <ListItem>
              Staging Area
            </ListItem>
            <ListItem>
              Local Repository
            </ListItem>
          </List>
        </Slide>
        <Slide>
          git init
        </Slide>
        <Slide>
          git config -global user.name "username"
          <br />
          git config -global user.email "email@email.com"
        </Slide>
        <Slide>
          git add
        </Slide>
        <Slide>
          git status
        </Slide>
        <Slide>
          git commit -m"Helpful message"
        </Slide>
        <Slide>
          Live Demo
        </Slide>
        <Slide>
          <Image src={'https://imgs.xkcd.com/comics/git_commit_2x.png'} />
        </Slide>
      </Deck>
    );
  }
}
