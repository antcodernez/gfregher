import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos

  //Enviar el email
  await transport.sendMail({
    from: 'BienesRaices.com',
    to: email,
    subject: 'Confirma tu cuenta en BienesRaices.com',
    text: 'Confirma tu cuenta en BienesRaices.com',
    html: `
      <div style="font-family: monospace; background: linear-gradient(332deg ,#00ffa1, #5d5de4);color:#fff3f3eb";display: flex; flex-direction: column; justify-content: center; place-items: center;>
        <h1 style="text-align: center;">Bienvenido <b>${nombre}</b>, comprueba tu cuenta en BienesRaices.com</h1>

        <p style="text-aling:center">Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace: 
        <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 9200}/auth/confirmar/${token}" style="cursor:pointer;">Confirmar cuenta</a></p>

        <p>Si no creaste esta cuenta, puedes ignorar este email</p>
      </div>
    `
  })
}

const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos

  //Enviar el email
  await transport.sendMail({
    from: 'BienesRaices.com',
    to: email,
    subject: 'Restablece tu password en BienesRaices.com',
    text: 'Restablece tu password en BienesRaices.com',
    html: `
      <p>Hola ${nombre}, has solicitado restablecer tu password en BienesRaices.com</p>

      <p>Sigue el siguiente enlace para generar un password nuevo: 
      <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3001}/auth/olvide-password/${token}" >Restablecer password</a> </p>

      <p>Si tu no solicitaste el cambio de password, puedes ignorar este email</p>
  `
  })

}

export { emailRegistro, emailOlvidePassword }