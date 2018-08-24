class Repository {
    constructor(model) {
        this.model = model;
    }

    create(data) {
        return this.model.create(data);
    }

    findByOptions(options) {
        return this.model.findAll({ where: options });
    }

    findAll() {
        return this.model.findAll();
    }

    findById(id) {
        return this.model.findById(id);
    }

    updateById(id, data) {
        return this.model.update(data, { where: { id: id } });
    }

    upsert(data) {
        return this.model.upsert(data);
    }

    deleteById(id) {
        return this.model.destroy({ where: { id: id } });
    }

    findByPage(
        page = 0,
        recordsOnPage = 20,
        sortField = "createdAt",
        sortDirection = "DESC"
    ) {
        let offset = undefined;
        if (page && recordsOnPage) offset = page * recordsOnPage;
        return this.model.findAll({
            limit: recordsOnPage,
            offset: offset,
            order: [[sortField, sortDirection]]
        });
    }
}

module.exports = Repository;
