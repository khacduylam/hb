const { Router } = require('express');

const _userRouter = Router();

exports.getUserRouter = function (userController) {
  _userRouter.get('/:id', userController.findOneById);
  _userRouter.get('/', userController.findAll);
  _userRouter.post('/', userController.create);
  _userRouter.put('/:id', userController.update);
  _userRouter.delete('/:id', userController.delete);

  return _userRouter;
};
