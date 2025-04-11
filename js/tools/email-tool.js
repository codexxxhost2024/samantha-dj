// tools/email-tool.js
import { Logger } from '../utils/logger.js';
import { ApplicationError, ErrorCodes } from '../utils/error-boundary.js';

export class EmailTool {
    /**
     * Returns the tool declaration for the email tool.
     * This is used by the Gemini API to understand what the tool can do.
     *
     * @returns {Object} The tool declaration.
     */
    getDeclaration() {
        return {
            name: 'sendEmail',
            description: 'Sends an email with the specified content to the specified recipient.',
            parameters: {
                type: 'object',
                properties: {
                    recipient: {
                        type: 'string',
                        description: 'The email address of the recipient.',
                    },
                    subject: {
                        type: 'string',
                        description: 'The subject of the email.',
                    },
                    body: {
                        type: 'string',
                        description: 'The body content of the email.',
                    },
                    attachment: {
                        type: 'string',
                        description: 'The document to attach to the email (base64 encoded).',
                    },
                },
                required: ['recipient', 'subject', 'body'],
            },
        };
    }

    /**
     * Executes the email tool by sending an email with the specified parameters.
     *
     * @param {Object} args - The arguments for the email tool.
     * @param {string} args.recipient - The email address of the recipient.
     * @param {string} args.subject - The subject of the email.
     * @param {string} args.body - The body content of the email.
     * @param {string} [args.attachment] - The document to attach to the email (base64 encoded).
     * @returns {Promise<string>} A promise that resolves with a success message.
     * @throws {ApplicationError} Throws an error if the email sending fails.
     */
    async execute(args) {
        const { recipient, subject, body, attachment } = args;

        try {
            // Simulate sending an email (replace with actual email sending logic)
            Logger.info(`Sending email to ${recipient} with subject: ${subject}`);
            Logger.info(`Email body: ${body}`);

            if (attachment) {
                Logger.info(`Email attachment: ${attachment}`);
            }

            // Simulate a delay for email sending
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return 'Email sent successfully';
        } catch (error) {
            Logger.error('Failed to send email', error);
            throw new ApplicationError(
                'Failed to send email',
                ErrorCodes.INTERNAL_ERROR
            );
        }
    }
}