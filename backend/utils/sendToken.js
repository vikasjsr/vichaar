export const sendToken = (res, user, message, statusCode = 200) => {
  const token = user.getJWTToken();

  console.log(token);
  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    path: "/",
    domain: "vichaar-58ov.onrender.com",// Set to backend domain into frontend
    sameSite: "None"
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message,
    user,
  });
};
