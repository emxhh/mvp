import React from 'react';
import SearchBar from './SearchBar.jsx';
import EventCard from './EventCard.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Events = (props) => {
  const { events, onClick } = props;
  const sortedEvents = events.sort((event1, event2) => {
    const dateA = new Date(event1.createdAt);
    const dateB = new Date(event2.createdAt);
    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  });

  const recentEvents = sortedEvents.slice(0, 6);
  const classes = useStyles();

  return (
    <div>
      <div></div>
      <div className="searchbar">
        <SearchIcon />
        <SearchBar />
      </div>

      <div className="categories">
        <span><button className="category-buttons">Social</button> </span>
        <span><button className="category-buttons">Classes</button> </span>
        <span><button className="category-buttons">Adoption</button> </span>
        <span><button className="category-buttons">Puppy Therapy</button> </span>
        <span><button className="category-buttons">Fitness</button> </span>
      </div>

      <div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {recentEvents.map((event) => (
              <EventCard
                id={event.id}
                title={event.title}
                city={event.city}
                date={event.start_time}
                image={event.image}
                description={event.description}
                onClick={onClick}
              />
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Events;
