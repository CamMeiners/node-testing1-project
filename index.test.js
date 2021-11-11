const utils = require('./index');

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
});

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
});

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [
      { integer: 1 },
      { integer: 3 },
      { integer: 4 },
      { integer: 5 },
      { integer: 1200 },
      { integer: 6 },
    ];
    const expected = 1200;
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
  });
});

describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const returnedValue = counter.countDown();
    expect(returnedValue).toEqual(3);
  });
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    const returnedValue2 = counter.countDown();
    expect(returnedValue2).toEqual(2);
  });
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown(); //3
    counter.countDown(); //2
    counter.countDown(); //1
    counter.countDown(); //0
    const bruh = counter.countDown(); //0
    expect(bruh).toEqual(0);
  });
});

describe('[Exercise 5] Seasons', () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const plzBeSummer = seasons.next();
    expect(plzBeSummer).toEqual('summer');
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    const plzBeFall = seasons.next();
    expect(plzBeFall).toEqual('fall');
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    const plzBeWinter = seasons.next();
    expect(plzBeWinter).toEqual('winter');
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    const plzBeSpring = seasons.next();
    expect(plzBeSpring).toEqual('spring');
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    const plzBeSummer = seasons.next();
    expect(plzBeSummer).toEqual('summer');
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let plzBeSpring;
    for (let i = 0; i < 40; i++) {
      plzBeSpring = seasons.next();
    }
    expect(plzBeSpring).toEqual('spring');
  });
});

describe('[Exercise 6] Car', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
  });
  test('[15] driving the car returns the updated odometer', () => {
    const input = 50;
    focus.drive(input);
    expect(focus.odometer).toEqual(input);
  });
  test('[16] driving the car uses gas', () => {
    const input = 300;
    focus.drive(input);
    expect(focus.tank).toEqual(10);
  });
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600);
    focus.refuel(20);
    focus.drive(600);
    expect(focus.odometer).toEqual(1200);
  });
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(100);
    expect(focus.tank).toEqual(20);
  });
});

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const bruh = await utils.isEvenNumberAsync(12312314510982);
    expect(bruh).toBeTruthy();
  });
  test('[20] resolves false if passed an odd number', async () => {
    const bruh = await utils.isEvenNumberAsync(12312314510981);
    expect(bruh).toBeFalsy();
  });
});
