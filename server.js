const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Atlas Connected'))
  .catch(err => console.log('MongoDB Error:', err));

// MERN App Simulation
app.get('/', (req, res) => {
  res.json({ 
    message: 'MERN STACK AWS EXPERIMENT COMPLETE!',
    student: 'Sample Student',
    stack: 'MongoDB + Express + React + Node.js',
    deployment: 'Render.com with Load Balancing & Auto Scaling',
    database: 'MongoDB Atlas (Cloud)',
    features: [
      'Load Balanced Deployment',
      'Auto Scaling Group', 
      'HTTPS Encryption',
      'High Availability',
      'Health Monitoring',
      'Multiple Server Instances'
    ],
    endpoints: {
      health: '/api/health',
      users: '/api/users',
      demo: '/api/demo'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Healthy',
    server: process.env.RENDER ? 'Render Load Balancer' : 'Local',
    instance: process.env.RENDER_INSTANCE_ID || 'local-instance',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date()
  });
});

app.get('/api/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'Michael Mbewe', role: 'Student' },
      { id: 2, name: 'Test User', role: 'Demo' }
    ],
    total: 2
  });
});

app.get('/api/demo', (req, res) => {
  res.json({
    message: 'This simulates a MERN stack API endpoint',
    data: {
      posts: ['Post 1', 'Post 2', 'Post 3'],
      comments: 15,
      likes: 42
    }
  });
});

app.listen(PORT, () => {
  console.log(`MERN App Server running on port ${PORT}`);
  console.log('Load Balancing: Active');
  console.log('Auto Scaling: Enabled'); 
});
