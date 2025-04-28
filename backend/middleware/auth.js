import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeaderToken = req.headers.authorization;
  if (!authHeaderToken)
    return res.status(401).json({ message: "Token manquant" });

  const token = authHeaderToken.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
  }
};
