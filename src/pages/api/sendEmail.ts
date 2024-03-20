import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const transporter = nodemailer.createTransport({
    service: "yandex",
    auth: {
      user: "servicecoffee.5upport@yandex.ru",
      pass: "xjtsmyemkrbdvzlq",
    },
  });

  const { phone, name, message } = req.body;

  const subject = `Новая заявка из Koferem`;

  const mailOptions = {
    from: "servicecoffee.5upport@yandex.ru",
    to: "antoniestories@gmail.com", //serviscoffee@yandex.ru
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
              new Date().setHours(new Date().getHours() + 1)
            ).toLocaleString()}</p>
            ${name ? `<p><span>Имя:</span> ${name}</p>` : ""}
            <p><span>Телефон:</span> ${phone}</p>
            ${
              req?.socket?.remoteAddress
                ? `<p>
                  <span>IP Address:</span> ${req?.socket?.remoteAddress}
                </p>`
                : ""
            }
            ${message ? "<p><span>Вопрос:</span> " + message + "</p>" : ""}
            <p>С уважением, Koferem</p>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ statusCode: 200, message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
}
