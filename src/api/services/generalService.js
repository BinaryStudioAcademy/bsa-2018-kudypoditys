class Service {
    constructor(repository) {
        this.repository = repository;
    }

    create(data) {
        return this.repository.create(data).catch();
    }

    findAll() {
        return this.repository.findAll();
    }

    findById(id) {
        return this.repository.findById(id);
    }

    updateById(id, data) {
        return this.repository.updateById(id, data);
    }

    deleteById(id) {
        return this.repository.deleteById(id);
    }

    /*@param
     options (all optional):
        page (default 0): number,
        recordsOnPage (default 20): number,
        sortField (default 'createdAt'): string(model column),
        sortDirection (default 'DESC'): 'DESC' || 'ASC'
    */
    findByPage(options) {
        const { page, recordsOnPage, sortField, sortDirection } = options;
        return this.repository.findByPage(page, recordsOnPage, sortField, sortDirection);
    }
}

module.exports = Service;