let storage = require('./main');

test('Testing adding score to score tab', () => {
    let obj = {
      answers: 8,
      time: 123
    };
    const local = new storage();
  
    expect(local.save(obj)).toEqual(
      {
        answers: 8,
        time: 123
      },
    );
  });

  test('Testing wrong value type for answers', () => {
    let obj = {
        answers: '8',
        time: 123
    };
  
    const local = new storage();
  
    expect(() => {
      local.save(obj);
    }).toThrow('Answers is not a number');
  });

  test('Testing wrong value type for time', () => {
    let obj = {
        answers: 8,
        time: '123'
    };
  
    const local = new storage();
  
    expect(() => {
      local.save(obj);
    }).toThrow('Time is not a number');
  });

  test('Saving empty object', () => {
    obj = {

    };


    const local = new storage();

    expect(() => {
      local.save(obj);
    }).toThrow('Object is empty!');
  });