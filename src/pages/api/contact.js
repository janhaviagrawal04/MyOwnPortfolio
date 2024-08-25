import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: data.subject,
                text: `
                    Name: ${data.name}\n
                    Email: ${data.email}\n
                    Message: ${data.message}
                `,
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                        <h2>Contact Form Submission</h2>
                        <p><strong>Name:</strong> ${data.name}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Message:</strong> ${data.message}</p> 
                    </div>
                `
            });
            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    return res.status(400).json({ message: 'Bad Request' });
}

export default handler;
