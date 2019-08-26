// Import React
import React from 'react';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Magic,
  Quote,
  Slide,
  Text,
  Layout,
} from 'spectacle';
import { appendFile } from 'fs';

// Drake --> https://i.imgflip.com/1s8ffi.jpg
const images = {
  drakeNo: require('./assets/drakeNo.png'),
  drakeYes: require('./assets/drakeYes.png'),
  zombie: require('./assets/zombie.jpg')
};


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
            Scripting Languages
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            CPSC 317
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
          notes={`Cover definition of scripting languages. 
          Engage the classroom. See what languages they
          have worked with`}>
          <BlockQuote>
            <Quote>This course emphasizes programming using scripting languages </Quote>
            <Cite>Someone at Slippery Rock</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={['slide']}
          notes={'Share syllabus link. Explain philosphy of document'}
          >
            <Layout>
              <Heading size={4} fit caps>
                Syllabus
              </Heading>
            </Layout>
            <Link href='https://tinyurl.com/317syllabus'>
              <Text>
                https://tinyurl.com/317syllabus
              </Text>
            </Link>
          </Slide>
        <Slide transition={['slide']} transitionDuration={500} bgColor="tertiary">
          <Heading size={2} textColor="primary">
            Dan Miller
          </Heading>
        </Slide>
        <Slide>
          <Layout>
            <Image src={images.drakeNo} height={300} fit />
            <Text fill margin={'auto'}>Dr. Miller</Text>
          </Layout>
          <Layout>
            <Image src={images.drakeYes} height={300}/>
            <Text fill margin={'auto'}>Professor</Text>
          </Layout>
        </Slide>
        <Slide bgColor={'quaternary'}>
          <Layout>
            <Heading size={3} fit textColor={'tertiary'}>
              Timeline
            </Heading>
            </Layout>
            <List> 
              <ListItem>
                Syllabus Day (1 Day)
              </ListItem>
              <ListItem>
                Git / GitHub / GitHub Classroom (2 Days)
              </ListItem>
              <ListItem>
                Python (2 Weeks)
              </ListItem>
              <ListItem>
                Functional Programming, JavaScript refresher (1 - 2 Weeks)
              </ListItem>
              <ListItem>
                Node / GraphQL / Continous Delivery (4 Weeks)
              </ListItem>
              <ListItem>
                Angular / React  (Until The End)
              </ListItem>
            </List>
        </Slide>
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
        <Slide bgColor={'quaternary'}>
          <Layout>
            <Heading textColor={'secondary'} fit size={5}>
              Grading
            </Heading>
          </Layout>
          <List>
            <ListItem>
              Exam 1 -> 15%
            </ListItem>
            <ListItem>
              Exam 1 -> 15%
            </ListItem>
            <ListItem>
              Final Project / Exam -> 30%
            </ListItem>
            <ListItem>
              Assignments -> 25%
            </ListItem>
            <ListItem>
              OE Brief -> 05%
            </ListItem>
            <ListItem>
              Labs -> 10%
            </ListItem>
            <ListItem>
              Partcipation -> 05%
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Layout>
            <Image src={images.zombie} />
          </Layout>
        </Slide>
      </Deck>
      
    );
  }
}
