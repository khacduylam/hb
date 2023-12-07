let _userController = null;

exports.getUserController = function (userService) {
  if (_userController) {
    return _userController;
  }

  const responseJson = function (res, data = null, message, status) {
    return res.status(status || 200).json({ data, message: message || 'Ok' });
  };

  _userController = {
    findOneById: async function (req, res) {
      const id = +req.params.id;
      const user = await userService.findOneById(id);
      if (!user) {
        return responseJson(res, null, 'Not found', 404);
      }

      return responseJson(res, user, null, 200);
    },

    findAll: async function (_, res) {
      const users = await userService.findAll();

      return responseJson(res, users, null, 200);
    },

    create: async function (req, res) {
      const data = req.body;
      const user = await userService.create(data);

      return responseJson(res, user, null, 201);
    },

    update: async function (req, res) {
      const id = +req.params.id;
      const data = req.body;

      const user = await userService.findOneAndUpdateById(id, data);
      if (!user) {
        return responseJson(res, null, 'Not found', 404);
      }

      return responseJson(res, user, null, 200);
    },

    delete: async function (req, res) {
      const id = +req.params.id;

      const userId = await userService.findOneAndDeleteById(id);
      if (!userId) {
        return responseJson(res, null, 'Not found', 404);
      }

      return responseJson(res, id, null, 200);
    },
  };

  return _userController;
};
