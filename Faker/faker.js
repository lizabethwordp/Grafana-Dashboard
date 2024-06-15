// Program to generate some fake
// names with their job titles

// Requiring faker module
const faker = require('faker')

for(let i=0; i<50; i++){

// Fake first name
const firstName = faker.name.firstName()

// Fake last name
const lastName = faker.name.lastName()

// Fake suffix
const suffix = faker.name.suffix()

// Fake job Title
const jobTitle = faker.name.jobTitle()

console.log(`${suffix} ${firstName}
	${lastName} works as '${jobTitle}'`)
console.log(typeof(firstName))
console.log(i)
}

// console.log(x);
// console.log(firstName)

// faker.unique<Method>(method: Method, args?: Parameters<Method>, options: {
// 	compare: (obj: Record<RecordKey, RecordKey>, key: RecordKey) => -1 | 0,
// 	currentIterations: number,
// 	exclude: RecordKey | RecordKey[],
// 	maxRetries: number,
// 	maxTime: number,
// 	startTime: number,
// 	store: Record<RecordKey, RecordKey>
//   } = {}): ReturnType<Method>
//   faker.unique(faker.name.firstName) // 'Corbin'


// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = [1, 'hello', 5, 8];

const result = getRandomItem(array);
console.log(result);

