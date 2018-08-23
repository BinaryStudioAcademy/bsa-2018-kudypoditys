const authPaths = [
    {
        url: "/api/property",
        methods: ["post"]
    },
    {
        url: "/api/users/current",
        methods: ["get"]
    },
    {
        url: "/api/reservation",
        methods: null
    }
];

module.exports = authPaths;
