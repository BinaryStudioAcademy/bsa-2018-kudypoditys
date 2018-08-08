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
        VerificationStatus
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

    Property.hasMany(Favorite);
    Property.hasMany(Review);
    Property.hasMany(FacilityList);
    Property.hasMany(PropertyPaymentType);
    Property.hasMany(Room);
    Property.hasMany(AccommodationRule);

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
    AccommodationRule.belongsTo(Property);

    // Many To Many Associations
    ReviewCategory.belongsToMany(Review, { through: 'ScoreByCategory' });
    Review.belongsToMany(ReviewCategory, { through: 'ScoreByCategory' });

    Room.belongsToMany(Discount, { through: 'RoomDiscount' });
    Discount.belongsToMany(Room, { through: 'RoomDiscount' });

    Property.belongsToMany(PaymentType, { through: 'PropertyPaymentType' });
    PaymentType.belongsToMany(Property, { through: 'PropertyPaymentType' });

    User.belongsToMany(Property, { as: 'favoriteProperties', through: 'Favorite' });
    Property.belongsToMany(User, { as: 'likedByUsers', through: 'Favorite' });

    Facility.belongsToMany(Property, { through: 'FacilityList' });
    Property.belongsToMany(Facility, { through: 'FacilityList' });

    Room.belongsToMany(BedType, { through: 'BedInRoom' });
    BedType.belongsToMany(Room, { through: 'BedInRoom' });

    // Image.findAll({ include: [{ model: Room }] }) :D
    // image = { propertyId: 1, roomId: 1 } room = { id: 1, propertyId: 2 }

}

module.exports = associations;