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
        UserRefreshToken,
        BasicFacility,
        PropertyLanguage,
        Language,
        Availability,
        Currency,
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
    User.belongsTo(Country);
    User.belongsTo(PaymentType);

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

    //Rooms Availability
    Availability.belongsTo(Room);

    // Room associations
    Room.belongsTo(RoomType);
    Room.belongsTo(Property);

    Room.hasMany(Reservation);
    Room.hasMany(Image);
    Room.hasMany(BedInRoom, { onDelete: 'cascade' });
    Room.hasMany(RoomDiscount);
    Room.hasMany(Availability);

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

    // PropertyPaymentType associations - проміжна таблиця
    PropertyPaymentType.belongsTo(Property);
    PropertyPaymentType.belongsTo(PaymentType);

    // Property associations
    Property.belongsTo(User);
    Property.belongsTo(VerificationStatus);
    Property.belongsTo(City);
    Property.belongsTo(PropertyType);
    Property.belongsTo(AccommodationRule);
    Property.belongsTo(Currency);

    Property.hasMany(Favorite);
    Property.hasMany(Review);
    Property.hasMany(FacilityList);
    Property.hasMany(PropertyPaymentType);
    Property.hasMany(Room);
    Property.hasMany(Image);
    Property.hasMany(PropertyLanguage);

    Property.hasOne(BasicFacility);

    // Currency associations
    Currency.hasMany(Property);

    // BasicFacility associations
    BasicFacility.belongsTo(Property);

    // PropertyLanguage associations
    PropertyLanguage.belongsTo(Property);
    PropertyLanguage.belongsTo(Language);

    // Language associations
    Language.hasMany(PropertyLanguage);

    // PaymentType associations
    PaymentType.hasMany(Reservation);
    PaymentType.hasMany(PropertyPaymentType);
    PaymentType.hasMany(User);

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
    Country.hasMany(User);

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
    ReviewCategory.belongsToMany(Review, { through: "scoreByCategory" });
    Review.belongsToMany(ReviewCategory, { through: "scoreByCategory" });

    Room.belongsToMany(Discount, { through: "roomDiscount" });
    Discount.belongsToMany(Room, { through: "roomDiscount" });

    Property.belongsToMany(PaymentType, { through: "propertyPaymentType" });
    PaymentType.belongsToMany(Property, { through: "propertyPaymentType" });

    User.belongsToMany(Property, {
        as: "favoriteProperties",
        through: "favorite"
    });
    Property.belongsToMany(User, { as: "likedByUsers", through: "favorite" });

    Facility.belongsToMany(Property, { through: "facilityList" });
    Property.belongsToMany(Facility, { through: "facilityList" });

    Room.belongsToMany(BedType, { through: "BedInRoom" });
    BedType.belongsToMany(Room, { through: "BedInRoom" });

    Property.belongsToMany(Language, { through: 'propertyLanguage' });
    Language.belongsToMany(Property, { through: 'propertyLanguage' });

    // Image.findAll({ include: [{ model: Room }] }) :D
    // image = { propertyId: 1, roomId: 1 } room = { id: 1, propertyId: 2 }
}

module.exports = associations;
