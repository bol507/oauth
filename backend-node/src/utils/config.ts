import dotenv from 'dotenv';

dotenv.config({ path: `.env.local` });
const PORT = process.env.PORT

export default { PORT }