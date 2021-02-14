require('./events')();

test('groupEventsByDay', () => {
  let events = [
    {
      id: 108,
      startsAt: '2021-01-28T13:01:11Z',
      endsAt: '2021-01-28T15:01:11Z',
      title: 'Daily dance',
    },
    {
      id: 107,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 128,
      startsAt: '2021-01-30T13:01:11Z',
      endsAt: '2021-01-30T15:01:11Z',
      title: 'Daily dander',
    },
  ];

  let groupedEvents = groupEvents(events);

  expect(Object.keys(groupedEvents)[0]).toBe('0');
  expect(Object.keys(groupedEvents)[1]).toBe('1');
  expect(Object.keys(groupedEvents)[2]).toBe('3');
});

test('groupEventsByDay sorts the events', () => {
  let events = [
    {
      id: 108,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily dance',
    },
    {
      id: 107,
      startsAt: '2021-01-27T11:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
  ];

  let expectedFirst = events[1];
  let expectedSecond = events[0];

  let groupedEvents = groupEvents(events);

  expect(Object.keys(groupedEvents)[0]).toBe('0');
  expect(groupedEvents[Object.keys(groupedEvents)[0]][0]).toBe(expectedFirst);
  expect(groupedEvents[Object.keys(groupedEvents)[0]][1]).toBe(expectedSecond);
});

test('moveEvent moves the event to correct place', () => {
  let groupedEvents = {
    0: [
      {
        id: 106,
        startsAt: '2021-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
    ],
    2: [
      {
        id: 5676,
        startsAt: '2021-01-29T13:01:11Z',
        endsAt: '2021-01-29T15:01:11Z',
        title: 'Daily walk',
      },
    ],
  };

  let expected = {
    id: 5676,
    startsAt: '2021-01-30T13:01:11Z',
    endsAt: '2021-01-30T13:01:11Z',
    title: 'Daily walk',
  };

  let groupEventsMoved = moveEvent(groupedEvents, 5676, 3);

  expect(groupEventsMoved[Object.keys(groupEventsMoved)[1]][0].toString()).toBe(
    expected.toString(),
  );
});
