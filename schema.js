const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull    
} = require('graphql');

// Hardcoded data
const activities = [
    {id: '1', name: '2km/1km/1km', type: 'run',  distance: 13},
    {id: '2', name: 'Recup LC',    type: 'bike', distance: 35}
];

// Activity Type
const ActivityType = new GraphQLObjectType({
    name: 'Activity',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        type: {type: GraphQLString},
        distance: {type: GraphQLInt}        
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        activity: {
            type: ActivityType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                for (let i = 0; i < activities.length; i++) {
                    if (activities[i].id == args.id) {
                        return activities[i];
                    }
                }
            }
        },
        activities: {
            type: new GraphQLList(ActivityType),
            resolve(parentValue, args) {
                return activities;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});