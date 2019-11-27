console.log('started');
let p = {
    name: {firstName: '0', lastName: '0a'},
    address: {street: 'street0', city: 'city0'}
    };
let persons = [
    {
    name: {firstName: '0', lastName: '0a'},
    address: {street: 'street1', city: 'city1'}
    },
    {
    name: {firstName: '2', lastName: '2c'},
    address: {street: 'street1', city: 'city1'}
    },
    {
    name: {firstName: '2', lastName: '2c'},
    address: {street: 'street2', city: 'city2'}
    },
    {
    name: {firstName: '3', lastName: '2d'},
    address: {street: 'street2', city: 'city2'}
    },
];
function minRelationLvl(peopleArray,person1, person2, relationLvl) {
    const relationLevel = relationLvl+1;
    let relatedByName = peopleArray.filter(person => person.name.firstName+'-'+person.name.lastName===person1.name.firstName+'-'+person1.name.lastName);
    let relatedByAddress = peopleArray.filter(person => person.address.street+'-'+person.address.city===person1.address.street+'-'+person1.address.city);
    if (relatedByName.length === 0 && relatedByAddress.length === 0) { return -1 }
    if (relatedByName.find(person => person === person2) ||
        relatedByAddress.find(person => person === person2)) {
        return relationLevel
    } else {
        const res = [];
        relatedByName.forEach(p =>
            res.push(minRelationLvl(peopleArray.filter(p0 => p0 !== p), p, person2, relationLevel)));
        relatedByAddress.forEach(p =>
            res.push(minRelationLvl(peopleArray.filter(p0 => p0 !== p), p, person2, relationLevel)));
        return Math.min(...res)
    }
}
let a = minRelationLvl(persons, p, persons[3],0);
console.log(a);

