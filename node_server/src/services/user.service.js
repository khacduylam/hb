const { USER_MODEL } = require('../common/constants');
const User = require('../models/user.model');

let _userRepository = null;
let _userService = null;

exports.getUserService = function (dataSource) {
  if (_userService) {
    return _userService;
  }

  _userRepository = dataSource.getRepository(USER_MODEL);
  _userService = {
    findOneById: async function (id) {
      return await _userRepository.findOneBy({ id });
    },

    findAll: async function () {
      return await _userRepository.findBy({});
    },

    create: async function (data) {
      const user = _userRepository.create({ ...data });
      return await _userRepository.save(user);
    },

    findOneAndUpdateById: async function (id, data) {
      const user = await _userRepository.findOneBy({ id });
      if (!user) {
        return null;
      }

      Object.assign(user, data);
      await _userRepository.save(user);

      return user;
    },

    findOneAndDeleteById: async function (id) {
      const user = await _userRepository.findOneBy({ id });
      if (!user) {
        return null;
      }

      await _userRepository.delete(id);

      return id;
    },
  };

  return _userService;
};
