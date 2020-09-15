function Async(gen) {
  const generator = gen;

  this.run = function () {
    let sequence;

    function process(result) {
      if (result.done) {
        return;
      }
      // we are expecting the generator to yield a Promise as
      // the value property not and actual primitive or object,
      // in turn the Promise is what will be responsible for
      // returning a "value"
      result.value.then(function (value) {
        process(sequence.next(value));
      }, (err) => {
        process(sequence.throw(err));
      });
    }

    sequence = generator();
    // remember when we invoke the next method of a generator
    // it returns an object { done: false, value: xxx }
    const next = sequence.next();
    process(next);
  }
}

function getStockPrice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(50);
    }, 500);
  });
}

function executeTrade() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject(new Error('failure!'));
      resolve();
    }, 500);
  });
}

function* main() {
  try {
    const price = yield getStockPrice();
    if (price > 45) {
      yield executeTrade();
      console.log('trade executed');
    } else {
      console.log('trade not executed.');
    }
  } catch (ex) {
    console.log('Error:', ex.message);
  }
}

const async = new Async(main);
async.run();