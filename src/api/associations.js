function associations(models) {
    const {
        AccommodationRule,
        BedInRoom,
        BedType,
        City,
        Country,
        Discount,
        Facility,
        FacilityCategory,
        FacilityList,
        Favorite,
        Image,
        Message,
        PaymentType,
        Property,
        PropertyCategory,
        PropertyPaymentType,
        PropertyType,
        Reservation,
        Review,
        ReviewCategory,
        Role,
        Room,
        RoomDiscount,
        RoomType,
        ScoreByCategory,
        User,
        UserSetting,
        VerificationStatus,
        UserRefreshToken
    } = models;

    // console.log(models);
    // return;

    // VerificationStatus associations
    VerificationStatus.hasMany(Property);

    // UserSetting associations
    UserSetting.hasMany(User);

    // User associations
    User.belongsTo(Role);
    User.belongsTo(UserSetting);

    User.hasOne(UserRefreshToken);

    User.hasMany(Reservation);
    User.hasMany(Property);
    User.hasMany(Review);
    User.hasMany(Favorite);

    // ScoreByCategory associations - проміжна таблиця
    ScoreByCategory.belongsTo(ReviewCategory);
    ScoreByCategory.belongsTo(Review);

    // RoomType associations
    RoomType.hasMany(Room);

    // RoomDiscount associations - проміжна таблиця
    RoomDiscount.belongsTo(Room);
    RoomDiscount.belongsTo(Discount);

    // Room associations
    Room.belongsTo(RoomType);
    Room.belongsTo(Property);

    Room.hasMany(Reservation);
    Room.hasMany(Image);
    Room.hasMany(BedInRoom);
    Room.hasMany(RoomDiscount);

    // Role associations
    Role.hasMany(User);

    // ReviewCategory associations
    ReviewCategory.hasMany(ScoreByCategory);

    // Review associations
    Review.belongsTo(User);
    Review.belongsTo(Property);

    Review.hasMany(ScoreByCategory);

    // Reservation associations
    Reservation.belongsTo(User);
    Reservation.belongsTo(Room);
    Reservation.belongsTo(PaymentType);

    Reservation.hasMany(Message);

    // PropertyType associations
    PropertyType.hasMany(Property);
    PropertyType.hasMany(PropertyPaymentType);

    // PropertyPaymentType associations - проміжна таблиця
    PropertyPaymentType.belongsTo(Property);
    PropertyPaymentType.belongsTo(PaymentType);

    // PropertyCategory ???

    // Property associations
    Property.belongsTo(User);
    Property.belongsTo(VerificationStatus);
    Property.belongsTo(City);
    Property.belongsTo(PropertyType);
    Property.belongsTo(AccommodationRule);

    Property.hasMany(Favorite);
    Property.hasMany(Review);
    Property.hasMany(FacilityList);
    Property.hasMany(PropertyPaymentType);
    Property.hasMany(Room);


    // PaymentType associations
    PaymentType.hasMany(Reservation);
    PaymentType.hasMany(PropertyPaymentType);

    // Message associations
    Message.belongsTo(Reservation);

    // Image associations
    Image.belongsTo(Property);
    Image.belongsTo(Room);

    // Favorite associations - проміжна таблиця
    Favorite.belongsTo(User);
    Favorite.belongsTo(Property);

    // FacilityList associations - проміжна таблиця
    FacilityList.belongsTo(Facility);
    FacilityList.belongsTo(Property);

    // FacilityCategory associations
    FacilityCategory.hasMany(Facility);

    // Facility associations
    Facility.belongsTo(FacilityCategory);
    Facility.hasMany(FacilityList);

    // Discount associations
    Discount.hasMany(RoomDiscount);

    // Country associations
    Country.hasMany(City);

    // City associations
    City.belongsTo(Country);
    City.hasMany(Property);

    // BedType associations
    BedType.hasMany(BedInRoom);

    // BedInRoom associations - проміжна таблиця
    BedInRoom.belongsTo(BedType);
    BedInRoom.belongsTo(Room);

    // AccommodationRule associations
    AccommodationRule.hasMany(Property);

    // UserRefreshToken associations
    UserRefreshToken.belongsTo(User);

    // Many To Many Associations
    ReviewCategory.belongsToMany(Review, { through: 'scoreByCategory' });
    Review.belongsToMany(ReviewCategory, { through: 'scoreByCategory' });

    Room.belongsToMany(Discount, { through: 'roomDiscount' });
    Discount.belongsToMany(Room, { through: 'roomDiscount' });

    Property.belongsToMany(PaymentType, { through: 'propertyPaymentType' });
    PaymentType.belongsToMany(Property, { through: 'propertyPaymentType' });

    User.belongsToMany(Property, { as: 'favoriteProperties', through: 'favorite' });
    Property.belongsToMany(User, { as: 'likedByUsers', through: 'favorite' });

    Facility.belongsToMany(Property, { through: 'facilityList' });
    Property.belongsToMany(Facility, { through: 'facilityList' });

    Room.belongsToMany(BedType, { through: 'bedInRoom' });
    BedType.belongsToMany(Room, { through: 'bedInRoom' });

    // Image.findAll({ include: [{ model: Room }] }) :D
    // image = { propertyId: 1, roomId: 1 } room = { id: 1, propertyId: 2 }


}

module.exports = associations;