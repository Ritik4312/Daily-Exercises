const exspress = require('express');
const connectdb = require('./config/db');
const app = exspress();
app.use(exspress.json());
const cors = require('cors');
app.use(cors());

connectdb();

app.use('/api', require('./routes/todo'));
app.use('/api/user', require('./routes/user'));

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})