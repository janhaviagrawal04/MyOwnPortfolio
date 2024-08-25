import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "janhavia0801@gmail.com",
    pass: "xfyfincvstpskexc"
  }
});

export const mailOptions = {
  from: "janhavia0801@gmail.com",
  to: "janhavia0801@gmail.com"
};
