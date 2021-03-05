import moment from 'moment'

export default [{
    id: '1',
    description: 'workshop',
    note: '',
    amount: 20,
    createdAt: 0
},
{
    id: '2',
    description: 'gym',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'session',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];