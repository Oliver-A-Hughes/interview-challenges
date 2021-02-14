var moment = require('moment');

/** 
  An event could look like this:
  ```
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z', 
    endsAt: '2021-01-27T15:01:11Z', 
    title: 'Daily walk',
  },
  {
    id: 107,
    startsAt: '2021-01-29T13:01:11Z', 
    endsAt: '2021-01-29T15:01:11Z', 
    title: 'Daily walk',
  }
  ```
*/

/** 
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
    ],
    [
      
    ]
  }
 ```

 Your solution should not modify any of the function arguments
*/
const groupEventsByDay = (events) => {
  var eventsMap = {};

  let sortedEvents = events.sort(
    (a, b) => new Date(a.startsAt.toString()) - new Date(b.startsAt.toString()),
  );

  // convert to moment first date
  let momentFirstDate = moment(sortedEvents[0].startsAt);

  events.forEach((event) => {
    let date = moment(event.startsAt);

    // get the difference between the first date and this one to insert as key in map
    let difference = date.diff(momentFirstDate, 'days');

    if (difference in eventsMap) {
      eventsMap[difference].push(event);
    } else {
      eventsMap[difference] = new Array(event);
    }
  });

  return eventsMap;
};

/** 
  Adjust the start and end date of an event so it maintains its total duration, but is moved `toDay`.
  `eventsByDay` should be the same as the return value of `groupEventsByDay`
  `id` will be the event that should be moved
  `toDay` will be a number that indicates the key of `eventsByDay` that the target event should be moved to

  Example:
  ```
  eventsByDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
      ],
      2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )
  ```
  Should return something like 
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
    ],
    3: [
      { id: 5676, startsAt: '2021-01-30T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    ]
  },
  ```

  Your solution should not modify any of the function arguments
*/
const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss[Z]';
const moveEventToDay = (eventsByDay, id, toDay) => {
  Object.keys(eventsByDay).forEach((key) => {
    let eventWeCareAbout = eventsByDay[key].filter((e) => e.id == id);
    let arrayWithoutEventWeCareAbout = eventsByDay[key].filter(
      (e) => e.id != id,
    );
    eventsByDay[key] = new Array(...arrayWithoutEventWeCareAbout);
    if (eventsByDay[key] < 1) {
      delete eventsByDay[key];
    }

    if (eventWeCareAbout.length > 0) {
      let dayDifferance = toDay - key;
      let origionalDate = eventWeCareAbout[0].startsAt;
      let updatedEvent = {
        ...eventWeCareAbout[0],
        startsAt: moment(origionalDate)
          .add(dayDifferance, 'days')
          .format(DATE_FORMAT),
        endsAt: moment(origionalDate)
          .add(dayDifferance, 'days')
          .format(DATE_FORMAT),
      };
      if (!eventsByDay[toDay]) {
        eventsByDay[toDay] = new Array(updatedEvent);
      } else {
        eventsByDay[toDay].push(updatedEvent);
      }
    }
  });

  return eventsByDay;
};

module.exports = function () {
  this.groupEvents = function (events) {
    return groupEventsByDay(events);
  };
  this.moveEvent = function (eventsByDay, id, toDay) {
    return moveEventToDay(eventsByDay, id, toDay);
  };
};
