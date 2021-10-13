const Router = require("express");
const User = require("../models/User");

const config = require("config");
const jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");

const router = new Router();

const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/registration",
  [
    check("firstName", "Некорректое имя").isString(),
    check("lastName", "Некорректая фамилия").isString(),
    check("phone", "Некорректый телефон").isString(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Некорректный запрос", field: "all", errors });
      }

      const { firstName, lastName, phone } = req.body;
      const candidate = await User.findOne({ phone });

      if (candidate) {
        return res.status(400).json({
          message: `Пользователь с телефоном ${phone} уже существует`,
          field: "phone",
        });
      }

      const user = new User({ firstName, lastName, phone });
      await user.save();

      return res.json({
        message: "Аккаунт успешно создан",
        field: "new",
      });
    } catch (e) {
      return res.send({ message: "Ошибка сервера" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { phone } = req.body;
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
      expiresIn: "1h",
    });

    return res.json({
      token,
      user: {
        id: user.id,
        phone: user.phone,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Ошибка сервера" });
  }
});

router.get("/auth", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
      expiresIn: "1h",
    });
    return res.json({
      token,
      user: {
        id: user.id,
        phone: user.phone,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
