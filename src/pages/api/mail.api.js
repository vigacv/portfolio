import { sendMail } from "../../services/mailService";
const handler = async (req, res) => {
    try {
        const { method } = req;
        switch (method) {
            case "POST": {
                const { email, message } = req.body;

                if (!email || !message) res.status(400).json({ message: "Email and message parameters are required" });

                //Do some thing
                const finalMessage =
                    `Message from: ${email}
                    
                    Content:
                    ${message}`;

                await sendMail({
                    subject: "Contact request from portfolio",
                    fromEmail: email,
                    otpText: finalMessage,
                    toEmail: "vgabrielcv@gmail.com"
                });
                res.status(200).json({ message: "Success" });
                break;
            }
            case "GET": {
                //Do some thing
                res.status(200).send(req.auth_data);
                break;
            }
            default:
                res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
                res.status(405).end(`Method ${method} Not Allowed`);
                break;
        }
    } catch (err) {
        res.status(400).json({
            error_code: "api_one",
            message: err.message,
        });
    }
};

export default handler;