import api from "../helpers/api";

class PaymentTypeService {
  getAll() {
    return api.sendRequest('/api/paymenttype/', 'get')
      .then(x => x.data);
  }
}

export default new PaymentTypeService();
