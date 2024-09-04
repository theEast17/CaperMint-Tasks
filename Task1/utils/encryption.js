/* eslint-disable no-undef */
// encryption.js
import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
// Ensure the secretKey is 32 bytes long
const secretKey = crypto.createHash('sha256').update(process.env.SECRET_KEY1 || 'poorv').digest('base64').substr(0, 32); 
const iv = crypto.randomBytes(16); // Initialization vector

export const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'utf8'), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), encryptedData: encrypted };
};

export const decrypt = (hash) => {
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'utf8'), Buffer.from(hash.iv, 'hex'));
    let decrypted = decipher.update(hash.encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};
