module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd0b06ac8a0a88a9c680df547d7bf6cd'),
  },
});
