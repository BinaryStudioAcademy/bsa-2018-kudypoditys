module.exports = {
    jwtPrivateKey: 'mySecret',
    accessTokenLife: 999990 * 60, //30minute*60seconds
    refreshTokenLife: 30 * 24 * 60, //30days*24hours*60second
    verifyEmailTokenLife: 30 * 60, // 30 min * 60 sec
    jwtRefreshTokenPrivateKey: 'myRefreshSecret'
};
