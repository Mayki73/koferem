const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.com",
    port: 465,
    secure: true,
    auth: {
      user: "servicecoffee.5upport@yandex.ru",
      pass: "xjtsmyemkrbdvzlq",
    },
  });
  const { phone, name, message } = JSON.parse(event.body);
  if (phone === "+375 () - -")
    return {
      statusCode: 500,
      body: "Произошла ошибка!",
    };

  const subject = `Новая заявка из Koferem`;

  const mailOptions = {
    from: "servicecoffee.5upport@yandex.ru",
    to: "serviscoffee@yandex.ru", //serviscoffee@yandex.ru
    subject: subject,
    html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
            body {
                font-family: Arial, sans-serif;
              }
            span {
                font-weight: bold;
            }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
              }
            </style>
          </head>
          <body>
          <div class="container">
          <h1>Новая заявка из Koferem</h1>
          <p><span>Дата:</span> ${new Date(
            new Date().setHours(new Date().getHours() + 3)
          ).toLocaleString()}</p>
          <p><span>Имя:</span> ${name}</p>
          <p><span>Телефон:</span> ${phone}</p>
          ${message ? "<p><span>Вопрос:</span> " + message + "</p>" : ""}
            <p>С уважением, Koferem</p>
        </div>
          </body>
        </html>
      `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return {
      statusCode: 200,
      body: "Ваши данные успешно отправлены!",
    };
  } catch (error) {
    console.log("Email sent:", error);
    return {
      statusCode: 500,
      body: "Произошла ошибка!",
    };
  }
};
